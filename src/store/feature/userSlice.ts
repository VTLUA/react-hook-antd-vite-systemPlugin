import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "@/api";
import { message } from "antd";

// 获取token
export const getTokenMethod = createAsyncThunk(
    'user/getTokenMethod',
    (params: Object) => {
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
        // 获取token
        getToken: (state) => {
           const token = localStorage.getItem("token");
           state.token = token;
        }
    },
    extraReducers: builder => {
        builder.addCase(getTokenMethod.fulfilled, (state, { payload }) => {
            const { data } = payload as any;
            if (data.code == 0) {
                message.success("登陆成功！");
                state.token = data.token;
                localStorage.setItem("token", data.token);
            } else {
                message.error(data.msg);
            }
            
        })
    }
});

export const { getToken } = userSlice.actions;

export default userSlice.reducer;