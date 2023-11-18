import styled from 'styled-components';

const FooterLayout = styled.footer`
    width: 70%;
    display: flex;
    text-align: center;
    padding: 20px;
    span {
        font-weight: 300;
        color: #888;
    }
`;

export default function Footer() {
    return (
        <FooterLayout>
            <span>ABOUT</span>
            <span>|</span>
            <span>CONTACT</span>
        </FooterLayout>
    );
}
