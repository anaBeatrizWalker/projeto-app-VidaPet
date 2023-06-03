import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  appointContainer:{
    display: 'flex',
    flexDirection: 'col',
    alignItems: 'center',
    marginBottom: 25,
  },
  item: {
    display: 'flex',
    margin: 5,
    padding: 10,
    width: 330,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    borderRadius: 20,
    //backgroundColor: '#868499',
  },
  itemHeader: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 15,
  },
  itemTitle: {
    width: '70%',
    fontWeight: 'bold',  
    fontSize: 15,
  },
  itemPrice: {
    width: 'auto',
    color: '#F46036',
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#F46036',
    borderRadius: 14,
    paddingHorizontal: 10, paddingVertical: 5
  },
  itemInfos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1, borderRadius: 10, borderColor: '#F46036',
    backgroundColor: '#F46036',
  },
  itemText: {
    width: '90%',
    fontSize: 14,
    color: 'white',
    padding: 10,
  },
});

export {styles}