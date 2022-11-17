import React from "react";
import { Text, TextProps } from "react-native";


export type AppFontType = 'bold' | 'regular' | 'semiBold' | 'medium'

interface AppTextProps extends TextProps {
  fontType?: AppFontType;
}

const AppText: React.FC<AppTextProps> = (props) => {
  let {
    children,
    fontType,
  } = props;

  const weight = fontType === "bold" ? "700" : (fontType === "medium" ? "500" : "400");
  return <Text
    style={
      [{
        fontWeight: weight,
      }, props.style]
    }
  >
    {children}
  </Text>;
};

export default AppText;
