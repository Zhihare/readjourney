import styled from "styled-components";

export const Nothings = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
width: 100%;
margin: 40px auto;

div.round{
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: var(--CL4);


font-size: 70px;
font-weight: 500;
line-height: 70px;
}

div.rectangle{
    width: 50px;
    height: 50px;
    background: #000000;
}

p{
    width: 197px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: var(--CL1);
}

span{
    color: var(--CL2);
}

@media(min-width:768px){
    gap: 20px;
    margin: 66px auto 130px auto;

    div.round{
    width: 130px;
    height: 130px;
    }

    div.rectangle{
        width: 70px;
        height: 70px;
    }

    p{
        width: 274px;
    }
}

@media(min-width:1400px){
    gap: 20px;
    margin: 147px auto 200px auto;
}
`