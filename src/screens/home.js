import {SafeAreaView, StyleSheet, View, FlatList, Pressable } from 'react-native'
import React from 'react'
import PlanetHeader from '../components/text/planet-header'
import { colors } from '../theme/colors'
import { PLANET_LIST } from '../data/planet-list'
import Text from '../components/text/text'
import { spacing } from '../theme/spacing'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const PlanetItem =({item}) => {
  const {name, color} = item;
  const navigation = useNavigation();
  return(
    <Pressable onPress={()=>{
      navigation.navigate('Details', {planet: item})
    }} style={styles.item}>
      <View style={{flexDirection:'row', alignItems: 'center'}}>
      <View style={[styles.circal, { backgroundColor:color}]}/>
      <Text preset='h4' style={styles.itemName}>{name}</Text>
      </View>
      <AntDesign name="right" size={18} color="white" />
    </Pressable>
  );
}

export default function Home({navigation}) {
  const renderItem = ({item}) =>{
    return(
      <PlanetItem item={item}/> 
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader/>
      <FlatList
      contentContainerStyle={styles.list}
        data={PLANET_LIST}
        keyExtractor={(item)=> item.name}
        renderItem={renderItem}
        ItemSeparatorComponent={()=> <View style={styles.separator}/>}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1, backgroundColor: colors.black
    },
    list:{
      padding: spacing[4]
    },
    item:{
      flexDirection: 'row',
      justifyContent:'space-between',
      padding: spacing[4],
      alignItems: 'center'
    },
    circal:{
      width:30,
      height:30,
      borderRadius:20
    },
    itemName:{
      textTransform:'uppercase',
      marginLeft: spacing[4]
    },
    separator:{
      borderBottomColor: colors.white,
      borderWidth: 0.5
    }
})