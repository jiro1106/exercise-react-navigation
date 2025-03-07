import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
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
    marginLeft: 55,
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
  emptyCartText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 2,
    height: 90,
  },
  productImage: {
    width: 70,
    height: 70,
    backgroundColor: '#F8F8F8',
    borderRadius: 15,
  },
  details: {
    flex: 1,
    marginLeft: 15,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkoutContainer: {
    position: 'absolute',
    bottom: 0,
    height:100,
    width: '100%',
    backgroundColor: '#FFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#DDD',
    marginBottom:0,
  },
  checkoutButton: {
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#DA0000',
  },
  checkoutText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
