import * as React from "react";
import { Image, ImageSourcePropType, ImageStyle, PressableProps, StyleProp, ViewStyle } from "react-native";
import PressView from "../PressView/PressView";

interface IconButtonProps extends PressableProps{
  icon: React.ReactNode,
  iconStyle?: StyleProp<ImageStyle>,
  containerStyle?: StyleProp<ViewStyle>
}
const IconButton: React.FunctionComponent<IconButtonProps> = (props) => {
  const {icon, containerStyle} = props
  return <PressView style={containerStyle} {...props}>
    {icon}
  </PressView>
}

export default IconButton
