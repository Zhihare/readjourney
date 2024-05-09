import styled from "styled-components";
export const BLC = styled.div`
display: flex;
justify-content: center;
width: 100%;
`

export const BLContainer = styled.ul`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: min-content;
gap: 27px 20px;

@media(min-width: 700px){
    max-width: 100%;
    height: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

@media(min-width: 1400px){
    max-width: 100%; 
    height: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

li{
    cursor: pointer;
    position: relative;
    img{
        width: 100%;
        height: 208px;
        margin-bottom: 8px;
        border-radius: 8px;
    }
        width: 135px;
        height: 248px;

    h4{
        font-size: 14px;
        font-weight: 700;
        line-height: 18px;
        margin-bottom: 2px;
    }

    p{
        color: var(--CL2);
        font-size: 10px;
        font-weight: 500;
        line-height: 12px;
    }

    button.delete{
        position: absolute;
        right: 4px;
        bottom: 0;
        width: 28px;
        height: 28px;

        border: 1px solid rgba(232, 80, 80, 0.2);
        border-radius: 50%;
        background: rgba(232, 80, 80, 0.1);
        color: var(--CL9);

        display: flex;
        justify-content: center;
        align-items: center;

        &:hover{
            background: rgba(232, 80, 80, 0.2);
        }
    }
}
`