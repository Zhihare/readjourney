import styled from "styled-components";

export const SDiagramContainer = styled.div`
p.text{
    display: none;
    width: 293px;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
}

@media(min-width: 1400px){
    p.text{
        display: block;
    }
}
`

export const SDiagramWrapper = styled.div`
width: 295px;
height: 211px;
border-radius: 12px;
padding: 20px;

background: var(--CL4);
margin-top: 20px;

overflow-y: auto;

@media(min-width: 768px){
    width: 321px;
    height: 252px;
    padding: 28px;
}

@media(min-width: 1400px){
    width: 313px;
    height: 282px;
}

`

export const SDiagram = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
margin: 0 auto 20px auto;
border-radius: 50%;
width: 116px;
height: 116px;

div.centerInfo{
  display: flex;
  align-items: center;
  justify-content: center;
   position: absolute;
   border-radius: 50%;
   background: var(--CL4);
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   height: 80%;
   width: 80%;
}



@media(min-width: 768px){
    width: 138px;
    height: 138px;
    margin-bottom: 16px;
}

@media(min-width: 1400px){
    width: 168px;
    height: 168px;
    margin-bottom: 16px;
}

`

export const SDiagramText = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    height: fit-content;

div.rec{
    width: 14px;
    height: 14px;
    border-radius: 4px;
    background-color: var(--CL8);
}

p{
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: var(--CL1);
    margin-top: 0;
    margin-bottom: 4px;
}

span{
    display: block;
    font-size: 10px;
    font-weight: 500;
    line-height: 12px;
    color: var(--CL2);
}

@media(min-width: 768px){
    gap: 8px;

  p{
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 8px;
  }

  span{
    font-size: 12px;
    line-height: 14px;
  }
}
`