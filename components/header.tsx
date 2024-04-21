import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Link, usePathname } from "expo-router";

const Header = () => {
  const pathname = usePathname();

  return (
    <View style={{ backgroundColor: "#075E54" }}>
      <View style={{ ...styles.header, marginBottom: 16 }}>
        <Text style={{ ...styles.text, fontWeight: "bold" }}>WhatsApp</Text>
        <View style={styles.icons}>
          <AntDesign
            name="search1"
            size={24}
            color="white"
            style={{ ...styles.text, fontWeight: "bold" }}
          />
          <Entypo
            name="dots-three-vertical"
            size={24}
            color="white"
            style={{ ...styles.text, fontWeight: "bold" }}
          />
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <AntDesign name="camera" size={24} color="white" />
        <View style={{ ...styles.content, paddingBottom: 10 }}>
          <Link href={"/(tabs)/"}>
            <Text
              style={{
                fontSize: 16,
                color: "white",
                fontWeight: "700",
                textDecorationLine: pathname === "/" ? "underline" : "none",
              }}
            >
              CHATS
            </Text>
          </Link>
          <Link href={"/(tabs)/status"}>
            <Text
              style={{
                fontSize: 16,
                color: "white",
                fontWeight: "700",
                textDecorationLine:
                  pathname === "/status" ? "underline" : "none",
              }}
            >
              STATUS
            </Text>
          </Link>
          <Link href={"/(tabs)/calls"}>
            <Text
              style={{
                fontSize: 16,
                color: "white",
                fontWeight: "700",
                textDecorationLine:
                  pathname === "/calls" ? "underline" : "none",
              }}
            >
              CALLS
            </Text>
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    backgroundColor: "#075E54",
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 25,
    color: "white",
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  content: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    paddingHorizontal: 20,
  },
});

export default Header;
