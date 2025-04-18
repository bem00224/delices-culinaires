import React from 'react';
import styled from 'styled-components';

const Title = ({ title }) => {
    return (
        <TitleStyled>
            <h3 className="global-title">{title}</h3>
        </TitleStyled>
    );
}

export default Title;
const TitleStyled = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    .global-title {
        margin-left: 9px;
        font-weight: bold;
        font-size: 1.17em;
    }
`;
