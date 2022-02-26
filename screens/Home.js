import { StyleSheet, Text, SafeAreaView, View, ScrollView } from "react-native";
import React from "react";
import HeaderTabs from "./../components/HeaderTabs.js";
import SearchBar from "./../components/SearchBar.js";
import Catagories from "./../components/Catagories";
import RestaurantItem from "./../components/RestaurantItem";

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Catagories />
        <RestaurantItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
