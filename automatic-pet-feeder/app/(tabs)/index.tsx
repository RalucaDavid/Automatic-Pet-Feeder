import { Text, View, StyleSheet } from "react-native";
import Button from "@/components/Button";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pet Feeding Control</Text>
      <View style={styles.containerButtons}>
        <Button iconType="calendar" label="Automatic feeding plan" />
        <Button iconType="pets" label="Feed now" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 120,
  },
  title: {
    color: '#fff',
    fontSize: 50,
    marginBottom: 20,
    fontFamily: 'Poppins_700Bold',
  },
  containerButtons: {
    gap: 5,
  }
});
