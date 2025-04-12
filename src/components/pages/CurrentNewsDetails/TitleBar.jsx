import React from 'react';
import styled from 'styled-components';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const TitleBar = ({ title }) => {
    return (
        <TitleBarStyled>
            <div className='content-titleBar'>
                <h2 className="details-title">{title}</h2>
            </div>
            <Link to={"/"} className='arrow-link'>
                <FaArrowLeft className='arrow-icon' />
            </Link>
        </TitleBarStyled>
    );
}

export default TitleBar;
const TitleBarStyled = styled.div`
    position: relative;

    .content-titleBar {
        text-align: center;
        margin: 170px 0px 50px;

        .details-title {
            font-size: 1.7rem;
        }
    }
    .arrow-link {
        color: rgb(255, 66, 105);
        font-size: 2rem;

        .arrow-icon {
            position: absolute;
            top: 2px;
            left: 100px;
            cursor: pointer;
        }
    }
`;
