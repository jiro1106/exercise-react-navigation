import React, { useContext } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, FlatList, Image, Alert } from 'react-native';
import { Props } from '../navigation/props';
import { styles } from '../styles/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CartContext } from '../context_api/CartContext';

const products = [
  { id: '1', name: 'Nike Vomero 5', price: 160.99, image: require('../../assets/product_1.png'), quantity: 1 },
  { id: '2', name: 'Addidas Spezial', price: 119.49, image: require('../../assets/product_2.png'), quantity: 1 },
  { id: '3', name: 'New Balance 1906R', price: 160.99, image: require('../../assets/product_3.png'), quantity: 1 },
  { id: '4', name: 'Onitsuka Mexico 66 "Kill Bill"', price: 140.99, image: require('../../assets/product_4.png'), quantity: 1 },
  { id: '5', name: 'Nike Air Jordan 1 Low', price: 120.99, image: require('../../assets/product_5.png'), quantity: 1 },
  { id: '6', name: 'Asics Gel Kayano 14', price: 149.99, image: require('../../assets/product_6.png'), quantity: 1 },
  { id: '7', name: 'Nike Air Force 1', price: 110.00, image: require('../../assets/product_7.png'), quantity: 1 },
];

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <Text>Loading...</Text>;
  }

  const { addToCart } = cartContext;

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.headerContainer}>
        <Image
          style={styles.appIcon}
          source={require('../../assets/appLogo.png')}>
        </Image>
        <Text style={styles.mainTitle}>Shop</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Ionicons style={styles.cartButton} name="cart" size={32} color="#F1F1F1" />
        </TouchableOpacity>
      </SafeAreaView>

      <View style={styles.listContainer}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 30 }}
          showsVerticalScrollIndicator={false} 
          renderItem={({ item }) => (
            <View style={styles.productContainer}>
              <Image source={item.image} style={styles.productImage} />
              <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
              </View>
              <TouchableOpacity
                style={styles.addToCartButton}
                onPress={() => {
                  addToCart(item);
                  Alert.alert('Success', 'Item added to Cart!');
                }}
              >
                <MaterialIcons name="add-shopping-cart" size={18} color="#FFF" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
