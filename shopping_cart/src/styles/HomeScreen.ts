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
  appIcon:{
    marginLeft:10,
    width:50,
    height:50,
  },
  mainTitle: {
    fontSize: 28,
    flex: 1,
    textAlign: 'left',
    marginLeft: 5,
    fontWeight: '600',
    color: '#F1F1F1',
  },
  cartButton: {
    padding: 15,
    marginRight:5,
  },
  listContainer: {
    marginTop:20,
    flex: 1, 
    paddingBottom: 20, 
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    marginVertical: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: 350,
    alignSelf: 'center',
    justifyContent: 'space-between', 
  },
  productImage: {
    width: 120,
    height: 100,
    marginRight: 10,
    backgroundColor:'#F8F8F8',
    borderRadius:15,
  },
  productDetails: {
    marginLeft:5,
    flex: 1, 
    justifyContent: 'center',
    gap:5,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#666',
  },
  addToCartButton: {
    backgroundColor: '#DA0000',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginLeft: 10, 
    marginRight:10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
