import { StyleSheet } from "react-native";
import AppColors from "./AppColors";
import {unit18, unit24, unit28, unit35} from "../utils/appUnit";

export const APP_PADDING = unit35
const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white
  },
  viewContainer: {
    flex: 1,
    paddingHorizontal: unit35
  },
  alignRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon18: {
    width: unit18,
    height: unit18,
  },
  icon24: {
    width: unit24,
    height: unit24,
  },
  icon28: {
    width: unit28,
    height: unit28,
  }
})

export default AppStyles
