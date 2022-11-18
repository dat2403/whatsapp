import * as React from 'react';
import { PressableProps, StyleSheet } from "react-native";
import AppStyles from "../../styles/AppStyles";
import AppColors from "../../styles/AppColors";
import IconButton from "../IconButton/IconButton";
import { unit14, unit25, unit44 } from "../../utils/appUnit";
import {useNavigation} from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

interface BackButtonProps extends PressableProps{

}
const BackButton: React.FunctionComponent<BackButtonProps> = () => {
  const navigation = useNavigation()
  return (
    <IconButton
      onPress={() => navigation.goBack()}
      containerStyle={styles.backButtonContainer}
      icon={<AntDesign name="arrowleft" size={36} color="black" />}/>
  )
}

const styles = StyleSheet.create({
  backButtonContainer: {
    width: unit44,
    height: unit44,
    alignItems: "center",
    justifyContent: 'center',
    marginTop: unit25,
  },
})

export default BackButton
