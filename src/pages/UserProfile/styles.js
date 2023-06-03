import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  scrollview: {
    marginTop: 90,
    marginHorizontal: 20,
    height: '100%',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 50,
  },
  editButton: { 
    marginLeft: 10, 
    width: 25, 
    height: 25, 
    alignItems:'center', 
    justifyContent: 'center',
    backgroundColor: 'green', 
    borderRadius: 50,
  },
  user: {
    alignItems: 'center'
  },
  userName: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  title: {
    marginTop: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'gray',
  },
  petList: {
    marginTop: 10,
  },
  pet: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 8,
    padding: 8,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  petImage: {
    width: 60, 
    height: 60,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 50,
  },
  petInfos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  petName: {
    marginHorizontal: 20,
    fontWeight: 'bold',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  button: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#274192',
    borderRadius: 50,
  },
  top: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    paddingVertical: 175,
  },
  topSide: {
    flexDirection: "row",
    alignItems: "center",
  },
  topText: {
    fontSize: 24
  },
  switch: {
    marginLeft: 10,
    transform: [{ scale: 0.75 }],
  },
  "bg-dark": {
    backgroundColor: "#121213",
  },
  "bg-gray": {
    backgroundColor: '#2F2F2F',
  },
  "text-dark": {
    color: "#fff"
  },
  box: {
    padding: 16,
    borderColor: "#000",
    borderWidth: 1,
    backgroundColor: "#fff",
    flex: 1
  },
  boxText: {
    color: "#fff",
    fontSize: 22,
  },
});

export {styles}