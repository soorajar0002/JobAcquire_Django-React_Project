import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: {},
  token: {},
  profile:{},
};

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    userData: (state, action) => {
      console.log("payload",action.payload);
      const user = {
        id: action.payload.id,
        username:action.payload.username,
        email: action.payload.email,
        firstname: action.payload.first_name,
        lastname: action.payload.last_name,
        phone_number: action.payload.phone_number,
        
        isLoggedIn: true,
      };
      console.log("sc",user)

      return {
        ...state,user,
      };
  },
  adminLogin: (state)=>{
    const user={
    
      isAdmLoggedIn:true,
    };
 
    return {
      ...state,user
    };
  },
  recLogin: (state,action)=>{
    const user={
      id: action.payload.id,
      username:action.payload.username,
      email: action.payload.email,
      firstname: action.payload.first_name,
      lastname: action.payload.last_name,
      phone_number: action.payload.phone_number,
      
      
      isRecLoggedIn:true,
    };
 
    return {
      ...state,user
    };
  },
  logOut: (state)=>{
    const user={
      
      token:{},
      profile:{},
      isLoggedIn:false,
    };
    
 
    return {
      ...state,user
    };
  },
  setToken: (state, action)=>{
    const token = {
      access_token:action.payload.access,
      refresh_token:action.payload.refresh,
    };
    console.log("hi",token)
    
    return{
      ...state,
      token,
    };
  },
  usersView: (state, action)=>{
    const view_user = {
      users:action.payload
    };
    console.log("users",view_user)
    
    return{
      ...state,
      view_user,
    };
  },
  userProfileData:(state, action)=>{
    const profile = {
      bio:action.payload.bio, 
      college:action.payload.college,  
      company:action.payload.company,  
      degree:action.payload.degree,  
      description:action.payload.description,  
      designation:action.payload.designation,  
      desired_job:action.payload.desired_job,  
      desired_location:action.payload.desired_location,   
      joining_year:action.payload.joining_year,  
      passout_year:action.payload.passout_year,  
      profile_picture:action.payload.profile_picture,  
      resume:action.payload.resume,  
      skill:action.payload.skill,  
      start:action.payload.start,  
      end:action.payload.end, 
      title:action.payload.title,
      percentage:action.payload.percentage,


      
    };
    console.log("hi",profile)
    
    return{
      ...state,
      profile,
    };
  },
  recProfileData:(state, action)=>{
    const profile = {
      position:action.payload.position,
      recruiter_bio:action.payload.recruiter_bio,
      profile_picture:action.payload.profile_picture,
      location:action.payload.location,
      company_name:action.payload.company_name,
      company_website:action.payload.company_website,
      company_email:action.payload.company_email,
      company_mobile:action.payload.company_mobile,
      company_address_line1:action.payload.company_address_line1,
      company_address_line2:action.payload.company_address_line2,
      description:action.payload.description,



      
    };
    console.log("hi",profile)
    
    return{
      ...state,
      profile,
    };
  },
}
}); 

// this is for dispatch
export const { userData,adminLogin,setToken,logOut, userProfileData, usersView,recLogin,recProfileData} = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;