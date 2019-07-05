import axios from 'axios'

const createUrl = (postId = '') => `http://reduxblog.herokuapp.com/api/posts/${postId}?key=1q2w3e4r5t6y7u8i9o0p`

export const savePosts = posts => axios.post(createUrl(), posts)

export const fetchPosts = () => axios.get(createUrl())

export const fetchPost = postId => axios.get(createUrl(postId))

export const deletePost = postId => axios.delete(createUrl(postId))
