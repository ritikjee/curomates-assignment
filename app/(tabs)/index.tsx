import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { onValue, ref, set } from "firebase/database";
import { db } from "@/firebaseConfig";
import { PeopleType } from "@/types";
import Chat from "@/components/chat";
//import { people } from "@/data/constants";

const HomePage = () => {
  var people: PeopleType[] = [];

  function writeUserData(userId: string, name: string, image: string) {
    set(ref(db, "users/" + userId), {
      id: userId,
      name: name,
      image: image,
    });
  }

  //NOTE: uncomment this code to write data to the database

  //for (let i = 0; i < peoples.length; i++) {
  // writeUserData(peoples[i].id.toString(), peoples[i].name, peoples[i].image);
  //}

  //console.log("Data written successfully!");

  const users = ref(db, "users");
  onValue(users, (snapshot) => {
    const data = snapshot.val();
    people = data;
  });

  return (
    <ScrollView>
      {people.map((person: PeopleType) => (
        <Chat
          key={person.id}
          name={person.name}
          image={person.image}
          id={person.id}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default HomePage;
