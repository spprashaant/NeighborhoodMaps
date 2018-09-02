import React, { Component } from 'react';


class MenuIcon extends Component {
    handleMenuClick = (e) => {
        const navBar = document.querySelector("nav");
        navBar.classList.toggle('open');
        navBar.style.zIndex = "1";
        e.stopPropagation();
    }

    render() {
        return ( <
            a id = "menu"
            onClick = { this.handleMenuClick } >
            <
            svg xmlns = "http://www.w3.org/2000/svg"
            viewBox = "0 0 24 24" >
            <
            path d = "M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z" / >
            <
            /svg> <
            /a>
        );
    }
}
export default MenuIcon;