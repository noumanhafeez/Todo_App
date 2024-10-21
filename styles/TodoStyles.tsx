// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical:8,
    borderRadius: 6,
    marginVertical:24,
    alignItems: "center"
  },
  buttonText: {
    color: '#fff',
    fontWeight: "bold",
    fontSize: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: "#1e90ff",
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5
  },
  item: {
    borderWidth: 2,
    backgroundColor: "#1e90ff",
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom:12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "grey",
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 1
  },
  itemText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "800",
    flex: 1
  }
});
