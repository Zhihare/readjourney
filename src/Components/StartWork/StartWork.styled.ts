import styled from "styled-components";
import HomePagr from './../../Pages/HomePage';

export const StartWorkContainer = styled.div`
   padding: 20px;
   border-radius: 12px;
    max-width: 313px;
   background: var(--CL4);


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

   li{
    display: flex;
    gap: 12px;
    align-items: flex-start;
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
    border-bottom: 1px solid var(--CL2);

    color: var(--CL2);
   }

   a:hover{
    color: var(--CL1);
   }

   svg{
    color: var(--CL1);
   }
   `