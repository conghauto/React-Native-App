import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    height: height / 10,
    padding: 10,
    paddingTop: 5,
    backgroundColor: '#34B089',
    justifyContent: 'space-around',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 2,
  },
  logo: {
    width: 32,
    height: 32,
    marginLeft: 0,
  },
  search: {
    height: height / 18,
    backgroundColor: '#c38224',
    width: (width * 2) / 3,
    paddingLeft: 10,
    paddingVertical: 0,
    borderRadius: 5,
  },
  containerIcon: {
    flexDirection: 'row',
    marginLeft: 20,
    justifyContent: 'space-between',
    flex: 4,
  },
});

export default styles;
