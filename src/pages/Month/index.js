import { NavBar, DatePicker } from 'antd-mobile';
import './index.scss';
import { UpOutline, DownOutline } from 'antd-mobile-icons';
import { useState } from 'react';

const Month = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="section">
            <div className="header">
                <NavBar backIcon={false}>月度收支</NavBar>
            </div>
            <div className="content">
                <div className="date">
                    <span className="text">2026 | 1月账单</span>
                    <UpOutline />
                    <DownOutline />
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
                visible={visible}
                onClose={() => {
                    setVisible(false);
                }}
                max={new Date()}
            />
        </div>
    );
};

export default Month;
