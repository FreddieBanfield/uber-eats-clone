import { View, Text } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "./../components/restaurantDetail/About.js";
import MenuItems from "./../components/restaurantDetail/MenuItems.js";
import ViewCart from "./../components/restaurantDetail/ViewCart.js";

export default function RestaurantDetails({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
}
