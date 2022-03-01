import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const Stories = () => {
  const navigation = useNavigation();

  const storyInfo = [
   
    {
      id: 0,
      name: 'Ram_Charan',
      image: require('../../storage/images/profile1.jpg'),
    },
    {
      id: 0,
      name: 'Tom',
      image: require('../../storage/images/profile2.jpg'),
    },
    {
      id: 0,
      name: 'The_Groot',
      image: require('../../storage/images/profile3.jpg'),
    },
    ,
    {
      id: 0,
      name: 'loverland',
      image: require('../../storage/images/profile4.jpg'),
    },
    ,
    {
      id: 0,
      name: 'chillhouse',
      image: require('../../storage/images/profile5.jpg'),
    },
  ];

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 20}}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            activeOpacity={1}
            key={index}
            onPress={() =>
              navigation.push('Status', {
                name: data.name,
                image: data.image,
              })
            }>
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 8,
                position: 'relative',
              }}>
              <View
                style={{
                  width: 88,
                  height: 88,
                  backgroundColor: 'white',
                  borderWidth: 0,
                  borderRadius: 100,
                  borderColor: 'transparent',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={data.image}
                  style={{
                    resizeMode: 'cover',
                    width: '92%',
                    height: '92%',
                    borderRadius: 100,
                    backgroundColor: 'transparent',
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 10,
                  opacity: data.id == 0.5,
                }}>
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;
