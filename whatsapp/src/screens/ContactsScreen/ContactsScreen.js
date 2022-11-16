import {FlatList} from "react-native";
import chats from "../../../assets/data/chats.json"
import ContactListItem from "../../components/ContactListItem/ContactListItem";

export default function ContactsScreen() {
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
