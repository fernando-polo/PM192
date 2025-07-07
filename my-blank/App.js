import React, { useState, useRef, useEffect } from 'react';
import { View, ScrollView, ActivityIndicator, StyleSheet, Animated, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CityInput from './src/components/CityInput';
import WeatherCard from './src/components/WeatherCard';
import { fetchWeather } from './src/utils/api';

export default function App() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [cities]);

  const handleAddCity = async (city) => {
    setLoading(true);
    Keyboard.dismiss();
    try {
      const weatherData = await fetchWeather(city);
      setCities([weatherData, ...cities]);
      setLoading(false);
    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  };

  const getBackgroundColors = () => {
    if (cities.length === 0) return ['#64b5f6', '#1976d2'];
    const avgTemp = cities.reduce((sum, city) => sum + city.temp, 0) / cities.length;
    return avgTemp > 20 ? ['#ff9a9e', '#fad0c4'] : ['#a1c4fd', '#c2e9fb'];
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accesible={false}>
      <LinearGradient
        colors={getBackgroundColors()}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <CityInput onSubmit={handleAddCity} />
        {loading && <ActivityIndicator size="large" color="white" style={styles.loader} />}
        
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {cities.map((cityData, index) => (
            <Animated.View key={index} style={{ opacity: fadeAnim }}>
              <WeatherCard
                {...cityData}
                onDelete={() => setCities(cities.filter((_, i) => i !== index))}
              />
            </Animated.View>
          ))}
        </ScrollView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  loader: {
    marginTop: 20,
  },
});