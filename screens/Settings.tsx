import React from "react";
import { View } from "react-native";
import { ListItem } from "../components/ListItem";
import Entypo from "@expo/vector-icons/Entypo";

export const Settings = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        margin: 16,
        borderRadius: 11,
        overflow: "hidden",
      }}
    >
      <ListItem
        label="Categories"
        detail={<Entypo name="chevron-thin-right" size={20} color="white" style={{ opacity: 0.3 }} />}
        onClick={() => {}}
      />
      <ListItem label="Erase all data" isDestructive onClick={() => {}} />
    </View>
  );
};
