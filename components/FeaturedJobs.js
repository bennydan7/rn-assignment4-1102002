import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const FeaturedJobs = ({
  companyLogo,
  jobTitle,
  companyName,
  backgroundColor,
  price,
  location,
}) => {
  return (
    <TouchableOpacity style={[styles.jobContainer, { backgroundColor }]}>
      <View style={styles.topSection}>
        <View style={styles.logoWrapper}>
          <Image source={companyLogo} style={styles.logo} />
        </View>
        <View style={styles.jobDetails}>
          <Text style={styles.jobTitle}>{jobTitle}</Text>
          <Text style={styles.companyName}>{companyName}</Text>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.jobPrice}>{price}</Text>
        <Text style={styles.jobLocation}>{location}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  jobContainer: {
    marginTop: 25,
    height: 200,
    width: 300,
    borderRadius: 20,
    marginRight: 15,
    paddingTop: 20,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },

  topSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoWrapper: {
    height: 50,
    width: 60,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 40,
    height: 40,
  },

  jobDetails: {
    marginLeft: 20,
  },

  jobTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  companyName: {
    fontSize: 15,
    color: "#FFFFFF",
  },

  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 80,
  },

  jobPrice: {
    fontSize: 15,
    color: "#FFFFFF",
  },

  jobLocation: {
    fontSize: 15,
    color: "#FFFFFF",
  },
});

export default FeaturedJobs;
