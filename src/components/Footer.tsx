import styled from 'styled-components';

const FooterLayout = styled.footer`
    width: 70%;
    display: flex;
    justify-content: center;
    gap: 10%;
    text-align: center;
    span {
        font-size: 14px;
        font-weight: 300;
        color: #999;
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
