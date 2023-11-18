import styled from 'styled-components';

const NavbarLayout = styled.section`
    margin: 0 auto;
    padding: 10px;
`;

const NavbarBox = styled.div`
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0px;
    border: 1px solid red;
    border-radius: 15px;
`;

const NavbarIcon = styled.div`
    width: 30px;
    height: 35px;
`;
const NavbarText = styled.div`
    font-size: 18px;
    font-weight: 300;
`;

export default function Navbar() {
    return (
        <NavbarLayout>
            <NavbarBox>
                <NavbarIcon>
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                    </svg>
                </NavbarIcon>
                <NavbarText>Home</NavbarText>
            </NavbarBox>
            <NavbarBox>
                <NavbarIcon>
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                </NavbarIcon>
                <NavbarText>Profile</NavbarText>
            </NavbarBox>
        </NavbarLayout>
    );
}
