import { StyleSheet } from "react-native";
import { unit15, unit16, unit25, unit34 } from "../../utils/appUnit";
import AppColors from "../../styles/AppColors";
import { fontSize15, fontSize28, fontWeight700 } from "../../styles/AppFonts";


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
})

export default styles
