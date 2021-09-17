import {StyleSheet} from 'react-native'

export const globalStyles = StyleSheet.create({container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    marginVertical: 10,
    width: 300,
    height: 300
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  body: {
    fontSize: 13,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    color: 'black',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center',
  },})