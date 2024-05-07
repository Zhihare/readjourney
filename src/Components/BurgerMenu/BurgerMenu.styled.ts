import styled from "styled-components";

export const BurgerMenuConteiner = styled.div`

@media(min-width: 768px){
    display: none;
}

.bm-burger-button {
  position: fixed;
  width: 21px;
  height: 14px;
  padding: 7px;
  right: 36px;
  top: 40px;
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: white;
}

/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: #a90000;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 14px !important;
  width: 14px !important;
  top: 40px !important;
  right: 40px !important;
}

/* Color/shape of close button cross */
.bm-cross {
  width: 1px !important;
  background: var(--CL1) !important;
}

/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
  position: fixed;
  height: 100%;
      top: 0;
    right: 0 !important;
}

/* General sidebar styles */
.bm-menu {
  background: var(--CL4);
  padding: 40px;
  font-size: 1.15em;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  color: var(--CL2);
  padding: 0;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
}

/* Individual item */
.bm-item {
  display: inline-block;
  padding: 4px 0;
  width: fit-content;

  &.active {
    color: var(--CL1);
    
  }

  &.active::after{
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--CL7);
  }
}

/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}

`


export const ButtonLogout = styled.button`

    box-sizing: border-box;
    border: 1px solid rgba(249, 249, 249, 0.2);
    border-radius: 30px;

    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
    background-color: var(--CL4);

    color: var(--CL1);
    padding: 12px 28px;
    margin: 16px;


    &&.burger{
        position: fixed;
        right: 54px;
        bottom: 40px;
        font-size: 14px;
        padding: 10px;
        margin: 0;
    }

    &&:hover{
        background-color: var(--CL1);
        color: var(--CL4);
    }

    &&.toApply{
      margin: 20px 0 0 0;
      

    }

    @media(max-width: 768px){
      &&.desktop{
        display: none;
      }
    }



`