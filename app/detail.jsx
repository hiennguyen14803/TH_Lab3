import { StyleSheet, Text, View, Share } from 'react-native'
import React, {useEffect} from 'react'
import DetailContact from '../components/DetailContact'
import ScreenWrapper from '../components/ScreenWrapper'

const Detail = ({route, navigation}) => {

  const { contact } = route.params;

  useEffect(() => {
    
    navigation.setParams({
      onShare: async () => {
        try {
          const result = await Share.share({
            message: `Contact: ${contact.name}\nPhone: ${contact.phone}\nCell: ${contact.cell}\nEmail: ${contact.email}`,
          });
        } catch (error) {
          console.log(error.message);
        }
      },
    });
  }, [navigation, contact]);

  return (
    <ScreenWrapper>
      <DetailContact route={route}/>
    </ScreenWrapper>
  )
}

export default Detail

const styles = StyleSheet.create({})