import styled from "styled-components";


export const HeaderSection = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

height: 57px;
border-radius: 15px;
background: var(--CL5);
padding-left: 20px;



@media(min-width: 768px){
	height: 100%;
	max-width: 1216px;
	margin-right: auto;
    margin-left: auto;
	color: var(----button-color-hover);
}
`

export const LogoConteiner = styled.div`
display: flex;
align-items: center;
gap: 5px;


svg{
	display: block;
    fill: var(--CL1);
    width: 42px;
    height: 18px;
}


`

export const HeaderWrapper = styled.div`
@media(max-width: 768px){
	display: none;
}
`

export const Navigation = styled.div`
display: flex;
justify-content: center;
align-items: center;


@media(max-width: 768px){
display: none;
}

`

export const NavigationButton = styled.div`
display: flex;
align-items: center;
gap: 16px;

p{	
	position: relative;
	border-radius: 2px;
	font-weight: 500;
	font-style: italic;
}

p::before{
	content: "";
	position: absolute;
	bottom: 0;
    width: 100%;
	transform: translate(5%, -55%);
    height: 10px;
    background: var(--button-color-hover);
	z-index: -1;
	border-radius: 3px;
}

@media(max-width: 768px){
	flex-direction: column;
	gap: 10px;
	padding-top: 10px;
	margin-top: 20px;
	border-top: 1px solid var(--text-color-grey);
}
`
export const RightButtonContainer = styled.div`
display: flex;
align-items: center;


@media(max-width: 768px){
    margin-right: 58px;
}
`
export const RightContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
 span{
	display: flex;
	align-items: center;
    justify-content: center;
	
	box-sizing: border-box;
	border: 1px solid var(--CL1h);
	border-radius: 50%;
	background: transparent;
	width: 40px;
	height: 40px;
 }

 @media(max-width: 768px){
	p{
		display: none;
	}
 }

`