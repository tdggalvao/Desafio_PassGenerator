import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar} from 'expo-status-bar';
import styles from './Style';
import { SuperButton} from '../../components/SuperButton/SuperButton'
import { SuperLogo} from '../../components/SuperLogo/SuperLogo'
import { SuperTextInput} from '../../components/SuperTextInput/SuperTextInput'

export function Home() {
  return (
    <View style={styles.appContainer}>

        <View style={styles.logoContainer}>
            <SuperLogo/>
        </View>

        <View style={styles.inputContainer}>
            <SuperButton/>
        </View>
        <StatusBar style="light" />
    </View>
  )
}