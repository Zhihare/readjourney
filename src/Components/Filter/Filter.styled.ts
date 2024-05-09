import styled from "styled-components";

export const FilterFormCont = styled.form`
max-width: 313px;
width: 313px;


h3{
font-size: 14px;
font-weight: 500;
line-height: 18px;
letter-spacing: -2%;
padding-left: 14px;
margin-bottom: 8px;
}
div{
    position: relative;
}
input{
    border-radius: 12px;
    padding: 14px;
    padding-left: 49px;
    width: 100%;
    max-width: 472px;
    background-color: var(--CL4);
    border: none;
    color: var(--CL1);
    margin-bottom: 8px;
    max-width: 295px;

    &#author{
        padding-left: 65px;
    }

     &#authorMyLibrary{
        padding-left: 90px;
    }

    &#bookTitle{
        padding-left: 85px;
    }

    &#page{
        padding-left: 90px;
    }



}

@media(min-width: 1400px){
    width: 100%;
input{
    max-width: 313px;
}
}



input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active  {
    background-color: var(--CL4) !important;
}

::placeholder {
  color: var(--CL1);
}


input:focus {
  outline: none; 
}

label{
    position: absolute;
    font-size: 12px;
    z-index: 10;
    top: 50%;
    left: 14px;
    translate: 0 -50%;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: -2%;

    color: var(--CL2);

}


`