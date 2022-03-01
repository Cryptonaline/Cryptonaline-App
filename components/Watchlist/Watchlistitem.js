/* eslint-disable react/prop-types */
import { React, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import styles from '../../styles/Watchlistitem.style';

export const SLIDER_WIDTH = Dimensions.get('window').width + 0;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const Watchlistitem = ({ item, index }) => {
  return (
    <>
      <Text style={styles.watchlist}>Watchlist</Text>
      <View style={styles.container} key={index}>
        {/* <Image
        source={{ uri: item.imgUrl }}
        style={styles.imageBackground} /> */}
      </View>
    </>
  );
};

export default Watchlistitem;
