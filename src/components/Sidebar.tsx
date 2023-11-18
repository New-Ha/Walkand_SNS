import styled from 'styled-components';
import Header from './Header';
import NavBar from './Navbar';
import Footer from './Footer';

const SidebarLayout = styled.div`
    height: 90%;
    display: flex;
    flex-direction: column;
    div {
        text-align: center;
    }
`;

const SidebarRow = styled.div`
    height: 50%;
`;

const SidebarRow2 = styled.div`
    height: 40%;
`;
const SidebarRow3 = styled.div`
    height: 10%;
`;
export default function Sidebar() {
    return (
        <SidebarLayout>
            <SidebarRow>
                <Header />
            </SidebarRow>
            <SidebarRow2>
                <NavBar />
            </SidebarRow2>
            <SidebarRow3>
                <div>✚</div>
                <Footer />
            </SidebarRow3>
        </SidebarLayout>
    );
}
