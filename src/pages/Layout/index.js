import { Button } from 'antd-mobile';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Outlet />
            <h1>Layout</h1>
            {/* 测试全局样式 */}
            <Button color="primary">测试全局样式按钮</Button>
            <div className="purple">
                <Button color="primary">测试局部样式按钮</Button>
            </div>
        </div>
    );
};

export default Layout;
