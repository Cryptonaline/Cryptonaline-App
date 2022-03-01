import { Dimensions } from 'react-native';
export const SLIDER_WIDTH = Dimensions.get('window').width + 110;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export default {
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 10,
    left: 15,
    paddingRight: 10,
    width: ITEM_WIDTH,
    height: 99.5625,
    paddingBottom: 40,
    shadowColor: '#000',
    paddingTop: 40,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 100,
    top: -35,
    left: 8,
  },
  image2: {
    width: 40,
    height: 40,
    borderRadius: 100,
    top: -25,
    left: 8,
  },
  header: {
    color: '#222',
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 2,
  },
  body: {
    color: '#222',
    fontSize: 10,
    paddingLeft: 20,
    //paddingLeft: 20,
    //paddingRight: 20,
    left: -15,
    right: -15,
    fontWeight: 'bold',
  },
  watchlist: {
    color: 'black',
    fontSize: 16,

    fontWeight: 'bold',
  },
  viewall: {
    color: 'gray',
    fontSize: 12,

    right: 5,
    top: 4,
    fontWeight: 'bold',
  },
};
