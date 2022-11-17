import {StyleSheet, Text, View} from "react-native";
import React, {useMemo} from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
interface MessageProps {
    message: any
}
const Message: React.FC<MessageProps> = ({message}) => {
    const isMyMessage = useMemo(() => {
        return message.user.id === "u1"
    }, [message.user.id])
    return (
        <View style={[
            styles.container,
            {
                backgroundColor: isMyMessage ? "#DCF8C5" : "white",
                alignSelf: isMyMessage ? "flex-end" : "flex-start",
            },
        ]}>
            <Text>{message.text}</Text>
            <Text style={styles.time}>
                {dayjs(message.createdAt).fromNow(true)}
            </Text>
        </View>
    )
}
export default Message;
const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 10,
        borderRadius: 10,
        maxWidth: "80%",

        // Shadows
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,

        elevation: 1,
    },
    message: {},
    time: {
        alignSelf: "flex-end",
        color: "grey",
    },
});
