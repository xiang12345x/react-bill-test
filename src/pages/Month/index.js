import { NavBar, DatePicker } from 'antd-mobile';
import './index.scss';
import { UpOutline, DownOutline } from 'antd-mobile-icons';
import { useState } from 'react';

const Month = () => {
    // 控制时间弹框的打开和关闭
    const [dateVisible, setDateVisible] = useState(false);
    // 时间选择器确认回调
    const dateConfirm = date => {
        console.log(date);
    };

    return (
        <div className="section">
            <div className="header">
                <NavBar backIcon={false}>月度收支</NavBar>
            </div>
            <div className="content">
                <div className="date" onClick={() => setDateVisible(true)}>
                    <span className="text">2026 | 1月账单</span>
                    {dateVisible ? <UpOutline /> : <DownOutline />}
                </div>
                <div className="statistics">
                    <div className="item">
                        <span className="money">10000</span>
                        <span className="type">支出</span>
                    </div>
                    <div className="item">
                        <span className="money">20000</span>
                        <span className="type">收入</span>
                    </div>
                    <div className="item">
                        <span className="money">10000</span>
                        <span className="type">结余</span>
                    </div>
                </div>
            </div>
            {/* 时间选择器 */}
            <DatePicker
                title="记账日期"
                precision="month"
                visible={dateVisible}
                onClose={() => {
                    setDateVisible(false);
                }}
                onConfirm={dateConfirm}
                max={new Date()}
            />
        </div>
    );
};

export default Month;
