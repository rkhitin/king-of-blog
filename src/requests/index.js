import axios from 'axios'

const createUrl = (postId = '') => `http://reduxblog.herokuapp.com/api/posts/${postId}?key=1q2w3e4r5t6y7u8i9o0p`

export const savePost = post =>
  new Promise(resolve => {
    const r = axios.post(createUrl(), post)
    setTimeout(() => {
      resolve(r)
    }, 3000)
  })

export const fetchPosts = () => axios.get(createUrl())

export const fetchPost = postId => axios.get(createUrl(postId))

export const removePost = postId => axios.delete(createUrl(postId))
