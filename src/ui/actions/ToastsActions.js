import store from '../store.js';
import types  from '../constants/action-types';

const add = (type, content, duration = 3000) => {
  const _id = Date.now();
  const toast = { _id, type, content };

  store.dispatch({
    type   : types.APP_TOAST_ADD,
    toast,
  });

  setTimeout(() => {
    store.dispatch({
      type : types.APP_TOAST_REMOVE,
      _id,
    });
  }, duration);
};


export default {
  add,
};
