import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ScreenWrapper from './ScreenWrapper'
import url from '../utility/getURLParams'

const DetailContact = ({route}) => {
    // Nhận contact từ route.params
    const { contact  } = route.params;
    //console.log(contact)


    return (
        <View style={styles.container}>
            {/* Hiển thị tên và ảnh liên hệ */}
            <View style={styles.imgheader}>
                <Image source={{ uri: contact.avatar }} style={styles.avatar} />
                <Text style={styles.name}>{contact.name}</Text>
            </View>
            
            <View>
                
                <Text style={styles.phone}>Phone: {contact.phone}</Text>
                <Text style={styles.cell}>Cell: {contact.cell}</Text>
                <Text style={styles.email}>Email: {contact.email}</Text>
            </View>

            
        </View>
    );
}

export default DetailContact;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: -28
    },
    imgheader: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'  
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    phone: {
        fontSize: 18,
        marginTop: 10,
    },
    cell: {
        fontSize: 18,
        marginTop: 10,
    },
    email: {
        fontSize: 18,
        marginTop: 10,
    },
});
