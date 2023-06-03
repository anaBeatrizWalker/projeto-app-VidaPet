import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 20,
    height: '100%',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 25,
    fontWeight: 'bold',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonGroup: {
  },
  button: {
    width: 30,
    height: 30,
    marginRight: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#274192',
    borderRadius: 50,
  },
});

export {styles}