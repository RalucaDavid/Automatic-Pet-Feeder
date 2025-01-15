import { Text, View, StyleSheet } from "react-native";
import Button from "@/components/Button";
import { useState } from "react";
import FeedingScheduleModal from "@/components/FeedingScheludeModal";

export default function Index() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pet Feeding Control</Text>
      <View style={styles.containerButtons}>
        <Button
          iconType="calendar"
          label="Automatic feeding plan"
          onPress={showDatePicker}
        />
        <Button iconType="pets" label="Feed now" />
      </View>
      <FeedingScheduleModal visible={isDatePickerVisible} onClose={hideDatePicker} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D79CB',
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
