import React, { useContext } from 'react';
import { View, SafeAreaView, Text, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from '../styles/Checkout';
import { RootStackParamList } from '../navigation/RootStackParamList';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CartContext } from '../context_api/CartContext'; 

type CheckoutScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Checkout'>;
type CheckoutScreenRouteProp = RouteProp<RootStackParamList, 'Checkout'>;

const CheckoutScreen: React.FC = () => {
  const navigation = useNavigation<CheckoutScreenNavigationProp>();
  const route = useRoute<CheckoutScreenRouteProp>();
  const { cart } = route.params;
  const cartContext = useContext(CartContext); 

  if (!cartContext) return null; 
  const { clearCart } = cartContext;

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    Alert.alert('Checkout successful', 'Thank you for your purchase!', [
      {
        text: 'OK',
        onPress: () => {
          clearCart(); //clear cart after checkout
          navigation.navigate('Home'); //back to home
        },
      },
    ]);
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={32} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
      </SafeAreaView>
      <View style={styles.cartContainer}>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>
                  ${item.price.toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.checkoutContainer}>
        <Text style={styles.total}>Total: ${totalPrice.toFixed(2)}</Text>
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutScreen;
