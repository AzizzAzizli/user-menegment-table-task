import { createSlice } from "@reduxjs/toolkit";
import { currentTime, getRandomNumber } from "../utils";

const initialState = {
  users: [
    {
      id: 1,
      fullName: "Natalie Portman",
      dateCreated: "2022-09-11",
      role: "Viewer",
      status: "Active",
    },
    {
      id: 2,
      fullName: "Morgan Freeman",
      dateCreated: "2022-07-13",
      role: "Editor",
      status: "Inactive",
    },
    {
      id: 3,
      fullName: "Max Mustermann",
      dateCreated: "2022-06-25",
      role: "Viewer",
      status: "Active",
    },
    {
      id: 4,
      fullName: "Ben Affleck",
      dateCreated: "2022-05-03",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 5,
      fullName: "Mary Jane",
      dateCreated: "2022-04-18",
      role: "Viewer",
      status: "Inactive",
    },
    {
      id: 6,
      fullName: "Tom Cruise",
      dateCreated: "2022-03-17",
      role: "Viewer",
      status: "Active",
    },
    {
      id: 7,
      fullName: "Chris Evans",
      dateCreated: "2022-02-14",
      role: "Viewer",
      status: "Inactive",
    },
    {
      id: 8,
      fullName: "John Doe",
      dateCreated: "2022-01-10",
      role: "Admin",
      status: "Active",
    },
    {
      id: 9,
      fullName: "Zoe Saldana",
      dateCreated: "2022-01-28",
      role: "Editor",
      status: "Inactive",
    },
    {
      id: 10,
      fullName: "Mark Ruffalo",
      dateCreated: "2021-12-07",
      role: "Editor",
      status: "Active",
    },
    {
      id: 11,
      fullName: "Jane Smith",
      dateCreated: "2021-12-15",
      role: "Editor",
      status: "Inactive",
    },
    {
      id: 12,
      fullName: "Ryan Reynolds",
      dateCreated: "2021-11-05",
      role: "Editor",
      status: "Inactive",
    },
    {
      id: 13,
      fullName: "James Bond",
      dateCreated: "2021-11-20",
      role: "Editor",
      status: "Active",
    },
    {
      id: 14,
      fullName: "Charlize Theron",
      dateCreated: "2021-10-05",
      role: "Admin",
      status: "Active",
    },
    {
      id: 15,
      fullName: "Tom Hanks",
      dateCreated: "2021-09-08",
      role: "Editor",
      status: "Inactive",
    },
    {
      id: 16,
      fullName: "Paul Rudd",
      dateCreated: "2021-08-10",
      role: "Viewer",
      status: "Active",
    },
    {
      id: 17,
      fullName: "Emma Watson",
      dateCreated: "2021-07-28",
      role: "Editor",
      status: "Active",
    },
    {
      id: 18,
      fullName: "Brad Pitt",
      dateCreated: "2021-06-21",
      role: "Editor",
      status: "Inactive",
    },
    {
      id: 19,
      fullName: "Gal Gadot",
      dateCreated: "2021-04-17",
      role: "Editor",
      status: "Active",
    },
    {
      id: 20,
      fullName: "Dwayne Johnson",
      dateCreated: "2021-04-12",
      role: "Admin",
      status: "Active",
    },
    {
      id: 21,
      fullName: "Ryan Gosling",
      dateCreated: "2021-02-22",
      role: "Viewer",
      status: "Inactive",
    },
    {
      id: 22,
      fullName: "Will Smith",
      dateCreated: "2021-01-19",
      role: "Viewer",
      status: "Active",
    },
    {
      id: 23,
      fullName: "Angelina Jolie",
      dateCreated: "2020-12-09",
      role: "Admin",
      status: "Active",
    },
    {
      id: 24,
      fullName: "Jessica Chastain",
      dateCreated: "2020-11-19",
      role: "Admin",
      status: "Active",
    },
    {
      id: 25,
      fullName: "Johnny Depp",
      dateCreated: "2020-08-14",
      role: "Viewer",
      status: "Active",
    },
    {
      id: 26,
      fullName: "Scarlett Johansson",
      dateCreated: "2020-06-30",
      role: "Admin",
      status: "Active",
    },
    {
      id: 27,
      fullName: "Chris Hemsworth",
      dateCreated: "2020-05-25",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 28,
      fullName: "Laura Johnson",
      dateCreated: "2020-09-12",
      role: "Admin",
      status: "Active",
    },
    {
      id: 29,
      fullName: "Robert Langdon",
      dateCreated: "2020-03-05",
      role: "Admin",
      status: "Active",
    },
    {
      id: 30,
      fullName: "Hugh Jackman",
      dateCreated: "2020-02-11",
      role: "Viewer",
      status: "Active",
    },
    {
      id: 31,
      fullName: "Mark Ruffalo",
      dateCreated: "2021-12-07",
      role: "Editor",
      status: "Active",
    },
    {
      id: 32,
      fullName: "Natalie Portman",
      dateCreated: "2022-09-11",
      role: "Viewer",
      status: "Active",
    },
  ],

  currentUsers: [],

  userData: {
    id: 0,
    fullName: "",
    dateCreated: "",
    role: "",
    status: "",
  },
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userData.dateCreated = currentTime();
      state.userData.id = getRandomNumber();
      state.users.push(state.userData);
    },
    changeCurrentUsers: (state, action) => {
      state.currentUsers = action.payload;
    },
    deleteUser: (state, action) => {
      let index = state.users.findIndex((item) => item.id === action.payload);
      state.users.splice(index, 1);
    },
    setUserData: (state, action) => {
      const { name, value } = action.payload;
      state.userData[name] = value;
    },
    clearUserData: (state, action) => {
      state.userData = {
        id: 0,
        fullName: "",
        dateCreated: "",
        role: "",
        status: "",
      };
    },
    setActiveUserData: (state, action) => {
      state.userData = state.users.find((user) => user.id == action.payload);
    },
    saveEdit: (state, action) => {
      state.users[action.payload - 1] = state.userData;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addUser,
  changeCurrentUsers,
  deleteUser,
  setUserData,
  clearUserData,
  setActiveUserData,
  saveEdit,
} = userSlice.actions;

export default userSlice.reducer;
