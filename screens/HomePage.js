import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import ProfilePic from "../assets/profile-picture.png";
import OnlineCircle from "../assets/online-circle.png";
import SearchImage from "../assets/search-image.png";

import PopularJobs from "../components/PopularJobs";
import FeaturedJobs from "../components/FeaturedJobs";

import facebookLogo from "../assets/facebookLogo.png";
import googleLogo from "../assets/googleLogo.png";
import burgerKingLogo from "../assets/burger-king-logo.png";
import beatsLogo from "../assets/beats-logo.png";
import facebookLogoAlt from "../assets/facebook-logo.png";

const HomePage = ({ route }) => {
  const { name = "Eric Atsu", email = "eric@gmail.com" } = route.params || {};

  const FeaturedJobsData = [
    {
      id: "1",
      companyLogo: facebookLogo,
      jobTitle: "Software Engineer",
      companyName: "Facebook",
      backgroundColor: "#4169E1",
      price: "$180,00",
      location: "Accra, Ghana",
    },
    {
      id: "2",
      companyLogo: googleLogo,
      jobTitle: "Cloud Engineer",
      companyName: "Google",
      backgroundColor: "#151B54",
      price: "$160,00",
      location: "Accra, Ghana",
    },
    {
      id: "3",
      companyLogo: googleLogo,
      jobTitle: "Security Analyst",
      companyName: "Google",
      backgroundColor: "#0E7C78",
      price: "$140,00",
      location: "Accra, Ghana",
    },
    {
      id: "4",
      companyLogo: facebookLogo,
      jobTitle: "IT Systems Engineer",
      companyName: "Facebook",
      backgroundColor: "#92860D",
      price: "$130,00",
      location: "Accra, Ghana",
    },
    {
      id: "5",
      companyLogo: googleLogo,
      jobTitle: "Data Scientist",
      companyName: "Google",
      backgroundColor: "#D3383F",
      price: "$130,00",
      location: "Accra, Ghana",
    },
    {
      id: "6",
      companyLogo: facebookLogo,
      jobTitle: "Web Developer",
      companyName: "Facebook",
      backgroundColor: "#964E00",
      price: "$120,00",
      location: "Accra, Ghana",
    },
    {
      id: "7",
      companyLogo: googleLogo,
      jobTitle: "Computer Engineer",
      companyName: "Google",
      backgroundColor: "#125913",
      price: "$150,00",
      location: "Accra, Ghana",
    },
    {
      id: "8",
      companyLogo: facebookLogo,
      jobTitle: "UX/UI Developer",
      companyName: "Facebook",
      backgroundColor: "#B23737",
      price: "$90,00",
      location: "Accra, Ghana",
    },
  ];

  const PopularJobsData = [
    {
      id: "1",
      companyLogo: burgerKingLogo,
      jobTitle: "Jr Executive",
      companyName: "Burger King",
      price: "$96,000/y",
      location: "Los Angeles, US",
    },
    {
      id: "2",
      companyLogo: beatsLogo,
      jobTitle: "Product Manager",
      companyName: "Beats",
      price: "$84,000/y",
      location: "Florida, US",
    },
    {
      id: "3",
      companyLogo: facebookLogoAlt,
      jobTitle: "Product Manager",
      companyName: "Facebook",
      price: "$86,000/y",
      location: "Florida, US",
    },
    {
      id: "4",
      companyLogo: facebookLogoAlt,
      jobTitle: "Devops Engineer",
      companyName: "Dinc Inc",
      price: "$110,000/y",
      location: "Cambridge, UK",
    },
    {
      id: "5",
      companyLogo: burgerKingLogo,
      jobTitle: "System Admin",
      companyName: "Juggles Inc",
      price: "$98,000/y",
      location: "London, UK",
    },
    {
      id: "6",
      companyLogo: facebookLogoAlt,
      jobTitle: "Account Coordinator",
      companyName: "Facebook",
      price: "$88,000/y",
      location: "Texas, US",
    },
    {
      id: "7",
      companyLogo: beatsLogo,
      jobTitle: "Sales Representative",
      companyName: "Beats",
      price: "$75,000/y",
      location: "Johannesburg, SA",
    },
    {
      id: "8",
      companyLogo: burgerKingLogo,
      jobTitle: "Java Developer",
      companyName: "Burger King",
      price: "$99,500/y",
      location: "Mumbai, IN",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={{ justifyContent: "center" }}>
          <Text style={{ fontSize: hp("3%"), fontWeight: "bold" }}>{name}</Text>
          <Text style={{ fontSize: hp("2.5%"), color: "#95969D" }}>
            {email}
          </Text>
        </View>
        <View style={styles.image}>
          <TouchableOpacity>
            <Image source={ProfilePic} />
            <Image source={OnlineCircle} style={styles.isOnline} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.search}>
          <View style={styles.searchSpace}>
            <Image source={SearchImage} />
            <TextInput
              style={styles.searchBox}
              placeholder="Search a job or position"
            />
          </View>
          <View>
            <TouchableOpacity>
              <View style={styles.filter}>
                <View>
                  <Text>|</Text>
                  <Text>O</Text>
                </View>
                <View>
                  <Text>O</Text>
                  <Text style={{ marginLeft: wp("1%") }}>|</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.featuredJobsBox}>
          <View style={styles.jobsHeading}>
            <Text style={{ fontSize: hp("3%"), fontWeight: "bold" }}>
              Featured Jobs
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: hp("2%"),
                  color: "#95969D",
                  paddingTop: hp("0.5%"),
                }}
              >
                See all
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={FeaturedJobsData}
            renderItem={({ item }) => (
              <FeaturedJobs
                companyLogo={item.companyLogo}
                jobTitle={item.jobTitle}
                companyName={item.companyName}
                backgroundColor={item.backgroundColor}
                price={item.price}
                location={item.location}
              />
            )}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.PopularJobsBox}>
          <View style={styles.jobsHeading}>
            <Text style={{ fontSize: hp("3%"), fontWeight: "bold" }}>
              Popular Jobs
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: hp("2%"),
                  color: "#95969D",
                  paddingTop: hp("0.5%"),
                }}
              >
                See all
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={PopularJobsData}
            renderItem={({ item }) => (
              <PopularJobs
                companyLogo={item.companyLogo}
                jobTitle={item.jobTitle}
                companyName={item.companyName}
                price={item.price}
                location={item.location}
              />
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("100%"),
    width: wp("100%"),
    paddingLeft: wp("5%"),
    paddingBottom: hp("3%"),
  },

  profile: {
    marginTop: hp("5.5%"),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: wp("5%"),
    marginBottom: hp("1%"),
  },

  image: {
    flexDirection: "row",
  },

  isOnline: {
    position: "absolute",
    top: 6,
    left: 40,
    borderColor: "#ffffff",
    borderWidth: 2,
    borderRadius: 4,
  },

  search: {
    width: wp("90%"),
    marginTop: hp("2%"),
    flexDirection: "row",
    justifyContent: "space-between",
    MarginRight: 5,
    height: hp("7%"),
  },

  searchSpace: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    width: wp("73%"),
    borderRadius: 10,
    paddingLeft: 10,
  },

  searchBox: {
    height: 50,
    width: wp("60%"),
    padding: 10,
    fontSize: hp("2%"),
    fontWeight: "bold",
  },

  filter: {
    width: wp("13%"),
    height: hp("7%"),
    backgroundColor: "#D3D3D3",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  featuredJobsBox: {
    height: 290,
    marginTop: hp("3%"),
  },

  jobsHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: wp("6%"),
  },
});

export default HomePage;
