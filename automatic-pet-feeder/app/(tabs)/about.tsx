import { Text, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="pets" size={40} color="white" />
      <Text style={styles.title}>About our project</Text>
      <Text style={styles.text}>Our automatic feeder is designed to make pet care easier and more convenient. It allows you to schedule and manage your pet's feeding times with ease.</Text>
      <Text style={styles.text}>With options like Feed Now, you can feed your pet instantly, while the Automatic Feeding Plan lets you set up a regular feeding schedule.</Text>
      <Text style={styles.text}>This ensures your pet is fed at the right times, even when you're not home, providing both convenience and peace of mind for busy pet owners.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D79CB',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    margin: 5,
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});