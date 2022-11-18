import * as React from "react";
import {useEffect, useState} from "react";
import {SafeAreaView, View} from "react-native";
import AppStyles from "../../styles/AppStyles";
import AppText from "../../components/AppText/AppText";
import LinearButton from "../../components/LinearButton/LinearButton";
import AppColors from "../../styles/AppColors";
import styles from "./styles";
import CustomTextInput from "../../components/CustomTextInput/CustomTextInput";
import {useForm} from "react-hook-form";
import {unit40} from "../../utils/appUnit";
import {RouteProp, StackActions, useNavigation, useRoute} from "@react-navigation/native";
import {verifyOTPResetPass} from "../../network/client";
import apiHelper from "../../utils/ApiHelper";
import useScreenState from "../../hooks/useScreenState";
import AppLoading from "../../components/Loading/AppLoading";
import {StackParamList} from "../../navigation/Navigation";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import BackButton from "../../components/BackButton/BackButton";

type VerifyScreenProps = RouteProp<StackParamList, "VerifyOTP">
type NavigateProp = NativeStackNavigationProp<StackParamList, "VerifyOTP">

const VerifyOTPScreen: React.FunctionComponent = () => {
  const {params} = useRoute<VerifyScreenProps>();
  const navigation = useNavigation<NavigateProp>()
  const {control, handleSubmit, watch} = useForm();
  const {isLoading, setLoading, mounted} = useScreenState()
  const verifyOTPHandler = async (data: any) => {
    const email = params.email;
    const otp = data?.otp;
    setLoading(true)
    try {
      const res = await verifyOTPResetPass(email, otp);
      const resData = res.data;
      if (apiHelper.isSuccess(res)) {
        if (mounted) {
          navigation.dispatch(StackActions.replace("ResetPass", {
            email: resData?.data?.user?.email,
          }));
        }
      }
    } catch (e) {
      console.log(e?.response?.data?.message);
    } finally {
      setLoading(false)
    }
  };

  return (
    <SafeAreaView style={AppStyles.container}>
      <View style={AppStyles.viewContainer}>
        <BackButton/>
        <AppText
          style={styles.logo}
          fontType={"bold"}>Verify OTP</AppText>
        <CustomTextInput
          inputContainerStyle={{
            marginTop: unit40,
            justifyContent: "center",
            alignItems: "center",
          }}
          inputStyle={{
            textAlign: "center",
          }}
          keyboardType={"numeric"}
          name={"otp"}
          control={control}
          maxLength={4}
          rules={{
            required: 'OTP must be required'
          }}
          placeholder={"OTP Code"}/>
        <LinearButton
          onPress={handleSubmit(verifyOTPHandler)}
          linearStyle={[styles.button]}
          titleStyle={[styles.buttonText, {
            color: AppColors.white,
          }]}
          linearColors={[AppColors.green_gradient_1, AppColors.green_gradient_2]}
          buttonTitle={"Verify"}/>
      </View>
    </SafeAreaView>
  );
};

export default VerifyOTPScreen;
