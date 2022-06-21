import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {spacing} from './src/theme/spacing';
import Text  from './src/components/text';
import { useFonts } from 'expo-font';
import { typography } from './src/theme/typography';

export default function App() {

   const [loaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'Spantan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
  });
  
  if (!loaded) {
    return <Text>Font is Loading...</Text>
  }

  return (
    <View style={styles.container}>
      <Text preset='h1'>Start working on your App</Text>
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
