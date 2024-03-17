import axios from "axios";
import axiosSecure from ".";

export const saveUser = async (user) => {
  const currentUser = {
    name : user.displayName,
    email: user.email,
    role: "user",
    status: "Verified",
  };
  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);

  return data;
};

//update users
export const updateUser = async (user, email) => {
  console.log(email)
  // const { data } = await axiosSecure.put(`/users-update/${email}`, user);
  // return data;
};

export const getRole = async (email) => {
  const { data } = await axiosSecure(`/user/${email}`);
  return data.role;
};

export const getUsers = async () => {
  const { data } = await axiosSecure(`/users`);
  return data;
};
export const getUser = async (email) => {
  const { data } = await axiosSecure(`/user/${email}`);
  return data;
};
export const getParcels = async (email) => {
  const { data } = await axiosSecure(`/parcels/${email}`);
  return data;
};
export const profileUpload = async (image) => {
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=f11b624aeee9668471c2c0181e019790`,
    image
  );
  return data;
};
