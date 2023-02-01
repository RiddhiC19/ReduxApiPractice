import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { EditUsers, DeleteUsers } from '../redux/slices/usersSlice';

const User = ({ user }) => {
  const { id, title } = user;
  const dispatch = useDispatch();
  //console.log('u=>', props);
  // useEffect(() => {
  //   console.log('useEffect');
  //   dispatch(DeleteUsers());
  //   // dispatch(fetchUsers());
  // }, []);
  return (
    <>
      <div
        className="dataList"
        style={{ margin: '10px', background: 'lightgray' }}
      >
        <button onClick={() => dispatch(DeleteUsers(id))}>DELETE</button>
        <button>EDIT</button>
        <div>{id}</div>
        <div>{title}</div>
        {/* <div>{phone}</div> */}
      </div>
    </>
  );
};

export default User;
