import styled from "styled-components";

export const PageContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
margin: 10px auto;
width: 100%;
max-width: 1216px;

@media(min-width: 768px){
margin-top: 16px;
gap: 16px;

}

@media(min-width: 1400px){
flex-direction: row;
gap: 16px;
}
`