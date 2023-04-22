import React, { useEffect, useState } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { MobileMenu, MobileMenuItem, MobileNavContainer, MobileNavHeader, Menu, MenuItem, NavContainer, Header } from '../assets/css/styledComponents';

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