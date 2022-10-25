import { StatusBar } from 'expo-status-bar';
import React,{ useEffect,useState } from 'react';
import { View,Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
import * as Location from 'expo-location';
const { width:SCREEN_WIDTH } = Dimensions.get('window');

console.log(SCREEN_WIDTH)
export default function App() {
  const [city,setCity] = useState("Loading...")
  const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);
  const ask = async () => {
    // const permission = await Location.requestForegroundPermissionsAsync();
    const {granted} = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    //const location = await Location.getCurrentPositionAsync();
    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
    const location = await Location.reverseGeocodeAsync({latitude,longitude},{useGoogleMaps:false})
    setCity(location[0].city)
  }
  useEffect(() => {
    ask()
  }, [])
  
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        //indicatorStyle='white'
        showsHorizontalScrollIndicator={false}
        contentContainerstyle={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"tomato"
  },
  city: {
    flex: 1,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems:"center",
  },
  cityName: {
    fontSize: 68,
    fontWeight:"00",
  },
  weather: {
    backgroundColor:"tomato"
  },
  day: {
    width:SCREEN_WIDTH,
    // justifyContent: "center",
    alignItems:"center",
    backgroundColor:"tomato",
  },
  temp: {
    marginTop: 50,
    fontWeight: "600",
    fontSize: 178,
  },
  description: {
    fontSize: 60,
    marginTop:-30,
  }
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize:29,
//   }
// });
