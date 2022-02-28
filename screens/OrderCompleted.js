import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import { db } from "../firebase";
import MenuItems from "./../components/restaurantDetail/MenuItems";
import checkMark from "./../assets/animations/check-mark.json";
import cooking from "./../assets/animations/cooking.json";

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Pork Back Ribs - large",
        description:
          "Freshly prepared and smoked in-house daily, Montana's is your home for authentic BBQ ribs. Coated in Montana's signature rib rub, slow smoked over hickory chips and then fire grilled to order. Hungry yet? Served with freshly baked cornbread, seasoned fries and your choice of in-house baked beans or coleslaw.",
        price: "$21.99",
        image:
          "https://cdn.montanas.ca/static_images/montanas2x/750x564/1600602@2x.jpg",
      },
    ],
  });
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  const cmAnimation = useRef();
  const cookAnimation = useRef();

  const playAnimation = () => {
    cmAnimation.current.play();
    cookAnimation.current.play();
  };

  useEffect(() => {
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });
    playAnimation();
    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ margin: 15, alignItems: "center", height: "100%" }}>
        <LottieView
          ref={cmAnimation}
          loop={false}
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={checkMark}
          speed={0.5}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your order at {restaurantName} has been placed for {totalUSD}
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MenuItems foods={lastOrder.items} hideCheckbox={true} />
          <LottieView
            ref={cookAnimation}
            speed={0.5}
            style={{ height: 200, alignSelf: "center" }}
            source={cooking}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
