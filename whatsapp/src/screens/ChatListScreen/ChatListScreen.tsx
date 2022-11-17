import {FlatList} from "react-native";
import ChatListItem from "../../components/ChatListItem/ChatListItem";
import chats from "../../../assets/data/chats.json"
import React from "react";


const ChatListScreen: React.FC = () => {
    return <FlatList
        style={{backgroundColor: "white"}}
        showsVerticalScrollIndicator={false}
        data={chats}
        renderItem={({item})=>
            <ChatListItem chat={item}/>}/>
}

export default ChatListScreen

// const genChats = () => {
//     let Data = []
//     for (let i = 0; i < 20; i++) {
//         Data.push({
//             id: i,
//             user: {
//                 image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
//                 name: "Lukas" + i.toString(),
//             },
//             lastMessage: {
//                 text: "Oke" + i.toString(),
//                 createdAt: "15/11/2022"
//             }
//         })
//     }
//     return Data
// }
//
// const chats = genChats()
