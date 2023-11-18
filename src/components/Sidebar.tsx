import styled from 'styled-components';
import Header from './Header';
import NavBar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

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

const AddButton = styled.button`
    width: 50px;
    height: 50px;
    background-color: #bde5ea;
    border-radius: 50%;
    margin-bottom: 15%;
    padding: 10px;
    border: none;
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
                <AddButton>
                    <Link to="/new">
                        <svg
                            fill="none"
                            stroke="#FFF"
                            strokeWidth={1.5}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </Link>
                </AddButton>
                <Footer />
            </SidebarRow3>
        </SidebarLayout>
    );
}
