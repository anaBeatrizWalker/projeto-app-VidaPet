import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginLeft: 20,
    marginRight: 20,
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
  buttonsGroup: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 20
  },
  addNewButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    padding: 5,
    backgroundColor: 'black',
    borderRadius: 7,
    margin: 2,
  },
  pickerInput: {
    float: "right",
    border: 1,
    backgroundColor: "lightgray",
    borderRadius: 7,
    padding: 5,
    height: 31,
    margin: 2,
    width: 110,
  },
  appointContainer:{
    display: 'flex',
    flexDirection: 'col',
    alignItems: 'center',
    marginBottom: 25,
  },
  item: {
    display: 'flex',
    marginBottom: 15,
    padding: 10,
    width: 330,
    borderTopWidth: 1,
    borderColor: 'lightgray',
    // borderRadius: 15,
    //backgroundColor: '#274192',
  },
  itemHeader: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  itemTitle: {
    width: '70%',
    fontWeight: 'bold',  
    fontSize: 18,
  },
  itemPetName: {
    width: 'auto', 
    fontSize: 15,
    fontWeight: 'bold',
    color: '#274192',
    paddingHorizontal: 10, 
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#274192',
    borderRadius: 14,
  },
  itemInfos: {
    backgroundColor: '#274192',
    borderRadius: 8,
    fontSize: 15,
    padding: 10,
  },
  itemText: {
    fontSize: 14,
    color: 'white',
    marginBottom: 5,
  },
});

export {styles}