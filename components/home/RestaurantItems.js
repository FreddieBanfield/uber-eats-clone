import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Kelowna Montanas",
    image_url:
      "https://resizer.otstatic.com/v2/photos/wide-huge/2/26720387.jpg",
    categories: ["BBQ", "Bar"],
    price: "$$",
    reviews: 1623,
    rating: 4.3,
  },
  {
    name: "Welton Arms",
    image_url:
      "https://img1.wsimg.com/isteam/ip/688a10b4-c43a-4c22-a0b5-cc9d9781a58e/IMG_3723%20(1).jpg/:/rs=w:1300,h:800",
    categories: ["Brewery", "Bar"],
    price: "$$",
    reviews: 139,
    rating: 4.7,
  },
  {
    name: "Tokyo One",
    image_url:
      "https://lh5.googleusercontent.com/p/AF1QipOoqVEXqUWRPuO-JrZAT5R4jRiWyHeqbQ-K8rs=w1080-k-no",
    categories: ["Asian", "Buffet"],
    price: "$$",
    reviews: 1948,
    rating: 4.3,
  },
];

export default function RestaurantItems({ navigation, ...props }) {
  return (
    <>
      {props.restaurantsData != "" ? (
        props.restaurantsData.map((restaurant, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            style={{ marginBottom: 30 }}
            onPress={() =>
              navigation.navigate("RestaurantDetails", {
                name: restaurant.name,
                image: restaurant.image_url,
                price: restaurant.price,
                reviews: restaurant.review_count,
                rating: restaurant.rating,
                categories: restaurant.categories,
              })
            }
          >
            <View
              style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
            >
              <RestaurantImage image={restaurant.image_url} />
              <RestaurantInfo
                name={restaurant.name}
                rating={restaurant.rating}
              />
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 110,
          }}
        >
          No Restaurants to display
        </Text>
      )}
    </>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "grey" }}>30-45 · min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        borderRadius: 15,
        justifyContent: "center",
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
