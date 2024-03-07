import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addCart} from './CartSlice';

const Redux = ({navigation}) => {
  const items = [
    {
      id: 1,
      name: 'puma',
      qty: 1,
      price: 'INR 999',
      image:
        'https://images.unsplash.com/photo-1545289414-1c3cb1c06238?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      name: 'adidas',
      qty: 1,
      price: 'INR 1999',
      image:
        'https://media.gettyimages.com/id/458068097/photo/adidas-superstar.jpg?s=612x612&w=0&k=20&c=cBTSduk5_pPHdQi-Qz_YgJrkceHM4Wk4oDww5O_vwaw=',
    },
    {
      id: 3,
      name: 'nike',
      qty: 1,
      price: 'INR 2999',
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/585e2cd2-4f2a-408c-a8ba-f89952cdf332/revolution-6-road-running-shoes-NC0P7k.png',
    },
    {
      id: 4,
      name: 'puma',
      qty: 1,
      price: 'INR 999',
      image:
        'https://images.unsplash.com/photo-1545289414-1c3cb1c06238?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      name: 'Redtape',
      price: 'INR 1999',
      qty: 1,
      image: 'https://m.media-amazon.com/images/I/61VdJ1I3r1L._SY695_.jpg',
    },
    {
      id: 6,
      name: 'Reebok',
      price: 'INR 1399',
      qty: 1,
      image:
        'https://5.imimg.com/data5/SELLER/Default/2020/10/GX/TP/MQ/14598328/1-500x500.jpeg',
    },
  ];
  const dispatch = useDispatch();
  const addeditem = useSelector(state => state);
  //console.log(addeditem);
  const addItem = item => {
    dispatch(addCart(item));
  };
  const Show = ({item, index}) => {
    //console.log(item);
    return (
      <View style={styles.itemview}>
        <View style={{marginLeft: 15, alignSelf: 'center', padding: 10}}>
          <Text style={styles.itemtxt}>{item.name}</Text>
          <Text style={styles.itemtxt}>{item.price}</Text>
          <TouchableOpacity
            onPress={() => addItem(item)}
            style={[
              styles.cart,
              {width: 100, alignItems: 'center', marginTop: 10},
            ]}>
            <Text>add to cart</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={{uri: item.image}}
          style={{width: 200, height: 150, borderRadius: 10}}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headertxt}>Redux Toolkit</Text>
        <TouchableOpacity
          style={styles.cart}
          onPress={() => navigation.navigate('Cart')}>
          <Image
            style={styles.cartimg}
            source={{
              uri: 'https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/shopping-bag-icon.png',
            }}
          />
          {addeditem.Cart1.length > 0 ? (
            <Text style={[styles.headertxt, {color: '#FFF'}]}>
              {addeditem.Cart1.length}
            </Text>
          ) : null}
        </TouchableOpacity>
      </View>
      <FlatList data={items} renderItem={Show} />
    </View>
  );
};

export default Redux;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 70,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
  },
  headertxt: {
    color: '#37b396',
    fontSize: 17,
    fontWeight: '800',
    paddingLeft: 8,
    textAlign: 'center',
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
  cart: {
    padding: 10,
    backgroundColor: '#37b396',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cartimg: {
    height: 18,
    width: 16,
    alignSelf: 'center',
    marginLeft: 10,
    marginTop: 6,
  },
});
