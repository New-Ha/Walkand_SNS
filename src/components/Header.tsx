import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderLayout = styled.div`
    background-color: #bde5ea;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10%;
    border-radius: 15px 0px 0px 0px;
    margin: 0;
`;

const HeaderRow = styled.div`
    height: 30%;
    background-color: #bde5ea;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    margin: 0 auto;
    margin-top: 2rem;
`;

const HeaderTitle = styled.div`
    font-size: 24px;
    font-weight: 600;
`;

const SearchBar = styled.input`
    width: 80%;
    height: 8rem;
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
`;

const AuthBtnBox = styled.label`
    width: 70%;
    height: 2.5rem;
    border-radius: 30px;
    background-color: #fff;
    padding: 10px 0px;
    cursor: pointer;
    a {
        color: #555;
        font-weight: 300;
        text-decoration: none;
    }
`;
export default function Header() {
    return (
        <HeaderLayout>
            <HeaderRow>
                <HeaderTitle>Walkand</HeaderTitle>
                <SearchBar type="text" placeholder="검색어를 입력하세요." />
            </HeaderRow>
            <HeaderRow>
                <AuthBtnBox htmlFor="login">
                    <Link to="/login" id="login">
                        LOGIN
                    </Link>
                </AuthBtnBox>
                <AuthBtnBox htmlFor="signUp">
                    <Link to="/sign-up" id="signUp">
                        SIGN UP
                    </Link>
                </AuthBtnBox>
            </HeaderRow>
        </HeaderLayout>
    );
}
