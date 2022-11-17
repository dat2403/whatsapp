import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import ChatScreen from "../screens/ChatScreen/ChatScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainTabNavigator from "./MainTabNavigator";
import ContactsScreen from "../screens/ContactsScreen/ContactsScreen";
import useAuth from "../hooks/useAuth";
import {addOnUnAuthorizeListener, setAccessToken} from "../network/client";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import SignupScreen from "../screens/SignupScreen/SignUpScreen";
import VerifyEmailScreen from "../screens/VerifyEmailScreen/VerifyEmailScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen/ForgotPasswordScreen";
import VerifyOTPScreen from "../screens/VerifyOTPScreen/VerifyOTPScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen/ResetPasswordScreen";

export type StackParamList = {
  Main: undefined,
  Chat: {
    id: string,
    name: string
  },
  Contacts: undefined,
  Login: undefined,
  Signup: undefined,
  VerifyEmail: {
    userId: string
  },
  ForgotPass: {
    email: string
  },
  VerifyOTP: {
    email: string
  },
  ResetPass: {
    email: string
  }

};

const Stack = createNativeStackNavigator<StackParamList>();
const Navigator: React.FC = () => {
  const {authData, signOut} = useAuth();
  const user = authData.user;

  useEffect(() => {
    addOnUnAuthorizeListener(() => {
      signOut();
    });
  }, []);

  useEffect(() => {
    setAccessToken(authData.token);
  }, [authData]);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {user ?
          <>
            <Stack.Screen
              name="Main"
              component={MainTabNavigator}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Chat"
              component={ChatScreen}
              options={{
                headerShown: true,
                headerStyle: {backgroundColor: "whitesmoke"},
              }}/>
            <Stack.Screen
              name="Contacts"
              component={ContactsScreen}
              options={{
                headerShown: true,
                headerStyle: {backgroundColor: "whitesmoke"},
              }}/>
          </>
          : (
            <>
              <Stack.Screen
                name="Login"
                component={LoginScreen}/>
              <Stack.Screen
                name="Signup"
                component={SignupScreen}/>
              <Stack.Screen
                name="VerifyEmail"
                component={VerifyEmailScreen}/>
              <Stack.Screen
                name="ForgotPass"
                component={ForgotPasswordScreen}/>
              <Stack.Screen
              name="VerifyOTP"
              component={VerifyOTPScreen}/>
              <Stack.Screen
              name="ResetPass"
              component={ResetPasswordScreen}/>
            </>

          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
