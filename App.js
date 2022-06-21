import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { spacing } from "./src/theme/spacing";
import Text from "./src/components/text/text";
import { useFonts } from "expo-font";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/home";
import { colors } from "./src/theme/colors";

export default function App() {
  const [loaded] = useFonts({
    "Antonio-Medium": require("./assets/fonts/Antonio-Medium.ttf"),
    "Spartan-Bold": require("./assets/fonts/LeagueSpartan-Bold.ttf"),
    "Spantan-Regular": require("./assets/fonts/LeagueSpartan-Regular.ttf"),
  });

  if (!loaded) {
    return <Text>Font is Loading...</Text>;
  }

  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
