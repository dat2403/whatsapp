import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from "./src/navigation/Navigation";
import {StatusBar} from "expo-status-bar";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import store, {persistor} from "./src/store/store";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate
                persistor={persistor}
                loading={null}>
                    <SafeAreaView style={styles.container}>
                        <Navigation/>
                        <StatusBar style={"auto"}/>
                    </SafeAreaView>
            </PersistGate>
        </Provider>
    );
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        justifyContent: "center",
        paddingVertical: 50,
    },
});

