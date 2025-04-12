import React from 'react';
import styled from 'styled-components';
import { IoMdTime } from "react-icons/io";
import { PiCookingPot } from "react-icons/pi";

const ImageSection = ({ imageSource,title,preparationTime,cookingTime }) => {
    return (
        <ImageSectionStyled>
            <div className='currentnews-details-bottom-image'>
                <img src={imageSource} alt={title} className="details-image"/>
            </div>
            <div className="details-info">
                <p className='details-info-global'>
                    <IoMdTime className='details-info-icon' />
                    <span className='details-info-text'>Préparation : {preparationTime} min </span> 
                </p>
                <p className='details-info-global'>
                    <PiCookingPot className='details-info-icon'/> 
                    <span className='details-info-text'>Cuisson : {cookingTime} min </span>
                </p>
            </div>
        </ImageSectionStyled>
    );
}

export default ImageSection;
const ImageSectionStyled = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    width: 60%;
    margin: 0px auto;

    .currentnews-details-bottom-image {
        display: flex;

        .details-image {
            width: 100%;
            border-radius: 10px;
            object-fit: cover;
            box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px;
            height: 486px;
            margin: 0px 0px 50px;
        }
    }

    .details-info {
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        gap: 100px;
        margin-bottom: 50px;

        .details-info-global {
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            background-color: rgb(249, 249, 249);
            border-radius: 20px;
            padding: 10px 20px;
            font-size: 1.2rem;
            .details-info-icon {
                color: red;
                margin: 0px 5px;
                font-size: 1.3rem;
            }
            .details-info-text {
                text-align: center;
            }
        }
    }
`;