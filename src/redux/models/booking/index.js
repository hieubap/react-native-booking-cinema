const routes = [
  {
    current: 1,
    routeName: 'Booking_Time',
    name: 'Chọn thời gian',
  },
  {
    current: 2,
    routeName: 'Booking_Seat',
    name: 'Chọn ghế',
  },
  {
    current: 3,
    routeName: 'Booking_Snack',
    name: 'Chọn đồ ăn',
  },
  {
    current: 4,
    routeName: 'Booking_Preview',
    name: 'Hóa đơn',
  },
];

export default {
  state: {currentPage: 0},
  reducers: {
    updateData(state, payload = {}) {
      return {...state, ...payload};
    },
  },
  effects: dispatch => ({
    next: (payload,{booking: {currentPage}})=> {
      if(currentPage < 3)
      dispatch.booking.updateData({currentPage:currentPage+1 })
    },
    back: (payload,{booking: {currentPage}})=> {
      if(currentPage >0)
      dispatch.booking.updateData({currentPage:currentPage-1 })
    },
  }),
};
