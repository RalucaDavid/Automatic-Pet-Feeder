import { StyleSheet, View, Pressable, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type ButtonProps = {
  label: string;
  iconType: 'calendar' | 'pets';
};

export default function Button({ label, iconType }: ButtonProps) {
    return (
      <View
        style={[
          styles.buttonContainer
        ]}>
        <Pressable
          style={[styles.button, { backgroundColor: '#fff' }]}
          onPress={() => alert('You pressed a button.')}>
          {iconType === 'calendar' && <AntDesign name="calendar" size={24} color="black" />}
          {iconType === 'pets' && <MaterialIcons name="pets" size={24} color="black" />}
          <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Baloo2_600SemiBold',
  },
});
