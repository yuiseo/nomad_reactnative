import { StatusBar } from 'expo-status-bar';
import React,{ useEffect,useState } from 'react';
import { View,Text, Dimensions, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
const { width:SCREEN_WIDTH } = Dimensions.get('window');
const API_KEY = "f9ecf35e904a8f11952563a586d514c2"
console.log(SCREEN_WIDTH)
export default function App() {
  const [city, setCity] = useState("Loading...");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const getWeather = async () => {
    // const permission = await Location.requestForegroundPermissionsAsync();
    const {granted} = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    //const location = await Location.getCurrentPositionAsync();
    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
    const location = await Location.reverseGeocodeAsync({latitude,longitude},{useGoogleMaps:false})
    setCity(location[0].city)
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();
    setDays(json.daily);

  }
  useEffect(() => {
    getWeather()
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
        {days.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator
              color="white"
              style={{ marginTop: 10 }}
              size="large"
            />
          </View>
        ) : (
          days.map((day, index) => (
            <View key={index} style={styles.day}>
              <Text style={styles.temp}>
                {parseFloat(day.temp.day).toFixed(1)}
              </Text>
              <Text style={styles.description}>{day.weather[0].main}</Text>
              <Text style={styles.tinyText}>{day.weather[0].description}</Text>
            </View>
          ))
        )}
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
