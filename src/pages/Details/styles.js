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
  formContainer: {
    flex: 1,
  },
  label: {
    margin: 5,
  },
  input: {
    height: 50,
    padding: 20,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: 'lightgray',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'col',
    width: '45%',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 50,
  }
});

export {styles};