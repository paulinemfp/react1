import { posts as data } from "../data/posts";
import * as utils from "../utils.js";

//private
let posts = [...data];

function getPosts() {
  //get all posts
  return posts;
}

export function getPostsByUser(userId) {
  console.log("getPostsByUser");
  //get all posts by userId
  // var getPosts = posts.filter(post => post.userId === userId);
  return posts.filter(post => post.userId === userId);
}

export function getPostById(id) {
  console.log("getPostById");
  //get a single post by id
  // var getPost = posts.filter(post => post.id === id);
  return posts.find(post => post.id === id);
}

export function addPost(post) {
  console.log("addPost");
  //add new post to BEGINNING of posts array
  // use generateId function and pass posts array as the argument to generate a unique id.
  // var postId = utils.generateId(posts);
  // var newPost = post;
  post.id = utils.generateId(posts);
  posts = [post, ...posts] ;
  console.log(posts[0]);
}

export function updatePostTitle(id, title) {
  console.log("updatePostTitle");
  //update post title
  // var updatePost = getPostById(id);
  // updatePost.title = title;
  posts = posts.map((post) => {
    if (post.id === id) {
      post.title = title;
    }
    return post;
  })
}

export function updatePostBody(id, body) {
  console.log("updatePostBody");
  //update post body
  // var updatePost = getPostById(id);
  // updatePost.body = body;
  posts = posts.map((post) => {
    if (post.id === id) {
      post.body = body;
    }
    return post;
  })
}

export function updatePost(id, post) {
  console.log("updatePost");
  //update post title and or body (imagine a form where user is allowed to edit both title and post but may also choose to only edit one of them)
  // var updatePost = getPostById(id);
  // // updatePost.title = post.title;
  // // updatePost.body = post.body;
  // updatePost = {...updatePost, post};
  posts = posts.map((originalPost) => {
    if (originalPost.id===id) {
      originalPost = {...originalPost, ...post };
    }
    return originalPost;
  })
}

export function deletePostBy(id) {
  console.log("deletePostBy");
  //delete post by id
  posts = posts.filter(post => post.id !== id);
}

export function deletePostsByUserId(userId) {
  console.log("deletePostsByUserId");
  //delete all posts of a user by given userId
  posts = posts.filter(post => post.userId !== userId);
}
