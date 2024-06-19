import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const JobCard = ({ details, isPopular }) => {
  const cardStyle = isPopular ? styles.popularCard : styles.featuredCard;

  return (
    <View style={[styles.card, cardStyle]}>
      <Image
        source={{ uri: details.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{details.title}</Text>
        <Text style={styles.company}>{details.company}</Text>
        <Text style={styles.salary}>{details.salary}</Text>
        <Text style={styles.location}>{details.location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: 'white',
    height: 145,
    width: 239,
    margin: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    justifyContent: '',
    flexDirection: 'row', // Adjusted for image and text layout
    alignItems: 'left', // Adjusted for image and text layout
    backgroundColor: '#72A0C1'
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 8,
    marginRight: 12,
  },
  textContainer: {
    flex: 1, // Make text container take up the remaining space
  },
  popularCard: {
    width: '100%'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  company: {
    fontSize: 14,
    color: '#fff',
  },
  salary: {
    fontSize: 14,
    color: '#fff',
    marginTop: 55,
    marginBottom: 2,
    textAlign: 'left',
  },
  location: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 5,
    textAlign: 'right'
  },
});

export default JobCard;
