import styled from "styled-components";

export const SAC = styled.div`
width: 295px;
height: 211px;
border-radius: 12px;

background: var(--CL4);
margin-top: 20px;
padding: 16px;
overflow-y: auto;
`

export const SATitle = styled.div`
display: flex;
align-items: center;


div{
    display: flex;
    gap: 8px;


    button{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    background: transparent;
}

button:hover{
    svg{
        fill: var(--CL1);
    }
}

button.active{
      svg{
        fill: var(--CL1);
    }
}

svg{
    fill: var(--CL2);
    width: 100%;
    height: 100%;
    
}
}

`

export const SAList = styled.ul`

width: 100%;
height: 100%;

li{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 16px;
    border-left: 2px solid black;
    margin-left: 8px;
}
`

export const LeftContainer = styled.div`
position: relative;
padding-left: 16px;
height: 100%;

h5{
font-size: 12px;
font-weight: 700;
line-height: 16px;
}

p{
font-size: 14px;
font-weight: 500;
line-height: 18px;
margin-top: 17px;
color: var(--CL1);
}

span{
font-size: 10px;
font-weight: 500;
line-height: 12px;
color: var(--CL2);
margin-top: 4px;
}

div{
    position: absolute;
    top: 0;
    left: -8px;
    width: 16px;
    height: 16px;
    background: black;
    border: 4px solid var(--CL1);
    border-radius: 4px;
}   
`

export const RightContainer = styled.div`
    p.pages{
    margin: 0;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    color: var(--CL2);
    }

    span{
    display: block;
    font-size: 10px;
    font-weight: 500;
    line-height: 12px;
    color: var(--CL2);
    margin-top: 7px;
    width: 45px;
    }

    div{
        margin-top: 16px;
        display: flex;
        align-items: center;
        gap: 9px;
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 14px;
        height: 14px;
        background: transparent;
    }

    svg{
        fill: var(--CL2);
        width: 100%;
        height: 100%;

    }

`