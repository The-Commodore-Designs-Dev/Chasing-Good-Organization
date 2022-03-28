import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    width: 100%;
    height: 20px;
    background-color: blue;
    padding: 7px;
`;

export default () => {
    return (
        <React.Fragment>
            <Header>
                <button>Login</button>
            </Header>
        </React.Fragment>
    )
}