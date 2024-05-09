import styled from "styled-components";

export const SelectContainer = styled.div`
select{
width: 120px;
height: 40px;

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 14px 12px 14px;

box-sizing: border-box;
border: 1px solid rgb(62, 62, 62);
border-radius: 12px;
background: var(--CL5);
color: var(--CL1);

}

select::after{
    padding: 10px;
}


select:focus {
  outline: none;
}
`