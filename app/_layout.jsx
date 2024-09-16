import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home';
import Favorite from './favorite';
import Icon from 'react-native-vector-icons/Ionicons';
import Detail from './detail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FavoriteProvider } from '../context/favoriteContext';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen
        name="detail"
        component={Detail}
        options={({ route }) => ({
          headerTitle: 'Contact Detail',
          headerRight: () => (
            <Icon
              name="share-outline"
              size={25}
              onPress={() => route.params.onShare()} 
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default function _layout() {
  return (
    <FavoriteProvider>
        <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'favorite') {
            iconName = focused ? 'star' : 'star-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="home" component={HomeStack} /> 
      <Tab.Screen name="favorite" component={Favorite} />
    </Tab.Navigator>
    </FavoriteProvider>
    
  );
}
