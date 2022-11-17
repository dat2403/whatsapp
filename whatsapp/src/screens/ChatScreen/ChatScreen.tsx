import {FlatList, ImageBackground, KeyboardAvoidingView, Platform, StyleSheet} from "react-native";
import messages from "../../../assets/data/messages.json"
import Message from "../../components/Message/Message";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import React, {useEffect} from "react";
import InputBox from "../../components/InputBox/InputBox";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {StackParamList} from "../../navigation/Navigation";
import {bg} from "../../../assets/path";

type ScreenProps = RouteProp<StackParamList, "Chat">

const ChatScreen: React.FunctionComponent = () => {
    const navigation = useNavigation()
    const route = useRoute<ScreenProps>();
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

export default ChatScreen;

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    list: {
        flex: 1,
    }
});
