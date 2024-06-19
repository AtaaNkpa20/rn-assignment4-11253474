import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import JobCard from './JobCard';
import PopularJobs from './PopularJobs';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  
  // Example jobData; replace with your actual data
  const jobData = [
    {
      id: '1',
      title: 'Software Engineer',
      company: 'Facebook', 
      salary: '$150,000',
      location: 'Accra,Ghana',
      category: 'Featured',
      image: 'https://cdn-icons-png.flaticon.com/128/145/145802.png',
    },
    {
      id: '2',
      title: 'Network Enginner',
      company: 'Google',
      salary: '$180,000',
      location: 'Accra,Ghana',
      category: 'Featured',
      image: 'https://cdn-icons-png.flaticon.com/128/300/300221.png',
    },
    { 
      id: '3', 
      title: 'Cloud Engineer', 
      company: 'Amazon', 
      salary: '$160,000', 
      location: 'Accra,Ghana', 
      category: 'Featured',
      image: 'https://cdn-icons-png.flaticon.com/128/16574/16574318.png'
    },
    { id: '4', 
      title: 'Cyber Analyst', 
      company: 'Microsoft', 
      salary: '$170,000', 
      location: 'Accra,Ghana', 
      category: 'Featured',
      image: 'https://cdn-icons-png.flaticon.com/128/732/732221.png'
    },
    { id: '5', 
      title: 'Database Administartor', 
      company: 'Oracle', 
      salary: '$100,000', 
      location: 'Accra,Ghana', 
      category: 'Featured',
      image: 'https://cdn-icons-png.flaticon.com/128/5969/5969229.png'
    },
    { id: '1', 
      title: 'Jr Executive', 
      company: 'Burger King', 
      category: 'Popular',
      image: 'https://cdn-icons-png.flaticon.com/128/5977/5977578.png' 
    },
    // Add more job objects here
  ];


  // Function to handle search
  const handleSearch = () => {
    const filtered = jobData.filter(job =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

    // Filtered or original jobData based on search
    const jobsToDisplay = filteredJobs.length > 0 ? filteredJobs : jobData;

  return (
    <ScrollView style={styles.container}>
    <View style={styles.image}>
      <Image source={{ uri: 'https://i.pinimg.com/236x/4e/06/aa/4e06aa58650d626a4bf1c7b10bfd018d.jpg'}} style={styles.image} resizeMode='cover'/>
    </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search a job or position"
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Featured Jobs */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.title}>Featured Jobs</Text>
        <Text style={styles.subTitle}>See All</Text>
      </View>
      <FlatList
        horizontal
        data={jobsToDisplay.filter(job => job.category === 'Featured')}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <JobCard key={item.id} details={item} />}
      />

      {/* Popular Jobs */}
      <FlatList
        data={jobsToDisplay.filter(job => job.category === 'Popular')}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <PopularJobs key={item.id} details={item} />}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 20,
    color: '#95969D',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 20,
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
  imageContainer: {
    alignItems: 'flex-end',  // Aligns the content to the right
    marginTop: 20,
    marginRight: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginRight: 8,
    backgroundColor: '#E5E4E2'
  },
  searchButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 4,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontWeight: 'bold'
  }
});

export default HomeScreen;
