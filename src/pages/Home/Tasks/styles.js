import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  renderItem: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  inputs: {
    padding: 14,
    width: 250,
    marginRight: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 15,
  },
  button: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#274192',
    borderRadius: 50,
  },
  itemButtons: {
    flexDirection: "row",
    alignItems: 'center',
  },
  itemCheckbox: {
    marginRight: 10
  },
  checkboxBase: {
    width: 18,
    height: 18,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: 'green',
  },
});

export {styles};