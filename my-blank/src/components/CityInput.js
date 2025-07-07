import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CitySuggestions from './CitySuggestions';
import { searchCities } from '../utils/api';

const CityInput = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (query.length > 2) {
      const timer = setTimeout(async () => {
        try {
          const cities = await searchCities(query);
          setSuggestions(cities);
        } catch (error) {
          setSuggestions([]);
        }
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSelectCity = (cityName) => {
    setQuery(cityName);
    setShowSuggestions(false);
    onSubmit(cityName);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar ciudad..."
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          value={query}
          onChangeText={(text) => setQuery(text)}
          onFocus={() => setShowSuggestions(true)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (query.trim()) onSubmit(query);
            setQuery('');
          }}
        >
          <Ionicons name="search" size={22} color="white" />
        </TouchableOpacity>
      </View>

      {showSuggestions && suggestions.length > 0 && (
        <CitySuggestions
          suggestions={suggestions}
          onSelect={handleSelectCity}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    position: 'relative',
    zIndex: 20, // Prioridad sobre otros elementos
  },
  input: {
    height: 45,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    paddingLeft: 15,
    paddingRight: 45,
    color: 'white',
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  button: {
    position: 'absolute',
    right: 12,
    top: 10,
  },
});

export default CityInput;