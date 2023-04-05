/* eslint-disable prettier/prettier */
import React, {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

// TS - Feature
type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

// Dice Component

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image
        style={styles.diceImage}
        source={{
          uri: imageUrl,
        }}
      />
    </View>
  );
};

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Text>Roll The Dice</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
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
