import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {useNavigation} from "@react-navigation/native";

dayjs.extend(relativeTime);

export default function ChatListItem({chat}) {
    const navigation = useNavigation()
    return (
        <Pressable onPress={() => {
            navigation.navigate("Chat", {id: chat.id, name: chat.user.name})
        }}>
            <View style={styles.itemContainer}>
                <Image
                    style={styles.avatar}
                    source={{uri: chat.user.image}}/>
                <View style={styles.contentContainer}>
                    <View style={styles.nameContainer}>
                        <Text
                            numberOfLines={1}
                            style={styles.name}>{chat.user.name}</Text>
                        <Text style={styles.name}>
                            {dayjs(chat.lastMessage.createdAt).fromNow()}
                        </Text>
                    </View>
                    <Text
                        numberOfLines={2}
                        style={styles.subTitle}>{chat.lastMessage.text}</Text>
                </View>
            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        alignItems: "stretch",
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
    },
    avatar: {
        width: 60,
        aspectRatio: 1,
        borderRadius: 30,
        marginRight: 10,
    },
    contentContainer: {
        flex: 1,
        borderBottomColor: "lightgray",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    nameContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    name: {
        fontWeight: "500",
        fontSize: 16,
        color: "dark-grey"
    },
    subTitle: {
        fontWeight: "400",
        fontSize: 14,
        color: "grey"
    }
})

