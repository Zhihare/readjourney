import styled from "styled-components";

export const StartWorkContainer = styled.div`
   padding: 20px;
   border-radius: 12px;
    max-width: 313px;
   background: var(--CL4);

   &.recommended{
    min-width: 295px;
    max-width: 313px;
    height: fit-content;

    ul{
     display: flex;
     flex-direction: row;
     height: fit-content;
    }

    li{
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 2px;
        height: 141px;
    }

    img{
        width: 71px;
        height: 107px;
    }

    h4{
    font-size: 10px;
    font-weight: 700;
    line-height: 12px;
    }
   }


   h2{
    color: var(--CL1);
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: -2%;

    margin-bottom: 20px;
   }

   ul{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 26px;
   }

   ul.queteList{
    margin-bottom: 0;
   }

   li{
    display: flex;
    gap: 12px;
    align-items: flex-start;
   }

   li.quete{
    align-items: center;
   }

   span.number{
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 40px;
    min-height: 40px;
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
    color: var(--CL5);
    background: var(--CL1);

    border-radius: 50%;
   }

   span.ractangle{
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 40px;
    min-height: 40px;

    font-size: 40px;
    font-weight: 500;
    line-height: 40px;
    background: black;

   }

   p{
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: var(--CL2);

    span{
        color: var(--CL1);
    }
   }


   a{
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    

    color: var(--CL2);

    span.link{
        border-bottom: 1px solid var(--CL2);
    }
   }

   a:hover{
    color: var(--CL1);
   }

   svg{
    color: var(--CL1);
   }

   @media(max-width: 1400px){
    &.queteCont{
    display: none;
   }
}
   `