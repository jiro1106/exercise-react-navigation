import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { styles } from '../styles/ShoppingCartScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CartContext } from '../context_api/CartContext';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootStackParamList';

type ShoppingCartScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cart'>;

const ShoppingCartScreen: React.FC = () => {
  const navigation = useNavigation<ShoppingCartScreenNavigationProp>();
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  const { cart, addToCart, removeFromCart } = cartContext;
  const isCartEmpty = cart.length === 0;

  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <SafeAreaView style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={32} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Shopping Cart</Text>
      </SafeAreaView>

      {/* Cart Content */}
      <View style={styles.cartContainer}>
        {isCartEmpty ? (
          <Text style={styles.emptyCartText}>Your cart is empty.</Text>
        ) : (
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Image source={item.image} style={styles.productImage} />
                <View style={styles.details}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productPrice}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </Text>
                </View>

                {/* Buttons to modify quantity */}
                <View style={styles.quantityContainer}>
                  <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                    <Ionicons name="remove-circle" size={30} color="red" />
                  </TouchableOpacity>

                  <Text style={styles.quantity}>{item.quantity}</Text>

                  <TouchableOpacity onPress={() => addToCart(item)}>
                    <Ionicons name="add-circle" size={30} color="green" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        )}
      </View>

      <View style={styles.checkoutContainer}>
        <TouchableOpacity
          style={[
            styles.checkoutButton,
            cart.length === 0 && { backgroundColor: 'gray', opacity: 0.6 }, // dim when empty
          ]}
          disabled={cart.length === 0} 
          onPress={() => navigation.navigate('Checkout', { cart })} 
        >
          <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShoppingCartScreen;
