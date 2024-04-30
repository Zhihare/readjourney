import styled from "styled-components";

export const MobileSideContainer = styled.div`
margin-top: 10px;
min-width: 200px;
height: 351px;
width: 100%;
border-radius: 30px;
background-color: var(--CL5);
overflow: hidden;


img{
    margin: 20px auto 0 auto;
    width: 255px;
}

@media(min-width: 768px) and (max-width:1439px){
    display: none;
}

@media(min-width: 1439px) {
    height: 821px;
    margin-top: 0;
    padding-top: 86px;
    overflow: hidden;

    img{
        width: 405px;
    }
}

`