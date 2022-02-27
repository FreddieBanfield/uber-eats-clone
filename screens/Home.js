import React, { useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import HeaderTabs from "./../components/home/HeaderTabs.js";
import SearchBar from "./../components/home/SearchBar.js";
import Catagories from "./../components/home/Catagories";
import BottomTabs from "./../components/home/BottomTabs";
import RestaurantItems, {
  localRestaurants,
} from "./../components/home/RestaurantItems";
import { config } from "./../config";

const YELP_API_KEY = config.YELP_API_KEY;

export default function Home({ navigation }) {
  const [restaurantsData, setRestaurantsData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantsData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Catagories />
        <RestaurantItems
          restaurantsData={restaurantsData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
