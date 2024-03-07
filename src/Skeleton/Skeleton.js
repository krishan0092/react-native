import {View, Text, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import {WaveIndicator} from 'react-native-indicators';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const Skeleton = () => {
  useEffect(() => {
    apiData();
  }, []);
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const apiData = async () => {
    setLoader(true);
    setTimeout(() => {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
          setLoader(false);
          console.log(data);
          setProducts(data);
        })
        .catch(() => {
          setLoader(false);
        });
    }, 3000);
  };
  const show = ({item, index}) => {
    return (
      <View style={{flexDirection: 'row', margin: 20}}>
        <Image style={{width: 100, height: 100}} source={{uri: item.image}} />
        <View style={{margin: 15}}>
          <Text>price: {item.price} $</Text>
          <Text>item des.. {item.title}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      {loader ? (
        <View style={{marginTop: 20}}>
          <FlatList
            data={[1, 1, 1, 1, 1, 1, 1]}
            renderItem={({item}) => {
              return (
                <View style={{flex: 1, margin: 20, flexDirection: 'row'}}>
                  <ShimmerPlaceholder
                    style={{
                      height: 100,
                      width: 100,
                      backgroundColor: 'grey',
                      opacity: 0.5,
                      margin: 10,
                    }}></ShimmerPlaceholder>
                  <View style={{flex: 1}}>
                    <ShimmerPlaceholder
                      style={{
                        height: 20,
                        width: '20%',
                        backgroundColor: 'grey',
                        opacity: 0.5,
                        margin: 10,
                      }}></ShimmerPlaceholder>
                    <ShimmerPlaceholder
                      style={{
                        height: 20,
                        width: '70%',
                        backgroundColor: 'grey',
                        opacity: 0.5,
                        margin: 10,
                      }}></ShimmerPlaceholder>
                  </View>
                </View>
              );
            }}
          />
        </View>
      ) : (
        <FlatList data={products} renderItem={show} />
      )}
    </View>
  );
};

export default Skeleton;
