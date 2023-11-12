import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
import { removeItem } from '../utils/AsyncStorage';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation();

  const [loaded] = useFonts({
    SometypeMono: require('../assets/fonts/SometypeMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const handleReset = async () => {
    await removeItem('onboarded');
    navigation.push('Onboarding');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Image source={require('../assets/images/growYourBusines_3.png')} style={styles.image} />
      </View>
      <Text style={styles.text}>Home Page</Text>
      <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
        <Text style={styles.btnText}>Reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'SometypeMono',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 'auto',
  },
  view: {
    width: width,
    height: width,
    fontFamily: 'SometypeMono',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: width * 0.09,
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: '#000',
    padding: 10,
  },
  btnText: {
    color: '#fff',
  },
});
