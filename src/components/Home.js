import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import './Home.css'

export const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async() => {
      const data = await getDocs(collection(db, 'posts'));
      // console.log(data);
      // console.log(data.docs);
      // console.log(data.docs.map((doc) => ({doc})));
      // console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [])

  return (
    <div className='homePage'>
      {postList.map((post) => (
        <div className="postContents" key={post.id}>
          <div className="postHeader">
            <h1>{post.title}</h1>
          </div>
          <div className="postTextContainer">
            {post.postsText}
          </div>
          <div className="nameAndDeleteButton">
            <h3>@{post.author.username}</h3>
            <button>削除</button>
          </div>
        </div>
      ))}
    </div>
  )
}
