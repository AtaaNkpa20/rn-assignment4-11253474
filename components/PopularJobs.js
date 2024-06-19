import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

const PopularJobs = ({ onPressSeeAll }) => {
  const popularJobs = [
    {
      job: "Jr Executive",
      companyName: "Burger King",
      salary: "$96,000",
      location: "Los Angeles, US",
      image: 'https://cdn-icons-png.flaticon.com/128/5977/5977578.png'
    },
    {
      job: "Product Manager",
      companyName: "Beats",
      salary: "$84,000",
      location: "Florida, US",
      image: 'https://cdn-icons-png.flaticon.com/128/300/300221.png'
    },
    {
      job: "Snr Developer",
      companyName: "Spotify",
      salary: "$86,000",
      location: "Florida, US",
      image: 'https://cdn-icons-png.flaticon.com/128/2111/2111624.png'
    },
    {
      job: 'Accountant',
      companyName: 'Uber',
      salary: '$80,000',
      location: 'Miami, US',
      image: 'https://cdn-icons-png.flaticon.com/128/5969/5969324.png'
    },
    {
      job: 'Technician',
      companyName: 'Samsung',
      salary: '$90,000',
      location: 'Atlanta, US',
      image: 'https://cdn-icons-png.flaticon.com/128/5969/5969254.png'
    }
  ];

  const renderJobItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.firstSection}>
        {item.image ? (
          <Image source={{ uri: item.image }} style={styles.jobImage} />
        ) : (
          <FontAwesome5 name={jobIcons[item.job]} size={40} color="#2666CF" />
        )}
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.jobText}>{item.job}</Text>
          <Text style={styles.secondaryText}>{item.companyName}</Text>
        </View>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.jobText}>{item.salary}/y</Text>
        <Text style={styles.secondaryText}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={styles.title}>Popular Jobs</Text>
        <TouchableOpacity onPress={onPressSeeAll}>
          <Text style={styles.subTitle}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={popularJobs}
        renderItem={renderJobItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    color: "#1F305E",
    fontWeight: "bold",
    fontSize: 17,
  },
  subTitle: {
    color: "#2666CF",
    fontSize: 14,
  },
  card: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  firstSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  jobImage: {
    width: 30,
    height: 30,
    borderRadius: 25,
  },
  jobText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  secondaryText: {
    color: "#8C92AC",
    marginTop: 5,
  },
});

export default PopularJobs;
