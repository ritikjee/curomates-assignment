import { chats } from "@/data/constants";
import { db } from "@/firebaseConfig";
import { ChatType, PeopleType } from "@/types";
import { Entypo, FontAwesome5, Ionicons, Zocial } from "@expo/vector-icons";
import { Link, useLocalSearchParams } from "expo-router";
import { onValue, ref, set } from "firebase/database";

import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChatPage() {
  const { userId } = useLocalSearchParams();

  var person: PeopleType = {
    id: -1,
    name: "",
    image: "",
  };
  var chats: ChatType[] = [];

  function writeChatData(id: string, text: string, recieved: boolean) {
    set(ref(db, "chat/" + id), {
      id: id,
      text: text,
      recieved: recieved,
    });
  }

  // NOTE: uncomment this code to write data to the database

  // for (let i = 0; i < chats.length; i++) {
  // writeChatData(chats[i].id.toString(), chats[i].text, chats[i].recieved);
  // }

  // console.log("Data written successfully!");
  // Fetch user data from the firebase database using the userId

  const user = ref(db, "users/" + userId);
  onValue(user, (snapshot) => {
    const data = snapshot.val();
    person = data;
  });

  const chatData = ref(db, "chat/");
  onValue(chatData, (snapshot) => {
    const data = snapshot.val();
    chats = data;
  });

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#075E54" }}>
        <View style={styles.header}>
          <View style={styles.flex}>
            <Link replace href={"/"}>
              <Ionicons name="arrow-back-outline" size={24} color="white" />
            </Link>
            <Image
              source={{ uri: person.image }}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
            <View>
              <Text style={styles.text}>{person.name}</Text>
              <Text style={{ color: "white" }}>online</Text>
            </View>
          </View>
          <View style={styles.flex}>
            <FontAwesome5 name="video" size={24} color="white" />
            <Zocial name="call" size={24} color="white" />
            <Entypo name="dots-three-vertical" size={24} color="white" />
          </View>
        </View>
      </SafeAreaView>
      <ScrollView>
        {chats.map((chat: ChatType) => (
          <View
            key={chat.id}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: chat.recieved ? "flex-start" : "flex-end",
              padding: 10,
            }}
          >
            <View
              style={{
                backgroundColor: chat.recieved ? "#f0f0f0" : "#DCF8C6",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <Text style={{ fontSize: 15 }}>{chat.text}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 70,
    backgroundColor: "#075E54",
    paddingHorizontal: 2,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
});
