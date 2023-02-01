import axios from 'axios';
import React from 'react';

import { useState, useEffect } from 'react';

const Home = () => {
  //using promises
  //only run when application run first time
  const [post, setPost] = useState([]);
  const [err, setErr] = useState('');
  // useEffect(() => {
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/posts/`)
  //     .then((res) => setPost(res.data))
  //     .catch((error) => setErr(error.message));
  // }, []);
  const getApiData = async () => {
    try {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/'
      );
      setPost(res.data);
    } catch (error) {
      setErr(error.message);
    }
  };
  //using async await
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <div> {err ? <h2>{err}</h2> : null}</div>

      {/* {err == '' && <h2>{err}</h2>} */}
      <div
        className=" "
        style={{
          display: 'FLEX',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {post.slice(0, 9).map((item) => {
          const { id, title, body } = item;
          return (
            <div
              className=""
              style={{
                border: '1px solid gray',
                margin: '10px',
                flexBasis: '25%',
              }}
              key={id}
            >
              <div
                className=""
                style={{
                  color: 'red',
                  textAlign: 'center',
                  fontSize: '20px',
                  background: 'lightgray',
                }}
              >
                {item.title.slice(0, 15).toUpperCase()}
              </div>
              <div className="" style={{ textAlign: 'center' }}>
                {body}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
