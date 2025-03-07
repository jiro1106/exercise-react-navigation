import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DA0000',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  backButton: {
    marginLeft: 5,
    padding: 15,
  },
  headerTitle: {
    fontSize: 28,
    flex: 1,
    marginLeft:20,
    marginTop:5,
    fontWeight: '600',
    color: '#F1F1F1',
    paddingBottom: 10,
  },
  cartContainer: {
    marginTop:15,
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 16,
    paddingBottom: 80, // Prevents items from being cut off by the checkout button
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#F8F8F8',
  },
  details: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: 'gray',
  },
  total: {
    color:"green",
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 15,
  },
  checkoutContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#DDD',
    marginBottom:0,
  },
  checkoutButton: {
    backgroundColor: '#DA0000',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom:20,
  },
  checkoutText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});