import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';

const screenheight = Dimensions.get("screen").height;
const screenwidth = Dimensions.get("screen").width;

export default function App() {
  return (
    <ImageBackground
      source={require("./src/assets/1.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar style="auto" />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0)", "rgba(0,0,0,0.8)"]}
        style={styles.overlay}
      />
      <View style={styles.container}>
        <View style={styles.chefhaticon}>
          <MaterialCommunityIcons name="chef-hat" size={screenwidth * 0.2} color="white" />
          <Text style={styles.chefhaticontext}>100+ Premium Recipe</Text>
        </View>
        <Text style={styles.t1}>{"Get\nCooking"}</Text>
        <Text style={styles.t2}>{"\nSimple way to find recipe"}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.t3}>Start Cooking  </Text>
          <AntDesign name="right" size={18} color="white" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4 )",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: screenheight * 0.12,
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Arka planı tamamen kaplar
  },
  chefhaticon: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  chefhaticontext: {
    color: "white",
    fontWeight: "bold",
    fontSize: screenwidth * 0.06,
  },
  t1: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
  t2: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  t3: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  button:{
    borderRadius:10,
    marginTop:screenheight * 0.06,
    width: screenwidth * 0.6,
    height: screenheight * 0.05,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#129575',
    flexDirection:"row"
  }
});
