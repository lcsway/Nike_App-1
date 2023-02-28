import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ProductsScreen from './src/screens/ProductScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductsScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
