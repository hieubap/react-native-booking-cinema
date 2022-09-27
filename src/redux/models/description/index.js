import phimProvider from '../../../data-access/phim-provider';

export default {
  state: {data: {}},
  reducers: {
    updateData(state, payload = {}) {
      return {...state, ...payload};
    },
  },
  effects: dispatch => ({
    getDescription: id => {
      phimProvider.getById(id).then(res => {
        dispatch.description.updateData({
          data: res.data,
        });
      });
    },
  }),
};
