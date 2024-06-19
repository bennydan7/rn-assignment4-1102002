import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import AppleImage from "../assets/apple.png";
import GoogleImage from "../assets/google.png";
import FacebookImage from "../assets/facebook.png";

const Login = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View
      style={{
        height: hp("100%"),
        width: wp("100%"),
        paddingLeft: wp("5%"),
        paddingRight: wp("5%"),
      }}
    >
      <View style={{ marginTop: hp("12%"), fontFamily: "Poppins" }}>
        <Text
          style={{
            fontSize: hp("4%"),
            color: "#356899",
            fontWeight: "600",
            marginBottom: hp("1%"),
          }}
        >
          Jobizz
        </Text>
        <Text
          style={{
            fontSize: hp("4.5%"),
            color: "#0D0D26",
            fontWeight: "600",
            marginBottom: hp("1%"),
          }}
        >
          Welcome Back 👋
        </Text>
        <Text
          style={{
            fontSize: hp("2%"),
            color: "#",
            fontWeight: "400",
            opacity: 0.5,
          }}
        >
          Let's log in. Apply to jobs!
        </Text>
      </View>
      <View style={{ height: hp("30%"), marginTop: hp("6%") }}>
        <TextInput
          style={{
            height: hp("8%"),
            marginBottom: hp("2%"),
            paddingLeft: wp("4%"),
            fontSize: hp("2.5%"),
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#AFB0B6",
          }}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={{
            height: hp("8%"),
            marginBottom: hp("2%"),
            paddingLeft: wp("4%"),
            fontSize: hp("2.5%"),
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#AFB0B6",
          }}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity
          style={{
            height: hp("8%"),
            backgroundColor: "#356899",
            marginTop: hp("2%"),
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
          //   onPress={handleLogin}
        >
          <Text style={{ fontSize: hp("2.5%"), color: "white" }}>Log in</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: hp("7%"),
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "#AFB0B6" }}></View>
        <Text
          style={{
            width: wp("30%"),
            textAlign: "center",
            color: "#AFB0B6",
            fontFamily: "Circular Std",
            fontSize: hp("2%"),
          }}
        >
          Or continue with
        </Text>
        <View style={{ flex: 1, height: 1, backgroundColor: "#AFB0B6" }}></View>
      </View>
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <TouchableOpacity>
          <Image source={AppleImage} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={GoogleImage} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={FacebookImage} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          marginTop: hp("2%"),
          fontFamily: "Circular Std",
        }}
      >
        <Text style={{ color: "#BDBEC2" }}>Haven't an account? </Text>
        <TouchableOpacity>
          <Text style={{ color: "#0000FF" }}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
