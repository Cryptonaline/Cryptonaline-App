/* eslint-disable react/prop-types */
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

const Searchbar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <Image
        style={{ marginLeft: '3%' }}
        source={require('../assets/searchIcon.png')}
      />
      <TextInput
        style={styles.searchBar}
        onChangeText={onChangeText}
        value={value}
        placeholder={
          props.placeholder
            ? props.placeholder
            : 'search by coin,article,nfts.... '
        }
      />
      {props.editing ? (
        <TouchableOpacity onPress={onClear} style={{ marginRight: '7%' }}>
          <Text style={{ color: '#0078b0' }}>Clear</Text>
        </TouchableOpacity>
      ) : null}
      {loading ? (
        <ActivityIndicator
          style={{ marginRight: '5%' }}
          size={'small'}
          animating={true}
          color={'#0078b0'}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 12,
    fontWeight: '300',
    backgroundColor: '#fff',
    borderRadius: 100,
  },
  searchBarContainer: {
    backgroundColor: '#fff',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 50,
    alignSelf: 'center',
    marginTop: 5,
    left: 0,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 5.0,

    elevation: 7,
    // background color must be set
    // invisible color
  },
});
export default Searchbar;
