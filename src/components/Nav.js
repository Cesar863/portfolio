import React, { useEffect, useState } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Nav(props) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const getScreenSize = () => {
        const screenSize = window.innerWidth;
        setScreenWidth(screenSize);
    }
    console.log(screenWidth);

    window.addEventListener('resize', getScreenSize);
    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
    }, [currentPage]);

    const NavContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    color: #f7fff7;
    padding: 5px 5px 0 5px;
    `

    const Header = styled.div`
    font-size: 4em;
    `

    const Menu = styled.div`
    display: flex;
    align-items: center;
    `

    const MenuItem = styled.div`
    padding: 0 10px 0 10px;
    font-size: 1em;
    cursor: pointer;
    `
    const MobileNavContainer = styled.div`
    display: block;
    text-align:center;
    color: #f7fff7;
    padding: 5px 5px 0 5px;
    width: 100%
    `
    const MobileNavHeader = styled.div`
    font-size: 2em;
    `
    const MobileMenu = styled.div`
    display: block;
    `
    const MobileMenuItem = styled.div`
    display: block;
    `

    return(
        <nav className='navbar navbar-expand-lg navbar-dark id="mainNav'>
            { screenWidth >= 800 ?
            <NavContainer>
                <Header>Cesar Martinez</Header>
                <Menu>
                    {pages.map((Page) => (
                        <MenuItem key={Page.name}>
                            <div onClick={() => {setCurrentPage(Page)}}>
                                {capitalizeFirstLetter(Page.name)}
                            </div>
                        </MenuItem>
                    ))}
                </Menu>
            </NavContainer> :
            <MobileNavContainer>
                <MobileNavHeader>Cesar Martinez</MobileNavHeader>
                {showMobileMenu ?
                <MobileMenu>
                    {pages.map((Page) => (
                        <MobileMenuItem key={Page.name}>
                            <div onClick={() => {setCurrentPage(Page)}}>
                                {capitalizeFirstLetter(Page.name)}
                            </div>
                        </MobileMenuItem>
                    ))}
                    <KeyboardArrowUpIcon onClick={() => {setShowMobileMenu(false)}}/>
                </MobileMenu>
                :
                <MenuIcon style={{width: '100%', textAlign: 'center'}} onClick={() => {setShowMobileMenu(true)}}/>}
            </MobileNavContainer>}
        </nav>
    );
}

export default Nav;