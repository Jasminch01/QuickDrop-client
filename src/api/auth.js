import axiosSecure from ".";

export const saveUser = async (user) => {
  const currentUser = {
    email: user.email,
    role: "user",
    status: "Verified",
  };
  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);

  return data;
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
