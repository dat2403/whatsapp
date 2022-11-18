import * as React from "react";
import { SafeAreaView, View } from "react-native";
import AppText from "../../components/AppText/AppText";
import AppStyles from "../../styles/AppStyles";
import styles from "./styles";
import CustomTextInput from "../../components/CustomTextInput/CustomTextInput";
import { useForm } from "react-hook-form";
import { unit40 } from "../../utils/appUnit";
import AppUtils from "../../utils/AppUtils";
import AppColors from "../../styles/AppColors";
import LinearButton from "../../components/LinearButton/LinearButton";
import { showToastError } from "../../utils/Toaster";
import { forgotPassword } from "../../network/client";
import apiHelper from "../../utils/ApiHelper";
import {StackActions, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {StackParamList} from "../../navigation/Navigation";
import BackButton from "../../components/BackButton/BackButton";

type ForgotPassProps = NativeStackNavigationProp<StackParamList, "ForgotPass">
const ForgotPasswordScreen: React.FunctionComponent = () => {
  const navigation = useNavigation<ForgotPassProps>()
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "hoangtiendat.thidaihoc@gmail.com",
    },
  });

  const forgotPasswordHandler = async (data: any) => {
    console.log(data);
    const email = data?.email;
    try {
      const res = await forgotPassword(email);
      if (apiHelper.isSuccess(res)) {
        navigation.dispatch(StackActions.replace("VerifyOTP", {
          email: email,
        }));
      }
    } catch (e) {
      console.log(e?.response?.data?.message);
    }
  };

  return (
    <SafeAreaView style={AppStyles.container}>
      <View style={AppStyles.viewContainer}>
        <BackButton/>
        <AppText
          style={styles.logo}
          fontType={"bold"}>Forgot Password</AppText>
        <CustomTextInput
          inputContainerStyle={{
            marginTop: unit40,
          }}
          name={"email"}
          control={control}
          autoCapitalize={"none"}
          rules={{
            required: "Email must be required",
            pattern: {
              value: AppUtils.EMAIL_REGEX,
              message: "Email is invalid",
            },
          }}
          placeholder={"E-mail address"} />
        <LinearButton
          onPress={handleSubmit(forgotPasswordHandler)}
          linearStyle={[styles.button]}
          titleStyle={[styles.buttonText, {
            color: AppColors.white,
          }]}
          linearColors={
            [AppColors.green_gradient_1, AppColors.green_gradient_2]}
          buttonTitle={"Reset my password"} />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
