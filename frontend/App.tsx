import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [language, setLanguage] = useState('Spanish');
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);
  
  const hobbies = ['Cooking', 'Gaming', 'Reading', 'Travel', 'Music', 'Sports'];

  const toggleHobby = (hobby: string) => {
    if (selectedHobbies.includes(hobby)) {
      setSelectedHobbies(selectedHobbies.filter(h => h !== hobby));
    } else {
      setSelectedHobbies([...selectedHobbies, hobby]);
    }
  };

  const handleStartMatching = () => {
    alert(`Searching for matches for ${language} and ${selectedHobbies.join(', ')}...`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Lingo Match</Text>
      
      <View style={styles.section}>
        <Text style={styles.label}>Select a language to learn:</Text>
        <Picker
          selectedValue={language}
          onValueChange={(itemValue) => setLanguage(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Spanish" value="Spanish" />
          <Picker.Item label="Japanese" value="Japanese" />
          <Picker.Item label="French" value="French" />
          <Picker.Item label="German" value="German" />
          <Picker.Item label="Italian" value="Italian" />
        </Picker>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Select your hobbies:</Text>
        <View style={styles.tagContainer}>
          {hobbies.map(h => (
            <TouchableOpacity 
              key={h} 
              onPress={() => toggleHobby(h)}
              style={[styles.tag, selectedHobbies.includes(h) && styles.tagSelected]}
            >
              <Text style={selectedHobbies.includes(h) ? styles.tagTextSelected : styles.tagText}>{h}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <Button title="Find Matching Partners" onPress={handleStartMatching} />
      
      <View style={styles.footer}>
        <Text>AI-Supported Coaching Active</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    padding: 10,
    margin: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  tagSelected: {
    backgroundColor: '#007AFF',
  },
  tagText: {
    color: '#007AFF',
  },
  tagTextSelected: {
    color: '#fff',
  },
  footer: {
    marginTop: 30,
    fontStyle: 'italic',
  },
});