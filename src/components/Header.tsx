import styled from 'styled-components';

const HeaderLayout = styled.div`
    background-color: #bde5ea;
    padding: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 15px 0px 0px 0px;
    margin: 0;
`;

const HeaderRow = styled.div`
    border: 1px solid purple;
`;

export default function Header() {
    return (
        <HeaderLayout>
            <HeaderRow>
                <div>Walkand</div>
                <input type="text" />
            </HeaderRow>
            <HeaderRow>
                <div>img</div>
                <div>name</div>
            </HeaderRow>
        </HeaderLayout>
    );
}
