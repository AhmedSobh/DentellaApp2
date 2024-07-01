import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = "http://dentelle.runasp.net/api/Account";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (
    { userType, userName, email, phoneNumber, passWord, dentistID },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const registrationData = {
        userName,
        email,
        phoneNumber,
        passWord,
        dentistID,
      };
      const response = await axios.post(
        `${apiUrl}/${userType}/register`,
        registrationData,
        config
      );
      console.log("Response from server:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error during user registration:", error);
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ userType, email, passWord, userName }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log("Data being sent:", {
        email,
        passWord,
        userType,
        userName,
      });
      const { data } = await axios.post(
        `${apiUrl}/${userType}/login`,
        { email, passWord, userName },
        config
      );
      console.log("data returned from login", data);
      // store user's token in local storage
      localStorage.setItem("userToken", JSON.stringify(data.token));
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userLogout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem("userToken");
      return null;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// {userName: 'purehe', email: 'lywar@example.com', phoneNumber: '01186325615', passWord: 'Pa$$w0rd!', dentistID: undefined}
