import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "@/api";

// 获取token
export const getTokenMethod = createAsyncThunk(
    'user/getTokenMethod',
    (params: object, thunkAPI: any) => {
        console.log('dispatchParams', params);
        return UserService.login(params);
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: '',
        loading: 'idle'
    },
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(getTokenMethod.fulfilled, (state, { payload }) => {
            state.token = payload as string;
        })
    }
});

export default userSlice.reducer;