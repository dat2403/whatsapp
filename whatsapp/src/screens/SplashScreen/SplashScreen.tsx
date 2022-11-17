import React from "react";
import {SafeAreaView, StatusBar, StyleSheet, Text} from "react-native";
import AppColors from "../../styles/AppColors";
import {fontSize14, fontSize28} from "../../styles/AppFonts";
import {unit19} from "../../utils/appUnit";
import AppText from "../../components/AppText/AppText";

const SplashScreen = () => {
  return <SafeAreaView style={[{
    backgroundColor: AppColors.green_gradient_2,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }]}>
    <StatusBar
      translucent
      backgroundColor={AppColors.transparent}
      barStyle={"light-content"} />
    <AppText
      style={styles.appTitle}
      fontType={"medium"}>WhatsApp</AppText>
  </SafeAreaView>;
};

export default SplashScreen;


const styles = StyleSheet.create({
  appTitle: {
    fontSize: fontSize28,
    color: AppColors.white,
    textAlign: "center",
  },
  appSlogan: {
    fontSize: fontSize14,
    color: AppColors.white,
    textAlign: "center",
    marginTop: unit19,
  },
});
