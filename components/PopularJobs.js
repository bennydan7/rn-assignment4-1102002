import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const PopularJobs = ({
  companyLogo,
  jobTitle,
  companyName,
  price,
  location,
}) => {
  return (
    <TouchableOpacity style={styles.jobContainer}>
      <View style={styles.logoSection}>
        <Image source={companyLogo} style={styles.logo} />
      </View>
      <View style={styles.jobDetails}>
        <View style={styles.topDetails}>
          <Text style={styles.jobTitleText}>{jobTitle}</Text>
          <Text style={styles.priceText}>{price}</Text>
        </View>
        <View style={styles.bottomDetails}>
          <Text style={styles.companyNameText}>{companyName}</Text>
          <Text style={styles.locationText}>{location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  jobContainer: {
    height: hp("15%"),
    width: wp("90%"),
    backgroundColor: "#FFFFF7",
    flexDirection: "row",
    borderRadius: 20,
    paddingLeft: wp("5%"),
    paddingRight: wp("5%"),
    paddingBottom: hp("2%"),
    marginTop: hp("3%"),
    marginBottom: hp("1%"),
    alignItems: "center",
    justifyContent: "center",
  },

  logoSection: {
    height: hp("10%"),
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 50,
    height: 50,
  },

  jobDetails: {
    height: hp("7%"),
    justifyContent: "space-between",
    width: wp("65%"),
  },

  topDetails: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  bottomDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  jobTitleText: {
    fontSize: hp("2.5%"),
    width: wp("45%"),
  },

  priceText: {
    fontSize: hp("1.5%"),
  },

  companyNameText: {
    fontSize: hp("2%"),
    color: "#AFB0B6",
  },

  locationText: {
    fontSize: hp("2%"),
    color: "#AFB0B6",
  },
});

export default PopularJobs;
