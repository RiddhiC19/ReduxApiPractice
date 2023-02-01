import { createSlice, current } from '@reduxjs/toolkit';
import { api } from '../../api';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    //error: false,
    errorMsg: '',
  },
  reducers: {
    startLoading: (state, action) => {
      state.isLoading = true;
    },
    hasError: (state, action) => {
      state.errorMsg = action.payload;
      state.isLoading = false;
    },
    usersSuccess: (state, action) => {
      state.users = action.payload;
      console.log('datatatata==>', state);
      state.isLoading = false;
    },
    // deleteTodo(state, action) {
    //   const data = action.payload;
    //   let removedArr = state.todoList.filter((item) => item.id !== data);
    //   state.todoList = [...removedArr];
    // },
    deleteSuccess: (state, action) => {
      console.log('state===============', state, action.payload);
      console.log('current state===============', current(state));
      // let removedArr = state.users.filter((item) => item.id !== action.payload);
      // state.users = action.payload;
      state.isLoading = false;
    },
  },
});

export default usersSlice.reducer;

//Actions
const { usersSuccess, startLoading, hasError, deleteSuccess } =
  usersSlice.actions;

export const fetchUsers = () => async (dispatch) => {
  //console.log('==========>111');
  dispatch(startLoading());
  try {
    await api.get('/posts').then((response) => {
      dispatch(usersSuccess(response.data));
      //console.log('resp==>', response);
    });
  } catch (state) {
    dispatch(hasError('error'));
    //console.log('->', state);
    return console.error(state);
  }
};

export const EditUsers = () => async (dispatch) => {
  //console.log('==========>111');
  dispatch(startLoading());
  try {
    await api.put('/posts/${id}').then((response) => {
      // dispatch(usersSuccess(response.data));
      //console.log('resp==>', response);
    });
  } catch (state) {
    dispatch(hasError('error'));
    //console.log('->', state);
    return console.error(state);
  }
};

export const DeleteUsers = (id) => async (dispatch) => {
  console.log('==========>111', id);
  dispatch(startLoading());
  try {
    await api.delete('/posts/${id}').then((response) => {
      console.log('DEEE', response);
      if (response.status === 200) {
        dispatch(deleteSuccess(id));
        // dispatch(fetchUsers());
      }
      //console.log('resp==>', response);
    });
  } catch (state) {
    dispatch(hasError('error'));
    //console.log('->', state);
    return console.error(state);
  }
};
