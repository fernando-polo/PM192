import React from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CitySuggestions = ({ suggestions, onSelect }) => {
  return (
    <FlatList
      data={suggestions}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.suggestionItem}
          onPress={() => onSelect(item.name)}
        >
          <Text style={styles.suggestionText}>{item.name}</Text>
        </TouchableOpacity>
      )}
      style={styles.suggestionsList}
      keyboardShouldPersistTaps="always"
    />
  );
};

const styles = StyleSheet.create({
  suggestionsList: {
    maxHeight: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  suggestionItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },
  suggestionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default CitySuggestions;