import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import DrinksList from "../Drinks/DrinksList";
import FiltersList from "../Filters/FiltersList";
import { styles } from "./MainScreen.styles";

const RootStack = createStackNavigator();

const MainScreen = () => (
  <RootStack.Navigator mode="modal">
    <RootStack.Screen
      name="Main"
      component={DrinksList}
      options={() => ({
        headerTitle: () => <Text style={styles.navbarText}>Drinks</Text>,
      })}
    />
    <RootStack.Screen
      name="Filters"
      component={FiltersList}
      options={() => ({
        headerTitle: () => <Text style={styles.navbarText}>Filters</Text>,
      })}
    />
  </RootStack.Navigator>
);

export default MainScreen;
