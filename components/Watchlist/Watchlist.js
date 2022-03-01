/* eslint-disable react/prop-types */
import { React, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/Watchlist.style';

export const SLIDER_WIDTH = Dimensions.get('window').width + 110;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const Watchlist = ({ item, index }) => {
  const navigation = useNavigation();

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 15,
          paddingRight: 15,
          top: -12,
        }}
      >
        <Text style={styles.watchlist}>Watchlist</Text>
        <TouchableOpacity onPress={() => navigation.push('Viewall')}>
          <Text style={styles.viewall}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container} key={index}>
        <Image
          style={styles.image}
          source={require('../../assets/watchlistImage/bitcoin.png')}
        ></Image>
        <View
          style={{
            borderBottomColor: '#ACA9A9',
            borderBottomWidth: 0.4,
            borderRadius: 50,
            width: 300,
            alignSelf: 'center',
            top: -30,
            left: 0,
          }}
        />
        <Image
          style={styles.image2}
          source={require('../../assets/watchlistImage/solana.png')}
        ></Image>
      </View>
    </>
  );
};

export default Watchlist;
