
import styled from "styled-components";

export const NavigationNav = styled.nav`
	display: flex;
    justify-content: space-around;
	align-items: center;
	gap: 32px;

		a{
			font-size: 16px;
			font-weight: 500;
			line-height: 18px;

			color: var(--CL2);
			padding: 6px 0;
			border-bottom: 2px solid transparent;
	}

	a:hover,
	a:focus{
		color: var(--CL1);
	}

	.active{
		color: var(--CL1);
		border-color: var(--CL7);		
	}

	@media(max-width: 768px){
		flex-direction: column;
		gap: 10px;
		align-items: flex-start;
		
		}
`