import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Chat = ({
  name,
  image,
  id,
}: {
  name: string;
  image: string;
  id: number;
}) => {
  return (
    <Link href={`/${id}`}>
      <View style={styles.chat}>
        <Image
          source={{ uri: image }}
          style={{ width: 50, height: 50, borderRadius: 50 }}
        />
        <View style={styles.content}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>{name}</Text>
          <Text>Hey there! I am using WhatsApp</Text>
        </View>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  chat: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 10,
  },
});

export default Chat;
