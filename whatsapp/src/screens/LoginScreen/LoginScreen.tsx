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


const LoginScreen: React.FC = () => {
  const {signIn, authData} = useAuth();
  const user = authData.user;
  const {isLoading, setLoading, mounted} = useScreenState()
  const {control, handleSubmit} = useForm({
    defaultValues: {
      email: "dat.ht240300@gmail.com",
      password: "Htd2403@"
    }
  });

  const logInHandler = async (data: any) => {
    console.log(data);
  };

  if (isLoading) {
    return <AppLoading isOverlay/>
  }

  return (
    <SafeAreaView
      style={styles.logInSafeAreaContainer}>
      <View style={styles.logInContainer}>
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
          linearColors={[AppColors.purple_gradient_1, AppColors.purple_gradient_2]}
          buttonTitle={"Login"}/>

        <PressView onPress={() =>{}}>
          <AppText
            style={styles.forgotPass}
            fontType={"medium"}>Forgot Password</AppText>
        </PressView>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
