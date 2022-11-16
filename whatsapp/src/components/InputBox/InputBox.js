import {StyleSheet, TextInput} from "react-native";
import {AntDesign, MaterialIcons} from "@expo/vector-icons";
import {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";

export default function InputBox() {
    const [newMessage, setNewMessage] = useState('');
    const onSend = () => {
        console.warn("Send a new message");
        setNewMessage("");
    };

    return (
        <SafeAreaView edges={["bottom"]} style={styles.container}>
            <AntDesign name="plus" size={24} color="royalblue"/>
            <TextInput
                value={newMessage}
                onChangeText={text => setNewMessage(text)}
                multiline
                style={styles.input}/>
            <MaterialIcons
                onPress={onSend}
                style={styles.send} name="send" size={24} color="white"/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "whitesmoke",
        padding: 5,
        alignItems: "center",
    },
    input: {
        fontSize: 16,

        flex: 1,
        backgroundColor: "white",
        paddingVertical: 7,
        paddingHorizontal: 18,
        marginHorizontal: 10,

        borderRadius: 20,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "lightgray",
    },
    send: {
        backgroundColor: "royalblue",
        padding: 7,
        borderRadius: 15,
        overflow: "hidden",
    },
});
