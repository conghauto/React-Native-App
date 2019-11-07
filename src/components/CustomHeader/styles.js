import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    height: height / 8,
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
  },
  search: {
    height: height / 22,
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 15,
  },
  titleStyle: {
    color: '#000',
    fontFamily: 'VINCHAND',
    fontSize: 20,
    fontWeight: '100',
  },
});

export default styles;
