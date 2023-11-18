import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const LayoutLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const LayoutBox = styled.div`
    border: 4px solid #bde5ea;
    border-radius: 20px;
    display: flex;
    width: 90%;
    height: 90%;
    padding: 0;
`;
const LayoutCol = styled.div`
    width: 25%;
    margin: 0 auto;
`;

const LayoutCol2 = styled.div`
    width: 75%;
    margin: 0 auto;
`;
export default function Layout() {
    return (
        <LayoutLayout>
            <LayoutBox>
                <LayoutCol>
                    <Sidebar />
                </LayoutCol>
                <LayoutCol2>
                    <Outlet />
                </LayoutCol2>
            </LayoutBox>
        </LayoutLayout>
    );
}
