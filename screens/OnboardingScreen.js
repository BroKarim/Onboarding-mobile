import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../utils/AsyncStorage';

const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate('Home');
    setItem('onboarded', '1');
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone} //jika onboarding di skip atau done make fungsi handleDone akan dijanlankan
        onSkip={handleDone}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <View style={styles.view}>
                <Image source={require('../assets/images/getYourIdea_2.png')} style={styles.image} />
              </View>
            ),
            title: 'Generate Ideas',
            subtitle: 'Discover and create new ideas for your projects.',
          },
          {
            backgroundColor: '#fff',
            image: (
              <View style={styles.view}>
                <Image source={require('../assets/images/growYourBusines_3.png')} style={styles.image} />
              </View>
            ),
            title: 'Stay Inspired',
            subtitle: 'Get inspired and never run out of creative ideas',
          },
          {
            backgroundColor: '#fff',
            image: (
              <View style={styles.view}>
                <Image source={require('../assets/images/setYourGoal_1.png')} style={styles.image} />
              </View>
            ),
            title: 'Achieve Your Goals',
            subtitle: 'Turn your ideas into reality and achieve your goals',
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  view: {
    width: width,
    height: width,
  },
  image:{
    width: '100%',
    height: '100%',
  },
  doneButton: {
    padding: 20,
  },
});
