import { users as data } from "../data/users";
import * as utils from "../utils.js";

//private
let users = [...data];

export function getAllUsers() {
  // get all users
  return [...users];
}

function getUserById(id) {
  //get single user by id
  return users.find((user) => user.id === id);
}

export function updateUser(id, userInfo) {
  //update user (userInfo is an object which can optionally contain properties of a user)
  users = users.map((user) => {
    if (user.id === id) {
      return {
        ...user,
        ...userInfo,
      };
    }

    return user;
  });
}

export function addUser(userInfo) {
  console.log("addUser");
  // add user (userInfo is an object which can optionally contain properties of a user)
  // use generateId function and pass users array as the argument to generate a unique id.
  userInfo.id = utils.generateId(users);
  users = [userInfo, ...users];
  console.log(users[0])

}
