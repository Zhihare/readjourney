import styled from "styled-components";

export const SAC = styled.div`
width: 295px;
height: 211px;
border-radius: 12px;

background: var(--CL4);
margin-top: 20px;
padding: 16px;
overflow-y: auto;

@media(min-width: 768px){
    width: 321px;
    height: 252px;
}

@media(min-width: 1400px){
    width: 313px;
    height: 373px;
}



&::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: transparent;
}

&::-webkit-scrollbar
{
	width: 5px;
	background-color: transparent;
    
}

&::-webkit-scrollbar-thumb
{
	background-color: #000000;
	border: none;
    
    
}


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
export const Rectangle = styled.div`
  position: absolute;
    top: 0;
    left: -7px;
    width: 16px;
    height: 16px;
    background: black;
    border: 4px solid var(--CL2);
    border-radius: 4px;
`

export const SAList = styled.ul`
    height: fit-content;
    padding-bottom: 16px;
    border-left: 2px solid black;
    margin-left: 8px;
li{

div.title{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
        margin: 0;
    }

    h5{
        font-size: 12px;
        font-weight: 700;
        line-height: 16px;
        margin-left: 20px;
        color: var(--CL2);
    }


    /* div.rec{
    position: absolute;
    top: 0;
    left: -7px;
    width: 16px;
    height: 16px;
    background: black;
    border: 4px solid var(--CL2);
    border-radius: 4px;
}    */

  @media(min-width: 768px){
    h5{
        font-size: 16px;
        line-height: 18px;
    }

    p{
        font-size: 14px;
        line-height: 18px;
    }
}
}}

div.title.active{
    div{
        border-color: var(--CL1);
    }

    h5{
        color: var(--CL1);
    }
}

`

export const SAListItem = styled.ul`
margin-bottom: 16px;
li{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    
}
`

export const LeftContainer = styled.div`

padding-left: 16px;
height: 100%;


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

@media(min-width: 768px){
    p{
        font-size: 20px;
        line-height: 20px;
    }

    span{
        font-size: 12px;
        line-height: 14px;
    }
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

    button:hover{
        svg{
            fill: var(--CL1);
        }
    }

    svg{
        fill: var(--CL2);
        width: 100%;
        height: 100%;

    }

`

export const ReadingStart = styled.div`
position: relative;
p{
    margin-left: 20px;
}
`