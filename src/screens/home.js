import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import PlanetHeader from "../components/text/planet-header";
import { colors } from "../theme/colors";
import { PLANET_LIST } from "../data/planet-list";
import Text from "../components/text/text";
import { spacing } from "../theme/spacing";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PlanetItem = ({ item }) => {
  const { name, color } = item;
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Details", { planet: item });
      }}
      style={styles.item}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={[styles.circal, { backgroundColor: color }]} />
        <Text preset="h4" style={styles.itemName}>
          {name}
        </Text>
      </View>
      <AntDesign name="right" size={18} color="white" />
    </Pressable>
  );
};

export default function Home({ navigation }) {

  const [list, setList] = useState(PLANET_LIST);
  const renderItem = ({ item }) => {
    return <PlanetItem item={item} />;
  };

  const searchFilter =(text) =>{
    const filterList = PLANET_LIST.filter(item =>{
      const itemName = item.name.toLowerCase();
      const userTypeText = text.toLowerCase();

      return itemName.indexOf(userTypeText) > -1;
    })
    setList(filterList);
  }

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />

      <TextInput
        placeholder="Type the planet name"
        placeholderTextColor={colors.white}
        autoCapitalize={false}
        style={styles.serchInput}
        onChangeText={(text) => searchFilter(text)}
      />

      <FlatList
        contentContainerStyle={styles.list}
        data={list}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  list: {
    padding: spacing[4],
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: spacing[4],
    alignItems: "center",
  },
  circal: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  itemName: {
    textTransform: "uppercase",
    marginLeft: spacing[4],
  },
  separator: {
    borderBottomColor: colors.white,
    borderWidth: 0.5,
  },
  serchInput: {
    padding: spacing[4],
    color: colors.white,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    margin: spacing[5],
  },
});
