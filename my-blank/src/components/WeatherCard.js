import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

const WeatherCard = ({ city, temp, condition, icon, onDelete }) => {
  return (
    <BlurView intensity={25} tint="light" style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.city}>{city.split(',')[0]}</Text>
          <Text style={styles.country}>{city.split(',')[1]?.trim()}</Text>
        </View>
        <TouchableOpacity onPress={onDelete}>
          <Ionicons name="close-circle" size={24} color="rgba(255, 255, 255, 0.7)" />
        </TouchableOpacity>
      </View>

      <View style={styles.weatherInfo}>
        <Image 
          source={{ uri: icon }} 
          style={styles.icon} 
          resizeMode="contain"
        />
        <Text style={styles.temp}>{Math.round(temp)}°</Text>
      </View>

      <Text style={styles.condition}>{condition}</Text>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    padding: 20,
    marginVertical: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  city: {
    fontSize: 22,
    fontWeight: '600',
    color: 'white',
  },
  country: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 2,
  },
  weatherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  icon: {
    width: 100,
    height: 100,
  },
  temp: {
    fontSize: 48,
    fontWeight: '300',
    color: 'white',
    marginLeft: 10,
  },
  condition: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default WeatherCard;