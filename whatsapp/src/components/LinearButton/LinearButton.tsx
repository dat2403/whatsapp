import React from "react";
import { Pressable, PressableProps, StyleProp, TextStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import AppColors from "../../styles/AppColors";
import AppText, { AppFontType } from "../AppText/AppText";
import PressView from "../PressView/PressView";
import {unit100} from "../../utils/appUnit";
import { fontSize18 } from "../../styles/AppFonts";

interface LinearButtonProps extends PressableProps {
  buttonTitle: string,
  linearColors?: (string | number)[],
  fontType?: AppFontType,
  titleStyle?: StyleProp<TextStyle>,
  linearStyle?: StyleProp<TextStyle>
}

const LinearButton: React.FC<LinearButtonProps> = (props) => {
  const { buttonTitle, linearColors, fontType, titleStyle, linearStyle } = props;

  if (!linearColors) {
    return null;
  }

  return (
    <PressView
      {...props}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={linearColors}
        style={[{
        }, linearStyle]}>
        <AppText
          fontType={fontType || "bold"}
          style={[{
            color: AppColors.white,
            textAlign: "center",
            fontSize: fontSize18,
          }, titleStyle]}>
          {buttonTitle}
        </AppText>
      </LinearGradient>
    </PressView>
  );
};

LinearButton.defaultProps = {
  linearColors: [AppColors.grey, AppColors.grey],
};

export default LinearButton;
