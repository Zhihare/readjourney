import styled from "styled-components";

export const LoginFormContainer = styled.div`
min-width: 200px;
max-width: 335px;
width: 100%;
border-radius: 30px;
background-color: var(--CL5);
padding: 20px;

svg{
    fill: var(--CL1);
}
`

export const LoginFormTitle = styled.h1`
margin-top: 40px;
font-size: 32px;
font-weight: 700;
line-height: 32px;
letter-spacing: 2%;

span{
    color: var(--CL2);
}
`

export const LoginFormForm = styled.form`
margin: 20px auto;
div{
    position: relative;
}
input{
    border-radius: 12px;
    padding: 14px;
    padding-left: 49px;
    width: 100%;
    background-color: var(--CL4);
    border: none;
    color: var(--CL1);
    margin-bottom: 8px;
}

input#password{
    padding-left: 78px;
}

label{
    position: absolute;
    font-size: 12px;
    z-index: 10;
    top: 50%;
    left: 14px;
    translate: 0 -50%;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: -2%;

    color: var(--CL2);
}

svg#eye{
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
    fill: var(--CL2);
    cursor: pointer;    
}
`