import * as React from "react";
import {View} from "react-native";
import AppStyles from "../../styles/AppStyles";
import PressView from "../../components/PressView/PressView";
import AppText from "../../components/AppText/AppText";
import useAuth from "../../hooks/useAuth";

const SettingsScreen: React.FunctionComponent = () => {
  const {signOut} = useAuth()
  return <View style={[AppStyles.viewContainer, {justifyContent: "center"}]}>
    <PressView
      style={{
        alignSelf: "center"
      }}
      onPress={() => signOut()}>
      <AppText>Sign out</AppText>
    </PressView>
  </View>
}

export default SettingsScreen
