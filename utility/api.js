import { v4 } from "uuid";
import 'react-native-get-random-values';

const mapContext = contact => {
    const {
        name, picture, phone, cell, email
    } = contact;

    return {
        id: v4(),
        name: name.first+ " " + name.last,
        avatar: picture.large,
        phone,
        cell,
        email,
        favorite: Math.random() >= 0.5
    }
}

const fetchContacts = async () => {
    const res = await fetch('https://randomuser.me/api/?results=100&seed=fullstackio');
    const contactData = await res.json();
    return contactData.results.map(mapContext);
}

const fectUserContact = async () => {
    const res = await fetch('https://randomuser.me/api/?seed=fullstackio');
    const userData = await res.json();
    return mapContext(userData.results[0]);
}

const fectRandomContact = async () =>{
    const res = await fetch('https://randomuser.me/api/');
    const userData = await res.json();

    return mapContext(userData.results[0]);
}

export {fetchContacts, fectUserContact, fectRandomContact}