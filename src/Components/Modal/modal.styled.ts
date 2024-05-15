import styled from "styled-components";
import Popup from "reactjs-popup";

export const StyledPopup = styled(Popup)`
  &-overlay {
    box-sizing: border-box;
    background: rgba(20, 20, 20, 0.6);
    overflow-y: auto;
  }

  &-content {
    width: 335px;
    padding: 40px;
    text-align: center;
    position: relative;
    border: 1px solid rgba(104, 104, 104, 0.2);
    border-radius: 12px;
    background: var(--CL5);

&.good-content{
  width: 345px;
}

    button.close {
      position: absolute;
      top: -5px;
      right: 15px;
      width: 22px;
      height: 22px;
      color: var(--CL1);
      background: transparent;

      svg{
      width: 100%;
      height: 100%;
    }
    }

    div{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70px;
      height: 70px;
      margin: 0 auto 32px auto;
      font-size: 68px;
      font-weight: 500;
      line-height: 70px;
      
    }
    

    button.close:hover {
      color: var(--CL1h);
  
    }

    img {
      width: 140px;
      height: 213px;
      border-radius: 8px;
      margin: 0 auto 16px auto;
    }

    h2 {
      color: var(--CL1);
      font-size: 18px;
      font-weight: 700;
      line-height: 18px;
      margin-bottom: 2px;
    }

    h2.good{
      margin-bottom: 14px;
    }

    p.bookTrialDesc {
      color: var(--CL2);
      font-size: 12px;
      font-weight: 500;
      line-height: 14px;
      margin-bottom: 4px;
    }

    p.bookTrialDesc.good{
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
    }

    p.booksPage {
      color: var(--CL1);
      font-size: 10px;
      font-weight: 500;
      line-height: 12px;
    }

    span{
      color: var(--CL1);
    }

    button{
        margin: 20px auto 0 auto;
    }


    
       @media(min-width: 768px){
      width: 500px;
      padding: 50px;

      h2 {
      font-size: 20px;
      line-height: 20px;
    }

    p.bookTrialDesc {
      font-size: 14px;
      line-height: 20px;
    }

   

    }

  }
`;
