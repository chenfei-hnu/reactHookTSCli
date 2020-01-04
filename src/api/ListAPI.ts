import axios from 'axios';
export function getReqquestList() {
  return new Promise((resolve, reject) => {
    try {
      axios.get(`xxxx`).then((res) => {
        let list = res.data.list;
        resolve(list);
      }, (error) => {
        console.log(error);
        reject();
      })
    } catch (error) {
      console.log(error);
      reject();
    }
  });
}
