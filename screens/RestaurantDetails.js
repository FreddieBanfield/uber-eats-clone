import { View, Text } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "./../components/restaurantDetail/About.js";
import MenuItems from "./../components/restaurantDetail/MenuItems.js";
import ViewCart from "./../components/restaurantDetail/ViewCart.js";

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
  {
    title: "Pork Back Ribs - Regular",
    description:
      "Freshly prepared and smoked in-house daily, Montana's is your home for authentic BBQ ribs. Coated in Montana's signature rib rub, slow smoked over hickory chips and then fire grilled to order. Hungry yet? Served with freshly baked cornbread, seasoned fries and your choice of in-house baked beans or coleslaw.",
    price: "$21.99",
    image:
      "https://cdn.montanas.ca/static_images/montanas2x/750x564/1600602@2x.jpg",
  },
  {
    title: "Pork Back Ribs - small",
    description:
      "Freshly prepared and smoked in-house daily, Montana's is your home for authentic BBQ ribs. Coated in Montana's signature rib rub, slow smoked over hickory chips and then fire grilled to order. Hungry yet? Served with freshly baked cornbread, seasoned fries and your choice of in-house baked beans or coleslaw.",
    price: "$21.99",
    image:
      "https://cdn.montanas.ca/static_images/montanas2x/750x564/1600602@2x.jpg",
  },
  {
    title: "Pork Back Ribs - large",
    description:
      "Freshly prepared and smoked in-house daily, Montana's is your home for authentic BBQ ribs. Coated in Montana's signature rib rub, slow smoked over hickory chips and then fire grilled to order. Hungry yet? Served with freshly baked cornbread, seasoned fries and your choice of in-house baked beans or coleslaw.",
    price: "$21.99",
    image:
      "https://cdn.montanas.ca/static_images/montanas2x/750x564/1600602@2x.jpg",
  },
];

export default function RestaurantDetails({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
