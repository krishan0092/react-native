import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addCart, deleteCartItem, removeCart} from './CartSlice';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state?.Cart1);

  const itemShow = ({item}) => {
    return (
      <View style={styles.itemview}>
        <View style={{marginLeft: 15, alignSelf: 'center', padding: 10}}>
          <Text style={styles.itemtxt}>{item.name}</Text>
          <Text style={styles.itemtxt}>{item.price}</Text>
          <View style={{flexDirection: 'row'}}>
            {item.qty == 0 ? null : (
              <TouchableOpacity
                onPress={() =>
                  item.qty > 1
                    ? dispatch(removeCart(item))
                    : dispatch(deleteCartItem(item.id))
                }
                style={[
                  styles.cart,
                  {alignItems: 'center', marginTop: 10, marginLeft: 5},
                ]}>
                <Text style={{fontSize: 28, fontWeight: 'bold'}}>-</Text>
              </TouchableOpacity>
            )}
            {item.qty == 0 ? null : (
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: 'black',
                  marginTop: 10,
                  marginLeft: 5,
                }}>
                {item.qty}
              </Text>
            )}
            {item.qty == 0 ? null : (
              <TouchableOpacity
                onPress={() => dispatch(addCart(item))}
                style={[
                  styles.cart,
                  {alignItems: 'center', marginTop: 10, marginLeft: 5},
                ]}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>+</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <Image
          source={{uri: item.image}}
          style={{width: 200, height: 150, borderRadius: 10}}
        />
      </View>
    );
  };
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headertxt}>Your Cart Items</Text>
      </View>
      {items.length > 0 ? (
        <FlatList
          data={items}
          renderItem={itemShow}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={styles.empty}>
          <Text style={styles.emptytxt}>Now your cart empty</Text>

          <Text
            onPress={() => navigation.navigate('Redux')}
            style={[
              styles.emptytxt,
              {textDecorationLine: 'underline', color: '#37b396'},
            ]}>
            Shop more...
          </Text>
        </View>
      )}
    </View>
  );
};

export default Cart;
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  header: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },   
  cart: {
    padding: 8,
    height: 50,
    backgroundColor: '#37b396',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headertxt: {
    color: '#37b396',
    fontSize: 20,
    fontWeight: '800',
  },
  itemview: {
    height: 150,
    width: '94%',
    borderRadius: 20,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemtxt: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
  },
  empty: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  emptytxt: {
    fontSize: 25,
    fontWeight: '400',
    color: '#000',
  },
});
