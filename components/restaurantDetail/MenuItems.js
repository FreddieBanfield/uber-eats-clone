import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const foods = [
  {
    title: "Chipotle Firecracker Burger",
    description:
      "It's bursting with flavour! A juicy sirloin beef burger sauced with Chipotle Honey BBQ sauce, topped with bacon, crispy Cajun onions, real cheddar cheese, and crispy jalapeños served on a toasted ACE Bakery bun with seasoned fries.",
    price: "$16.99",
    image:
      "https://cdn.montanas.ca/static_images/montanas2x/750x564/1600401@2x.jpg",
  },
  {
    title: "Double Onion and Smoky Bacon Cheeseburger",
    description:
      "Our 100% Canadian Sirloin burger sauced with BBQ Sauce and topped with grilled thick-cut grilled bacon, real cheddar cheese, caramelized onions, chipotle ranch sauce & two crispy onion rings. Served with seasoned fries.",
    price: "$17.99",
    image:
      "https://cdn.montanas.ca/static_images/montanas2x/750x564/1600418@2x.jpg",
  },
  {
    title: "7 oz AAA Sirloin",
    description:
      "Tender, juicy Canadian AAA top sirloin - aged for 50 days, seasoned to perfection and fire-grilled to order. Served with two onion rings, your choice of in-house baked beans or coleslaw and seasoned fries. *Cannot guarantee steak doneness for take-out.",
    price: "$21.99",
    image:
      "https://cdn.montanas.ca/static_images/montanas2x/750x564/1600824@2x.jpg",
  },
  {
    title: "Chicken Tacos",
    description:
      "Two soft shell tacos packed with tender grilled chicken, cheese, crisp lettuce, red onions, diced tomatoes, crispy tortilla strips, fresh cilantro, and lime juice, finished off with a drizzle of KAPOW sauce. Served with seasoned fries.",
    price: "$15.99",
    image:
      "https://cdn.montanas.ca/static_images/montanas2x/750x564/1601102@2x.jpg",
  },
  {
    title: "Pork Back Ribs - Regular",
    description:
      "Freshly prepared and smoked in-house daily, Montana's is your home for authentic BBQ ribs. Coated in Montana's signature rib rub, slow smoked over hickory chips and then fire grilled to order. Hungry yet? Served with freshly baked cornbread, seasoned fries and your choice of in-house baked beans or coleslaw.",
    price: "$21.99",
    image:
      "https://cdn.montanas.ca/static_images/montanas2x/750x564/1600602@2x.jpg",
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItems({ restaurantName }) {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );
  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title == food.title));

  return (
    <View style={{ height: "64%" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {foods.map((food, index) => (
          <View key={index}>
            <View style={styles.menuItemStyle}>
              <BouncyCheckbox
                iconStyle={{ borderColor: "lightgrey", borderRadius: 0 }}
                fillColor="green"
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                isChecked={isFoodInCart(food, cartItems)}
              />
              <FoodInfo food={food} />
              <FoodImage food={food} />
            </View>
            <Divider
              width={0.5}
              orientation="vertical"
              style={{ marginHorizontal: 20 }}
            />
          </View>
        ))}
        {/*Used to offset strange issue with ScrollView       <View style={{ height: 330 }} />*/}
      </ScrollView>
    </View>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: "50%", justifyContent: "space-evenly" }}>
    <Text numberOfLines={2} style={styles.titleStyle}>
      {props.food.title}
    </Text>
    <Text numberOfLines={2}>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);
