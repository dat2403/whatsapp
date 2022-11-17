import { StyleSheet } from "react-native";
import AppColors from "../../styles/AppColors";
import { fontSize14, fontSize15, fontSize28, fontWeight700 } from "../../styles/AppFonts";
import {unit10, unit15, unit16, unit20, unit25, unit30, unit34, unit35, unit36, unit50} from "../../utils/appUnit";

const styles = StyleSheet.create({
  logInLogo: {
    color: AppColors.black,
    fontSize: fontSize28,
    marginTop: unit34,
  },
  logInButton: {
    paddingVertical: unit15,
    borderRadius: unit16,
    marginTop: unit25,
  },
  logInButtonText: {
    fontSize: fontSize15,
    fontWeight: fontWeight700,
    color: AppColors.white,
  },
  forgotPass: {
    color: AppColors.green,
    fontSize: fontSize14,
    textAlign: "right",
    marginTop: unit10,
    fontStyle: "italic",
  },
  signUpInstead: {
    color: AppColors.green,
    fontSize: fontSize14,
    textAlign: "center",
    marginTop: unit50,
  },


});


export default styles;
