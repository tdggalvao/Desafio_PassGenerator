import React from 'react';
import {TextInput } from 'react-native';

import { styles } from './SuperTextInputStyles';

interface SuperTextInputProps{
  pass:string
}

export function SuperTextInput(props : SuperTextInputProps) {
  return (
      <TextInput
        style={styles.inputer}
        placeholder='pass'
        value={props.pass}
      />
  );
}