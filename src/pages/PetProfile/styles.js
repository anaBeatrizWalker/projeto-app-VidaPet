import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 30,
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
  pet: {
    alignItems: 'center'
  },
  petDetails: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    margin: 8,
    color: 'lightgray',
  },
  detail: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderColor: '#FCFCFC',
  },
  detailRow: {
    width: 25, 
    height: 25, 
    marginLeft: 20,
    alignItems:'center', 
    justifyContent: 'center',
    borderRadius: 50, 
  },
  detailText: {
    marginLeft: 5,
  },
  petImage: {
    width: 80,
    height: 80,
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 20,
  },
  petInfos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  petName: {
    marginHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 17,
  },
  moreDetail: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: '#FCFCFC',
  },
  titleDetail: {
    marginTop: 5,
    fontWeight: 'lighter',
    fontSize: 12,
  },
  infoDetail: {
    marginTop: 5,
    marginHorizontal: 10,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export {styles}