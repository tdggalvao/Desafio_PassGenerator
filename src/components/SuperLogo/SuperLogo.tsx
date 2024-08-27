import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './SuperLogoStyles';
import superLogo from "../../../assets/superman.png";

export function SuperLogo() {
  return (
    <>
      <Text style={styles.title}>
        PASSWORD
      </Text>
      <Image
        source={superLogo}
        style={{
          resizeMode:'contain',
          height:180
        }}
      />
    </>
  );
}