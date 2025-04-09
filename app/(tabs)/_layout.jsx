import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import { colors } from "../../constants/colors";

export default function TabsLayout() {
  return (
   <Tabs screenOptions={{
    headerStyle: {backgroundColor: colors.primary}
   }}>
    <Tabs.Screen name="index"/>
    <Tabs.Screen name="add-transactions"/>
    <Tabs.Screen name="summary"/>
   </Tabs>
  )
}