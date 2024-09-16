import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import {wp, hp} from '../helpers/common'
import { StatusBar } from 'expo-status-bar'
import { fetchContacts } from '../utility/api'
import ContactListItem from '../components/ContactListItem'
import { FavoriteContext } from '../context/favoriteContext'
import { useNavigation } from '@react-navigation/native'


const keyExtractor = ({phone}) => phone;

const Home = () => {

  //
  const navigation = useNavigation();
  // state
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // context
  const {favorites, addFavorite} = useContext(FavoriteContext);

  //console.log(favorites)
  const handleFavoritePress = (contact) => {
   addFavorite(contact);
  };
  

  // effect
  useEffect(() => {
    fetchContacts()
    .then(
      contacts => {
        setContacts(contacts);
        setLoading(false);
        setError(false);
      }
    )
    .catch (
      e=> {
        console.log(e);
        setLoading(false);
        setError(true);
      }
    )
  }, [])


  // sort 
  const contactsSorted = contacts.sort((a,b) => a.name.localeCompare(b.name))
  const renderContact = ({item}) => {
    const {name, avatar, phone, url} = item;
    const isFavorite = favorites.some(fav => fav.phone === phone);
    return <ContactListItem
      name={name}
      avatar={avatar}
      phone={phone}
      isFavorite={isFavorite}
      onPress={() => navigation.navigate('detail', {contact: item, url})}
      onFavoritePress={() => handleFavoritePress(item)}
    />
            
  }
  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        {loading && <ActivityIndicator color="blue" size="large"/>}
        {error && <Text>Error...</Text>}
        {!loading && !error && (
          <FlatList
            data = {contactsSorted}
            keyExtractor={keyExtractor}
            renderItem={renderContact}
            />
        )}
      </View>
    </ScreenWrapper>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  }
})