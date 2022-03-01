import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import React from 'react';
import Searchbar from '../components/Searchbar';
import Stories from '../components/Stories/Stories';
import Watchlist from '../components/Watchlist/Watchlist';
import CarouselCards from '../components/Carousel/CarouselCards';
import { useNavigation } from '@react-navigation/native';

const Homescreen = () => {
  const navigation = useNavigation();
  //const screenHeight = Dimensions.get('window').height;
  return (
    <>
      {/* <View style={{flex:1, Height: "auto", maxHeight: screenHeight}}>
        <ScrollView showsVerticalScrollIndicator={false} style={{margin:0}} contentContainerStyle={{flexGrow:1}} >    */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          paddingLeft: 0,
          paddingTop: 50,
        }}
      >
        <Searchbar />
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.push('Profile')}
        >
          <Image
            style={{
              borderColor: '#11bbcc',
              borderWidth: 2,
              borderRadius: 50,
              bottom: -4,
              height: 40,
              width: 40,
            }}
            source={require('../assets/profileImage/profile2.png')}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{ flexDirection: 'column', paddingTop: 10, left: -5, top: -20 }}
      >
        <Stories />
        <View
          style={{
            borderBottomColor: '#ACA9A9',
            borderBottomWidth: 0.4,
            borderRadius: 50,
            width: 300,
            alignSelf: 'center',
            top: 10,
            left: 7,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'column',
          flex: 1,
          alignItems: 'center',
          top: 30,
        }}
      >
        <CarouselCards />
      </View>

      {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,top:-80}}>

        <Text>Home Screen</Text>

      </View>  */}
      <View style={{ top: -150 }}>
        <Watchlist></Watchlist>
      </View>

      {/* <View style={{ flex: 2,top:0}}>
      <Interestroute></Interestroute></View>  */}

      {/* </ScrollView>  
       </View>  */}
    </>
  );
};

export default Homescreen;
