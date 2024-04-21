import Header from "@/components/header";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeLayout() {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#075E54" }}>
        <Header />
      </SafeAreaView>
      <Slot />
    </>
  );
}
