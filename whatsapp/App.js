import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from "./src/navigation/Navigation";
import {StatusBar} from "expo-status-bar";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Navigation/>
            <StatusBar style={"auto"}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        justifyContent: "center",
        paddingVertical: 50,
    },
});

