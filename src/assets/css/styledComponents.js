import styled from "styled-components";

export const NavContainer = styled.div `
    display: flex;
    justify-content: space-around;
    width: 100%;
    color: #f7fff7;
    padding: 5px 5px 0 5px;
    `

export const Header = styled.div `
    font-size: 4em;
    `

export const Menu = styled.div `
    display: flex;
    align-items: center;
    `

export const MenuItem = styled.div `
    padding: 0 10px 0 10px;
    font-size: 1em;
    cursor: pointer;
    `
export const MobileNavContainer = styled.div `
    display: block;
    text-align:center;
    color: #f7fff7;
    padding: 5px 5px 0 5px;
    width: 100%;
    `
export const MobileNavHeader = styled.div `
    font-size: 2em;
    `
export const MobileMenu = styled.div `
    display: block;
    `
export const MobileMenuItem = styled.div `
    display: block;
    cursor: pointer;
    `