import styled from "styled-components";

export const StatisticContainer = styled.div`
width: 295px;

h2{
font-size: 18px;
font-weight: 700;
line-height: 18px;
width: 100%;
}

p{
margin-top: 14px;
font-size: 13px;
font-weight: 500;
line-height: 18px;
color: var(--CL2);
}

div.round{
    display: flex;
    align-items: center;
    justify-content: center;

    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: var(--CL4);
    margin: 20px auto 0 auto;
}

div.rectangle{
    width: 32px;
    height: 32px;
    background: #000000;
}

@media(min-width: 768px){
    width: 305px;

    h2{
    font-size: 20px;
    line-height: 20px;
    }

    div.round{

    width: 100px;
    height: 100px;

    margin: 50px auto 50px auto;
}

div.rectangle{
    width: 50px;
    height: 50px;
}

}


@media(min-width: 1400px){
    width: 305px;

    h2{
    font-size: 20px;
    line-height: 20px;
    }

    div.round{

    width: 100px;
    height: 100px;

    margin: 50px auto 68px auto;
}

div.rectangle{
    width: 50px;
    height: 50px;
}

}
`