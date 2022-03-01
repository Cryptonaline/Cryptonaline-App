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
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/Carouselcarditems.style';

export const SLIDER_WIDTH = Dimensions.get('window').width + 5;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

//const [bookmarked, setBookmarked] = useState(false);
const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{ uri: item.imgUrl }} style={styles.imageBackground} />

      <TouchableOpacity
        style={styles.opacitybookmark}
        activeOpacity="1"
        onPress={() => {
          alert('bookmarked');
        }}
      >
        <Text>
          <Ionicons style={styles.bookmark} name="bookmark-outline" size={20} />
        </Text>
      </TouchableOpacity>

      {/* <Text style={styles.header}>{item.title}</Text>  */}
      <Text style={styles.body}>
        {item.body}
        <Text style={{ color: 'gray' }}>— Here’s what we know so far</Text>
      </Text>
      <Text style={styles.form}>
        {item.form} | {item.date}
      </Text>
      <Text
        style={styles.TextStyle}
        onPress={() => Linking.openURL('https://economictimes.indiatimes.com/')}
      >
        Read Full Article
      </Text>
    </View>
  );
};

export default CarouselCardItem;
