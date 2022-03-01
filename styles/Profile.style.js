import { Dimensions } from 'react-native';
export const SLIDER_WIDTH = Dimensions.get('window').width + 5;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export default {
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 75.6375,
    height: 77.115,
    paddingBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  interestcontainer: {
    backgroundColor: '#FAE8F0',
    borderRadius: 25.064099999999996,
    width: 85.6375,
    height: 25.845,
    alignContent: 'center',
    alignItems: 'center',
  },
  bottomcontainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: ITEM_WIDTH,
    height: 99.5625,
    paddingBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  profilecontainer: {
    borderWidth: 6,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: '#df71a0',
    borderRadius: 100,
    height: 150,
    width: 150,

    shadowColor: 'red',
    shadowOffset: {
      width: 100,
      height: 100,
    },
    shadowOpacity: 0.1,
    shadowRadius: 100.0,

    elevation: 24,
  },
};
