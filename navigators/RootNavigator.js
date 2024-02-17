import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      {/* Set up stack navigation to move between welcome screen and subscribe screen here */}
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SubscribeScreen" component={SubscribeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
