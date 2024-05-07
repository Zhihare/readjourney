import styled from "styled-components";

export const LoginFormContainer = styled.div`
min-width: 200px;
width: 100%;
border-radius: 30px;
background-color: var(--CL5);
padding: 20px;

@media(min-width: 768px){
    padding: 40px 68px 214px 68px;
    }
    
@media(min-width: 1400px){
    padding: 40px 68px;
}


`
export const Logo= styled.div`
svg.text{
    display: none;
}

svg.logo{
    display: block;
    fill: var(--CL1);
    width: 42px;
    height: 18px;
}


@media(min-width: 768px){

    svg.text{
    display: block;
    fill: var(--CL1);
    width: 182px;
    height: 18px;
    }

    svg.logo{
        display: none;
    }

  
}

@media(max-width: 1400px){
      svg.logo.header{
        display: block;
    }

    svg.text.header{
        display: none;
    }
}
`

export const LoginFormTitle = styled.h1`
margin-top: 40px;
font-size: 32px;
font-weight: 700;
line-height: 32px;
letter-spacing: 2%;
 max-width: 295px;

@media(min-width: 768px){
font-size: 64px;
line-height: 60px;
max-width: 444px;
margin-top: 174px;
}

@media(min-width: 1440px){
    margin-top: 113px;
}

span{
    color: var(--CL2);
}
`

export const LoginFormForm = styled.form`
margin: 20px auto;
div{
    position: relative;
}

div.passContainer{
    position: relative;
    max-width: 472px;
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
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active  {
    background-color: var(--CL4) !important;
}


input:focus {
  outline: none; 
}

input#password{
    padding-left: 78px;
    max-width: 472px;
}

input#name{
    padding-left: 65px;
}


    input.error {
    border: 1px solid var(--CL9); 
    }

    input.success {
    border: 1px solid var(--CL8); 
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

svg#eye{
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
    fill: var(--CL1);
    cursor: pointer;    
}

svg#eye.error{
    fill: var(--CL9);
}

svg#eye.ok{
    fill: var(--CL8);
}

div#button{
    display: flex;
    align-items: center;
    gap: 14px;
   
    margin-top: 64px;

    
    button{
        width: 131px;
        font-size: 14px;
        font-weight: 700;
        border-radius: 30px;
        padding: 14px 0;
        background: var(--CL1);
        border: 1px solid var(--CL1);
    }

    button.registrButton{
        width: 225px;
    }

    button:hover{
        background: var(--CL6);
        color: var(--CL1);
        border-color: var(--CL1h);
    }

    a{
        color: var(--CL2);
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        letter-spacing: -2%;
        text-decoration-line: underline;
        cursor: pointer;
    }

    a:hover{
        color: var(--CL1);
    }

}

  span#error{
        display: block;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        color: var(--CL9);
        margin-bottom: 4px;
        padding-left: 14px;
    }

  span#ok{
        display: block;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        color: var(--CL8);
        margin-bottom: 4px;
        padding-left: 14px;
    }




    @media(min-width: 768px){
        margin-top: 40px;

        input{
            padding-top: 16px;
            padding-bottom: 16px;
            margin-bottom: 14px;
        }
        
        div#button.reg{
            margin-top: 82px;
        }
        div#button{
            margin-top: 146px;
        
        
    }

        a{
            font-size: 14px;
        }

        div#button{
            button{
            width: 166px;
            font-size: 20px;
        }
    }
}


     @media(min-width: 1440px){


     }

`