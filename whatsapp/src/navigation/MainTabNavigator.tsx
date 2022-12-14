import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NotImplementedScreen from "../screens/NotImplementedScreen/NotImplementedScreen"
import ChatListScreen from "../screens/ChatListScreen/ChatListScreen";
import {Entypo, Ionicons} from "@expo/vector-icons";
import React from "react";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";

export type TabParamList = {
  ChatList: undefined,
  Status: undefined,
  Calls: undefined,
  Camera: undefined,
  Settings: undefined,
}
const Tab = createBottomTabNavigator<TabParamList>();

const MainTabNavigator: React.FC = () => {
    return (
        <Tab.Navigator
            initialRouteName="ChatList"
            screenOptions={({navigation}) => ({
                tabBarStyle: {backgroundColor: "whitesmoke"},
                headerStyle: {backgroundColor: "whitesmoke"},
                headerRight: () => (
                    <Entypo
                        onPress={()=>navigation.navigate("Contacts")}
                        name="new-message"
                        size={18}
                        color={"royalblue"}
                        style={{ marginRight: 15 }}
                    />)
            })}>
            <Tab.Screen
                name="Status"
                component={NotImplementedScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="logo-whatsapp" size={size} color={color}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Calls"
                component={NotImplementedScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="call-outline" size={size} color={color}/>
                    ),
                }}/>
            <Tab.Screen
                name="Camera"
                component={NotImplementedScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="camera-outline" size={size} color={color}/>
                    ),
                }}/>
            <Tab.Screen
                name="ChatList"
                component={ChatListScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="ios-chatbubbles-sharp" size={size} color={color}/>
                    ),
                }}/>
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="settings-outline" size={size} color={color}/>
                    ),
                }}/>
        </Tab.Navigator>
    )
}

export default MainTabNavigator;
