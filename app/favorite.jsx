import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useContext } from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import { StatusBar } from 'expo-status-bar';
import  { FavoriteContext } from '../context/favoriteContext'; // Import FavoriteContext
import ContactListItem from '../components/ContactListItem'; // Reuse ContactListItem component
import { useNavigation } from '@react-navigation/native'

const Favorite = () => {
  // Lấy danh sách yêu thích từ context
  const { favorites } = useContext(FavoriteContext);
  const navigation = useNavigation();
  // Nếu không có mục yêu thích, hiển thị thông báo
  if (favorites.length === 0) {
    return (
      <ScreenWrapper bg={"white"}>
        <StatusBar style='dark' />
        <View style={styles.container}>
          <Text>Không có mục yêu thích nào.</Text>
        </View>
      </ScreenWrapper>
    );
  }

  // Hàm render từng mục trong danh sách yêu thích
  const renderFavorite = ({ item }) => {
    const { name, avatar, phone, url } = item;
    return (
      <ContactListItem
        name={name}
        avatar={avatar}
        phone={phone}
        isFavorite={true}
        onPress={() => navigation.navigate('detail', {contact: item, url})}
      />
    );
  };

  return (
    <ScreenWrapper bg={"white"}>
      <StatusBar style='dark' />
      <View style={styles.container}>
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.phone}
          renderItem={renderFavorite}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
