/* eslint-disable prettier/prettier */
import React, {PropsWithChildren, useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  // Vibration,
  View,
} from 'react-native';
// import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

import {trigger} from 'react-native-haptic-feedback';

// optional
const options = {
  enableVibrateFallback: false,
  ignoreAndroidSystemSettings: true,
};

// TS - Feature
type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

// Dice Component

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;

      default:
        setDiceImage(DiceOne);
        break;
    }

    // ReactNativeHapticFeedback.trigger('impactLight', options);
    trigger('impactMedium', options); // TODO
    // Vibration.vibrate(40);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Dice imageUrl={diceImage} />
        <Pressable onPress={() => rollDiceOnTap()}>
          <Text style={styles.rollDiceBtnText}>Roll The Dice</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    // backgroundColor: '#FFF2F2',
    minHeight: '100%',
    // backgroundColor: '#8EA7E9',
    // minHeight: '100%',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
export default App;
