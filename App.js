import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ProductsScreen from './src/screens/ProductScreen';
import ProductsDetailsScreen from './src/screens/ProductDetailsScreen';
import ShoppingCart from './src/screens/ShoppingCart';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductsScreen /> */}
      {/* <ProductsDetailsScreen /> */}
      <ShoppingCart/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  itemContainer: {
    width: '50%',
    padding: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  }
});
