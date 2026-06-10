import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [language, setLanguage] = useState('');
  const [hobby, setHobby] = useState('');

  const handleStartMatching = () => {
    alert(`Searching for matches for ${language} and ${hobby}...`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Lingo Match</Text>
      
      <View style={styles.section}>
        <Text style={styles.label}>Select a language you want to learn:</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Spanish, Japanese"
          value={language}
          onChangeText={setLanguage}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>What is your favorite hobby?</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Cooking, Gaming"
          value={hobby}
          onChangeText={setHobby}
        />
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
    justifyContent: 'center',
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  footer: {
    marginTop: 30,
    fontStyle: 'italic',
  },
});
