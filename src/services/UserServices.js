import { SYSTEM_ERROR } from "../config/Constants";
import axios from 'axios'
import { BASE_URL, USERS_BASE_URL } from "./Constants";
import { User } from "../models/User";

const configHeaders = {
  headers: {
    'Content-Type': 'application/json'
  }
};

/**
 * Function to fetch all the users.
 * @return User[]
 */
export const getAllUsers = () => {
  console.log("UserServices > getAllUsers called...");
  return new Promise((resolve, reject) => {
    try {
      axios
      .get(BASE_URL + USERS_BASE_URL)
      .then((res) => {
        let users = new Array();
        res.data.forEach(function(userData) {
          users.push(User.fromJson(userData));
        });
        console.log("getAllUsers > axios res=", users.toString());
        resolve(users);
      })
      .catch((err) => {
        console.log("getAllUsers > axios err=", err);
        reject("Error in getAllUsers axios!");
      });
    } catch (error) {
      console.error("in services > updateLastCwkId, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};

/**
 * Function to create a new user
 * @param User params
 * @returns User 
 */
export const createUser = (params) => {
  let newUser = JSON.stringify(params);

  console.log("UserServices > createUser called... params=", newUser);
  return new Promise((resolve, reject) => {
    try {
      axios
      .post(BASE_URL + USERS_BASE_URL, newUser, configHeaders)
      .then((res) => {
        let user = User.fromJson(res.data);
        console.log("createUser > axios res=", user.toString());
        resolve(user);
      })
      .catch((err) => {
        console.log("createUser > axios err=", err);
        reject("Error in createUser axios!");
      });
    } catch (error) {
      console.error("in services > updateLastCwkId, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
}

/**
 * Function to get a user by id
 * @params int id
 * @return User
 */
export const getUserById = (id) => {
  console.log("UserServices > getUserById called... id=", id);
  return new Promise((resolve, reject) => {
    try {
      axios
      .get(BASE_URL + USERS_BASE_URL + toString(id))
      .then((res) => {
        let user = User.fromJson(res.data);
        console.log("getUserById > axios res=", user.toString());
        resolve(user);
      })
      .catch((err) => {
        console.log("getUserById > axios err=", err);
        reject("Error in getAllUsers axios!");
      });
    } catch (error) {
      console.error("in services > updateLastCwkId, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
}

/**
 * Function to update a user by id
 * @params int id
 *         User userData
 * @return User
 */
 export const updateUserById = (id, userData) => {
  let updatedUser = JSON.stringify(userData);

  console.log("UserServices > updateUserById called... id=" + toString(id) + ", userData=" + updatedUser);
  return new Promise((resolve, reject) => {
    try {
      axios
      .put(BASE_URL + USERS_BASE_URL + toString(id), updatedUser, configHeaders)
      .then((res) => {
        let user = User.fromJson(res.data);
        console.log("updateUserById > axios res=", user.toString());
        resolve(user);
      })
      .catch((err) => {
        console.log("updateUserById > axios err=", err);
        reject("Error in getAllUsers axios!");
      });
    } catch (error) {
      console.error("in services > updateLastCwkId, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
}

/**
 * Function to update a user by id
 * @params int id
 *         User userData
 * @return User
 */
 export const deleteUserById = (id) => {
  console.log("UserServices > deleteUserById called... id=", id);
  return new Promise((resolve, reject) => {
    try {
      axios
      .delete(BASE_URL + USERS_BASE_URL + toString(id))
      .then((res) => {
        let done = res.data;
        console.log("deleteUserById > axios res=", done.toString());
        resolve(done);
      })
      .catch((err) => {
        console.log("deleteUserById > axios err=", err);
        reject("Error in getAllUsers axios!");
      });
    } catch (error) {
      console.error("in services > updateLastCwkId, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
}