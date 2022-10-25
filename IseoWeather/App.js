import { StatusBar } from 'expo-status-bar';
import { View,Text, Dimensions, StyleSheet, ScrollView } from 'react-native';

const { width:SCREEN_WIDTH } = Dimensions.get('window');

console.log(SCREEN_WIDTH)
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
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
