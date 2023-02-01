import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/slices/usersSlice';
import User from './User';

const Todo = () => {
  const dispatch = useDispatch();
  //extract data from our store use useSelector
  //we can use useSelector hook multiple time in single function
  const { users, isLoading, error, errorMsg } = useSelector(
    (state) => state.Users
  );
  console.log('===>Users data', users);
  useEffect(() => {
    //console.log('useEffect');
    dispatch(fetchUsers());
    // dispatch(fetchUsers());
  }, []);

  return (
    <>
      <div className="dataWrapper">
        {errorMsg ? <div>{errorMsg}</div> : null}
        {!isLoading ? (
          <div>
            {users.map((item) => {
              return <User user={item} />;
              //return <div>{item}</div>;
            })}
          </div>
        ) : (
          <div>Loading....</div>
        )}
      </div>
    </>
  );
};

export default Todo;
