import styled from "styled-components";

export const BIC = styled.div`
margin: 0 auto;

`

export const BookInfodetail = styled.div`
display: flex;
flex-direction: column;
align-items: center;

img{
    width: 137px;
    height: 208px;
    border-radius: 8px;
}

h4{
    margin-top: 10px;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;

    width: 146px;
    text-align: center;
}

p{
    margin-top: 5px;
    text-align: center;

    color: var(--CL2);
    font-size: 10px;
    font-weight: 500;
    line-height: 12px;

}
button{
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid var(--CL1);
    padding: 1px;
    background-color: transparent;
}

svg{
    fill: red;
    width: 40px;
    height: 40px;
}

div{
    width: 20px;
    height: 20px;
    border-radius: 3px;
    background: var(--CL9);
}


@media(min-width: 768px){
    img{
        width: 169px;
        height: 256px;
    }

    h4{
        margin-top: 25px;
        font-size: 20px;
        line-height: 20px;
        width: 320px;
    }

    p{
        font-size: 14px;
        font-weight: 700;
        line-height: 18px;
    }

    button{
        margin: 16px;
    }
}


@media(min-width: 1400px){
    img{
        width: 224px;
        height: 340px;
    }

    button{
        margin: 25px;
    }
}
`
