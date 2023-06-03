import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginHorizontal: 20,
    height: '100%',
  },
  paragraph: {
    marginHorizontal: 24,
    fontSize: 25,
    fontWeight: 'bold',
  },
  title: {
    marginTop: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'gray',
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
  scrollView: {
    maxHeight: 150,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    width: 300,
    margin: 5,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#274192',
  },
  itemTitleAndText: {
    display: 'flex',
    flexDirection: 'col',
    width: '80%',
  },
  itemTitle: {
    fontWeight: 'bold',  
    fontSize: 15,
    color: 'white',
    marginBottom: 20
  },
  itemPetName: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  },
  image: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 50,
  },
  textGroup: {
    width: 90,
    alignItems: 'center',
    backgroundColor: '#F3A400',
    borderWidth: 1,
    borderColor: '#F3A400',
    borderRadius: 10,
  },
  itemText: {
    fontSize: 14,
    margin: 3,
  },
  message: {
    marginLeft: 20,
    marginTop: 10,
    padding: 10,
    color: 'gray',
    fontSize: 12,
    fontWeight: 'bold',
  },
  categoryContainer:{
    display: 'flex',
    flexDirection: 'col',
    alignItems: 'center',
    marginBottom: 20,
  },
  categoryItem: {
    margin: 5,
    height: 80,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  categoryRow:{
    flexDirection: 'row',
  },
  itemsSubtitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  renderItem: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
});

export {styles}