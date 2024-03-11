import axios from 'axios';
import {store} from '../Store/Store';

export const Increment = () => {
  return {
    type: 'increment',
  };
};
export function Decrement() {
  return {
    type: 'decrement',
  };
}

export const apiData = async () => {
  let url = 'https://jsonplaceholder.typicode.com/posts/1';

  return new Promise(async (resolve, reject) => {
    await axios(url)
      .then(res => {
        store.dispatch(Increment());
        return resolve(res);
      })
      .catch(err => {
        console.log(err, '...');
        return reject(err);
      });
  });
};
