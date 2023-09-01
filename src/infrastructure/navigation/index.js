import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
    createStackNavigator
  } from "@react-navigation/stack";
import { HomePageScreen } from "../../features/screen/HomePageScreen";
import { NumberDisplayScreen } from "../../features/screen/NumberDisplayScreen";

const AppStack = createStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen
                     options={{
                        headerShown: false
                      }}
                      name="HomePage"
                      component={HomePageScreen}
                />
                 <AppStack.Screen
                     options={{
                        headerShown: false
                      }}
                      name="NumberDisplay"
                      component={NumberDisplayScreen}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}