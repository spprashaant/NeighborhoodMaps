import React from 'react';


const MenuIcon = (props) => {
	const handleMenuClick = (e) => {
    e.target.classList.toggle('open');
    e.stopPropagation();
  }
  
	return (
		<a className="hamburgerIcon" onClick={this.handleMenuClick} id="menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"/>
            </svg>
          </a>
		);
}
export default MenuIcon;