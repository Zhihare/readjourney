import styled from "styled-components";

export const RecomendedButtonContainer = styled.div`
display: flex;
gap: 8px;

button{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    background: transparent;
    color: var(--CL2);
    border: 1px solid var(--CL2);
    
}

button.active:hover{
    border-color: var(--CL1);
}

button.active{
    color: var(--CL1);
    cursor: pointer;
}
`