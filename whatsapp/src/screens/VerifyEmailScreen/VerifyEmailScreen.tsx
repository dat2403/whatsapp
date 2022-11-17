import * as React from "react";
import { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import AppStyles from "../../styles/AppStyles";
import AppText from "../../components/AppText/AppText";
import LinearButton from "../../components/LinearButton/LinearButton";
import AppColors from "../../styles/AppColors";
import styles from "./styles";
import CustomTextInput from "../../components/CustomTextInput/CustomTextInput";
import { useForm } from "react-hook-form";
import { unit40 } from "../../utils/appUnit";
import { RouteProp, useRoute } from "@react-navigation/native";
import { setAccessToken, verifyEmailAPI } from "../../network/client";
import { showToastError } from "../../utils/Toaster";
import apiHelper from "../../utils/ApiHelper";
import useAuth from "../../hooks/useAuth";
import useScreenState from "../../hooks/useScreenState";
import AppLoading from "../../components/Loading/AppLoading";
import {StackParamList} from "../../navigation/Navigation";

type ScreenProps = RouteProp<StackParamList, "VerifyEmail">
const VerifyEmailScreen: React.FunctionComponent = () => {
  const route = useRoute<ScreenProps>();
  const params = route.params;
  const { signIn } = useAuth();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const { control, handleSubmit, watch } = useForm();
  const {isLoading, setLoading, mounted} = useScreenState()

  const verifyEmailHandler = async (data: any) => {
    const userId = params.userId;
    const otp = data?.otp;
    setLoading(true)
    try {
      const res = await verifyEmailAPI(userId, otp);
      const resData = res.data;
      if (apiHelper.isSuccess(res)) {
        if(mounted){
          setAccessToken(resData?.data?.token);
          signIn({
            user: resData?.data?.user,
          });
        }
      }
    } catch (e) {
      console.log(e?.response?.data?.message)
    }finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    const subscription = watch((value) => {
      if (value.otp.length >= 4) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  if (isLoading){
    return <AppLoading isOverlay/>
  }

  return (
    <SafeAreaView style={AppStyles.container}>
      <View style={AppStyles.viewContainer}>
        <AppText
          style={styles.logo}
          fontType={"bold"}>Verify your email</AppText>
        <CustomTextInput
          inputContainerStyle={{
            marginTop: unit40,
          }}
          inputStyle={{
            textAlign: "center",
          }}
          name={"otp"}
          control={control}
          maxLength={4}
          placeholder={"OTP Code"} />
        <LinearButton
          disabled={isDisabled}
          onPress={handleSubmit(verifyEmailHandler)}
          linearStyle={[styles.button]}
          titleStyle={[styles.buttonText, {
            color: isDisabled ? AppColors.grey : AppColors.white,
          }]}
          linearColors={isDisabled
            ? [AppColors.light_grey2, AppColors.light_grey2]
            : [AppColors.purple_gradient_1, AppColors.purple_gradient_2]}
          buttonTitle={"Verify"} />
      </View>
    </SafeAreaView>
  );
};

export default VerifyEmailScreen;
