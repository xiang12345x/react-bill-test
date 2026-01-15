// 组合子模块 导出Store实例
import billReducer from './modules/billStore';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        bill: billReducer,
    },
});

export default store;
