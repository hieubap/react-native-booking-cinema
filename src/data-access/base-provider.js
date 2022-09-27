import {client} from './request';

export default API => ({
  search: () => {
    return new Promise((resolve, reject) => {
      client.get(API).then(res => {
        if (res.data && res.data.code === 0) resolve(res.data);
        else reject(res.data);
      });
    });
  },
  getById: id => {
    return new Promise((resolve, reject) => {
      client.get(API + '/' + id).then(res => {
        if (res.data && res.data.code === 0) resolve(res.data);
        else reject(res.data);
      });
    });
  },
});
