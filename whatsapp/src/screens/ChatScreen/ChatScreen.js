import {FlatList, ImageBackground, KeyboardAvoidingView, Platform, StyleSheet} from "react-native";
import bg from "../../../assets/images/BG.png"
import messages from "../../../assets/data/messages.json"
import Message from "../../components/Message/Message";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useEffect} from "react";
import InputBox from "../../components/InputBox/InputBox";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function ChatScreen() {
    const navigation = useNavigation()
    const route = useRoute();
    const inset = useSafeAreaInsets()
    useEffect(() => {
        navigation.setOptions({title: route.params.name})
    }, [route.params])
    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={Platform.OS === "ios" ? inset.bottom + 90 : 90}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.bg}>
            <ImageBackground
                style={styles.bg}
                source={bg}>
                <FlatList
                    data={messages}
                    renderItem={({item}) => <Message message={item}/>}
                    style={{ padding: 10 }}
                    inverted
                />
                <InputBox/>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    list: {
        flex: 1,
    }
});
