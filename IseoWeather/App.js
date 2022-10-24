import { StatusBar } from 'expo-status-bar';
import { View,Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>sunny</Text>
        </View>
      </View>
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
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems:"center",
  },
  cityName: {
    fontSize: 68,
    fontWeight:"500",
  },
  weather: {
    flex: 3,
  },
  day: {
    flex: 1,
    // justifyContent: "center",
    alignItems:"center",
    backgroundColor:"blue",
  },
  temp: {
    marginTop:50,
    fontSize:158,
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
