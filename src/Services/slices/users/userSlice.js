import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstanse from "../../../Adapters/UrlAdapter";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export const fetchUsers=createAsyncThunk('user/fetchUsers',()=>{
    return axiosInstanse.get("/posts")
    .then((res)=>res.data)

})

 const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers:(builder)=>{
    builder.addCase(fetchUsers.pending,(state)=>{
        state.loading=true
    })
    builder.addCase(fetchUsers.fulfilled,(state,action)=>{
        state.loading=false
        state.users=action.payload
        state.error=''
    })
    builder.addCase(fetchUsers.rejected,(state,action)=>{
        state.loading=false
        state.users=[]
        state.error=action.error.message
    })
  }
});




export default userSlice.reducer;
