import React from "react";
import { SafeAreaView, View } from "react-native";
import AppStyles from "../../styles/AppStyles";
import useAuth from "../../hooks/useAuth";
import AppText from "../../components/AppText/AppText";
import { useForm } from "react-hook-form";
import CustomTextInput from "../../components/CustomTextInput/CustomTextInput";
import { unit15 } from "../../utils/appUnit";
import AppUtils from "../../utils/AppUtils";
import LinearButton from "../../components/LinearButton/LinearButton";
import AppColors from "../../styles/AppColors";
import styles from "./styles";
import { RouteProp, useRoute } from "@react-navigation/native";
import { resetPassword, setAccessToken } from "../../network/client";
import apiHelper from "../../utils/ApiHelper";
import { showToastError } from "../../utils/Toaster";
import useScreenState from "../../hooks/useScreenState";
import AppLoading from "../../components/Loading/AppLoading";
import {StackParamList} from "../../navigation/Navigation";

type ResetPassScreenProps = RouteProp<StackParamList, "ResetPass">
const ResetPasswordScreen: React.FC = () => {
  const { signIn } = useAuth();
  const {params} = useRoute<ResetPassScreenProps>()
  const { control, handleSubmit, watch} = useForm();
  const {isLoading, setLoading, mounted} = useScreenState()
  const pwd = watch('password')

  const resetPassHandler = async (data: any) => {
    console.log(data);
    const email = params.email
    const newPassword = data?.password
    setLoading(true)
    try {
      const res = await resetPassword(email, newPassword)
      const resData = res.data
      if (apiHelper.isSuccess(res)){
        if (mounted){
          setAccessToken(resData.data?.token)
          signIn({
            user: resData?.data?.user
          })
        }
      }
    }catch (e) {
      console.log(e?.response?.data?.message);
    }finally {
      setLoading(false)
    }
  };

  if (isLoading){
    return <AppLoading/>
  }

  return (
    <SafeAreaView
      style={AppStyles.container}>
      <View style={AppStyles.viewContainer}>
        <AppText
          fontType={"bold"}
          style={styles.logo}>Reset Password</AppText>
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
        <CustomTextInput
          inputContainerStyle={{
            marginTop: unit15,
          }}
          name={"re-password"}
          autoCapitalize={"none"}
          control={control}
          secureTextEntry
          rules={{
            required: "Password must be required",
            pattern: {
              value: AppUtils.PASS_REGEX,
              message: "Password is invalid, 8-24 characters, at least 1 number and 1 special character",
            },
            validate: (value: any) => {
              return value === pwd || 'Password not match, please re-enter'
            }
          }}
          placeholder={"Re-Password"} />
        <LinearButton
          onPress={handleSubmit(resetPassHandler)}
          linearStyle={styles.button}
          titleStyle={styles.buttonText}
          linearColors={[AppColors.purple_gradient_1, AppColors.purple_gradient_2]}
          buttonTitle={"Reset"} />
      </View>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;
