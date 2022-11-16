import {NavigationContainer} from "@react-navigation/native";
import ChatScreen from "../screens/ChatScreen/ChatScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainTabNavigator from "./MainTabNavigator";
import ContactsScreen from "../screens/ContactsScreen/ContactsScreen";

const Stack = createNativeStackNavigator();
const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={MainTabNavigator}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Chat"
                    component={ChatScreen}
                    options={{
                        headerStyle: {backgroundColor: "whitesmoke"},
                    }}/>
                <Stack.Screen
                    name="Contacts"
                    component={ContactsScreen}
                    options={{
                        headerStyle: {backgroundColor: "whitesmoke"},
                    }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
