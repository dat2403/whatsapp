import { StyleSheet } from "react-native";
import AppColors from "../../styles/AppColors";
import {fontSize14, fontSize15, fontSize28, fontWeight700} from "../../styles/AppFonts";
import {unit15, unit16, unit25, unit34, unit36, unit40, unit50} from "../../utils/appUnit";

const styles = StyleSheet.create({
  logo: {
    color: AppColors.black,
    fontSize: fontSize28,
    marginTop: unit34,
  },
  button: {
    paddingVertical: unit15,
    borderRadius: unit16,
    marginTop: unit25,
  },
  buttonText: {
    fontSize: fontSize15,
    fontWeight: fontWeight700
  },
  logInInstead: {
    color: AppColors.green,
    fontSize: fontSize14,
    textAlign: "center",
    marginTop: unit40,
  },
})

export default styles
