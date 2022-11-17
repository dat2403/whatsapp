import {FlatList} from "react-native";
import chats from "../../../assets/data/chats.json"
import ContactListItem from "../../components/ContactListItem/ContactListItem";
import React from "react";

const ContactsScreen: React.FC = () => {
    return (
        <>
            <FlatList
                style={{backgroundColor: "white"}}
                data={chats}
                renderItem={({item}) =>
                    <ContactListItem user={item.user}/>}/>
        </>
    )
}
export default ContactsScreen
