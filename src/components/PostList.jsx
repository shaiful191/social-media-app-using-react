import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { PostList as PostListData } from '../store/post-list-store';
import WelcomeMsg from './WelcomeMsg';
import LoadingSpinner from './LoadingSpinner';

const PostList = () => {

  const { postList, addInitialPost } = useContext(PostListData);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://dummyjson.com/posts', { signal })
      .then(res => res.json())
      .then((data) => {
        // console.log(data.posts);
        addInitialPost(data.posts);
        setFetching(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
    return () => {
      //  console.log("Cleaning up UseEffect.");
      controller.abort();
    }
  }, []);



  return (
    <>
      {/* Loading state */}
      {fetching && <LoadingSpinner />}

      {!fetching && postList.length === 0 && <WelcomeMsg />}
      {!fetching &&
        postList.map((post) => (
          <Post key={post.id} post={post} />
        ))
      }
    </>
  )
}

export default PostList