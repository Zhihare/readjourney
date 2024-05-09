import styled from "styled-components";

export const DashbordContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
gap: 32px;

width: 100%;
padding: 40px 20px;

border-radius: 30px;
background: var(--CL5);

  &.dashBoard{
    justify-content: space-between;
    align-items: flex-start;
   }

@media(min-width: 768px){
    padding: 32px;
    margin-top: 16px;
}

@media(min-width: 1400px){
    min-height: 651px;
   &.leftSide{
    width: 30%;
   }
     &.dashBoard{
    padding: 40px;
   }

   &.dashBoard{
    width: 70%;
   }
}
`