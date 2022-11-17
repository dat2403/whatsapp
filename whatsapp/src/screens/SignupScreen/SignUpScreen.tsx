import React from "react";
import { SafeAreaView, View } from "react-native";
import AppStyles from "../../styles/AppStyles";
import AppText from "../../components/AppText/AppText";
import styles from "./styles";
import { useForm } from "react-hook-form";
import CustomTextInput from "../../components/CustomTextInput/CustomTextInput";
import { unit15, unit40 } from "../../utils/appUnit";
import AppUtils from "../../utils/AppUtils";
import LinearButton from "../../components/LinearButton/LinearButton";
import AppColors from "../../styles/AppColors";
import { signUpAPI } from "../../network/client";
import ApiHelper from "../../utils/ApiHelper";
import { showToastError, showToastErrorMessage } from "../../utils/Toaster";
import {StackActions, useNavigation} from "@react-navigation/native";
import useScreenState from "../../hooks/useScreenState";
import AppLoading from "../../components/Loading/AppLoading";
import PressView from "../../components/PressView/PressView";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {StackParamList} from "../../navigation/Navigation";

type SignupProps = NativeStackNavigationProp<StackParamList, "Signup">

const SignupScreen: React.FC = () => {
  const navigation = useNavigation<SignupProps>()
  const { control, handleSubmit } = useForm();
  const {isLoading, setLoading, mounted} = useScreenState()
  const signUpHandler = async (data: any) => {
    console.log(data);
    setLoading(true)
    try {
      const res = await signUpAPI(data.fullName, data.email, data.password);
      const resData = res.data;
      if (ApiHelper.isSuccess(res)) {
        if(mounted){
          console.log(resData);
          navigation.dispatch(StackActions.replace("VerifyEmail", {
            userId: resData?.data?.user?._id,
          }));
        }
      }
    } catch (e) {
      console.log(e?.response?.data?.message);
    }finally {
      setLoading(false)
    }
  };

  if (isLoading){
    return <AppLoading isOverlay/>
  }

  return (
    <SafeAreaView
      style={AppStyles.container}>
      <View style={AppStyles.viewContainer}>
        <AppText
          fontType={"bold"}
          style={styles.logo}>Sign up</AppText>
        <CustomTextInput
          inputContainerStyle={{
            marginTop: unit40,
          }}
          name={"fullName"}
          control={control}
          rules={{
            required: "Full name must be required",
          }}
          placeholder={"Full name"} />
        <CustomTextInput
          inputContainerStyle={{
            marginTop: unit15,
          }}
          name={"email"}
          control={control}
          autoCapitalize={"none"}
          keyboardType={"email-address"}
          rules={{
            required: "E-mail address must be required",
            pattern: {
              value: AppUtils.EMAIL_REGEX,
              message: "E-mail address is invalid",
            },
          }}
          placeholder={"E-mail address"} />
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
          placeholder={"Password"} />
        <LinearButton
          onPress={handleSubmit(signUpHandler)}
          linearStyle={styles.button}
          titleStyle={styles.buttonText}
          linearColors={[AppColors.green_gradient_1, AppColors.green_gradient_2]}
          buttonTitle={"Sign up"} />
        <PressView onPress={() =>{
          navigation.navigate("Login")
        }}>
          <AppText
            style={styles.logInInstead}
            fontType={"regular"}>Already have an account? Log in</AppText>
        </PressView>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
