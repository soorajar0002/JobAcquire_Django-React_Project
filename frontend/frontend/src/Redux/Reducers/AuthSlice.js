import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: {},
  token: {},
};

export const userSlice = createSlice({
  name: 'userData',
  initialState: [],
  reducers: {
    userData: (state, action) => {
      console.log("payload",action.payload);
      const user = {
        email: action.payload.email,
        firstname: action.payload.first_name,
        lastname: action.payload.last_name,
        isLoggedIn: true,
      };
      console.log(user)

      return {
        ...state,user,
      };
  },
  logOut: (state)=>{
    const user={
      user:{},
      isLoggedIn: false,
    };
    return {
      ...state,user,
    };
  },
  setToken: (state, action)=>{
    const token = {
      access_token:action.payload.token.access,
      refresh_token:action.payload.token.refresh,
    };
    return{
      ...state,
      token,
    };
  }
}
}); 

// this is for dispatch
export const { userData,setToken,logOut } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;