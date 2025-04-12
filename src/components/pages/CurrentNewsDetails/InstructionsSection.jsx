import React from 'react';
import styled from 'styled-components';

const InstructionsSection = ({currentItem}) => {
    return (
        <InstructionsSectionStyled>
            <h3 className='details-section-title'>Instructions</h3>
            <div className="details-section">
                <ol>
                {currentItem.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
                </ol>
            </div>
        </InstructionsSectionStyled>
    );
}

export default InstructionsSection;
const InstructionsSectionStyled = styled.div`
    .details-section-title {
        color: rgb(255, 66, 105);
        font-size: 1.3rem;
        margin: 30px 0px 20px;
    }
`;