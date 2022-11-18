import React from "react";
import {SafeAreaView, View} from "react-native";
import useAuth from "../../hooks/useAuth";
import styles from "./styles";
import AppText from "../../components/AppText/AppText";
import CustomTextInput from "../../components/CustomTextInput/CustomTextInput";
import {useForm} from "react-hook-form";
import LinearButton from "../../components/LinearButton/LinearButton";
import AppColors from "../../styles/AppColors";
import {unit15, unit40} from "../../utils/appUnit";
import PressView from "../../components/PressView/PressView";
import AppUtils from "../../utils/AppUtils";
import useScreenState from "../../hooks/useScreenState";
import AppLoading from "../../components/Loading/AppLoading";
import {logInAPI, setAccessToken} from "../../network/client";
import ApiHelper from "../../utils/ApiHelper";
import {StackActions, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {StackParamList} from "../../navigation/Navigation";
import AppStyles from "../../styles/AppStyles";

type LoginProps = NativeStackNavigationProp<StackParamList, "Login">

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginProps>()
  const {signIn, authData} = useAuth();
  const user = authData.user;
  const {isLoading, setLoading, mounted} = useScreenState()
  const {control, handleSubmit} = useForm({
    defaultValues: {
      email: "hoangtiendat.thidaihoc@gmail.com",
      password: "Htd2403#"
    }
  });

  const logInHandler = async (data: any) => {
    console.log(data);
    try {
      setLoading(true)
      const res = await logInAPI(data?.email, data?.password)
      if (ApiHelper.isSuccess(res)) {
        if (mounted) {
          setAccessToken(res.data?.data?.token)
          signIn({
            user: res?.data?.data?.user
          })
          navigation.dispatch(StackActions.replace("Main"))
        }
      }
    } catch (e) {
      console.log(e?.response?.data?.message);
    } finally {
      setLoading(false)
    }
  };

  if (isLoading) {
    return <AppLoading isOverlay/>
  }

  return (
    <SafeAreaView
      style={AppStyles.container}>
      <View style={AppStyles.viewContainer}>
        <AppText
          fontType={"bold"}
          style={styles.logInLogo}>Login</AppText>
        <CustomTextInput
          inputContainerStyle={{
            marginTop: unit40,
          }}
          name={"email"}
          control={control}
          autoCapitalize={"none"}
          rules={{
            required: "E-mail address must be required",
            pattern: {
              value: AppUtils.EMAIL_REGEX,
              message: "E-mail address is invalid",
            },
          }}
          placeholder={"E-mail address"}/>
        <CustomTextInput
          inputContainerStyle={{
            marginTop: unit15,
          }}
          name={"password"}
          autoCapitalize={"none"}
          control={control}
          secureTextEntry
          rules={{
            required: "Password must be required",
            pattern: {
              value: AppUtils.PASS_REGEX,
              message: "Password is invalid, 8-24 characters, at least 1 number and 1 special character",
            },
          }}
          placeholder={"Password"}/>
        <LinearButton
          onPress={handleSubmit(logInHandler)}
          linearStyle={styles.logInButton}
          titleStyle={styles.logInButtonText}
          linearColors={[AppColors.green_gradient_1, AppColors.green_gradient_2]}
          buttonTitle={"Login"}/>

        <PressView onPress={() => {
          navigation.navigate("ForgotPass")
        }}>
          <AppText
            style={styles.forgotPass}
            fontType={"regular"}>Forgot Password</AppText>
        </PressView>
        <PressView onPress={() => {
          navigation.navigate("Signup")
        }}>
          <AppText
            style={styles.signUpInstead}
            fontType={"regular"}>Do not have an account? Sign up</AppText>
        </PressView>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
