import { axiosInstance } from ".";

export const RegisterUser = async (values) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:5056/api/users/register",
      values
    );
    console.log("User register through form UI");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const LoginUser = async (values) => {
  try {
    const response = await await axiosInstance.post(
      "http://localhost:5056/api/users/login",
      values
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
