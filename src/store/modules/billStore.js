// 账单列表相关的Store
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const billStore = createSlice({
    name: 'bill',
    initialState: {
        billList: [],
    },
    reducers: {
        setBillList(state, aciton) {
            state.billList = aciton.payload;
        },
    },
});

const { setBillList } = billStore.actions;
// 编写异步
const getBillList = () => {
    return async dispatch => {
        // 发送异步请求
        const res = await axios.get('http://localhost:8888/ka');
        // 触发同步reducer
        dispatch(setBillList(res.data));
    };
};

export { getBillList };

const reducer = billStore.reducer;

export default reducer;
