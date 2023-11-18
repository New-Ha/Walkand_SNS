import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const LayoutLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const LayoutBox = styled.div`
    border: 4px solid #bde5ea;
    border-radius: 20px;
    display: flex;
    width: 90%;
    height: 90%;
`;

export default function Layout() {
    return (
        <LayoutLayout>
            <LayoutBox>
                <Sidebar />
                <Outlet />
            </LayoutBox>
        </LayoutLayout>
    );
}
