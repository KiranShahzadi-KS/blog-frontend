import React from 'react'
import "./topbar.css"

 function TopBar() {
  return (
    <div className='top'>
      <div className='topLeft'>
      <i className="topIcon fa-brands fa-square-facebook"></i>
      <i className="topIcon fa-brands fa-square-twitter"></i>
      <i className="topIcon fa-brands fa-square-pinterest"></i>
      <i className="topIcon fa-brands fa-linkedin"></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
            <li className='topListItem'>HOME</li>
            <li className='topListItem'>ABOUT</li>
            <li className='topListItem'>CONTACT</li>
            <li className='topListItem'>WRITE</li>
            <li className='topListItem'>LOGOUT</li>
        </ul>
      </div>
      <div className='topRight'>
        <img className='topImg'
        src='https://i0.wp.com/www.kahanihindi.com/wp-content/uploads/2021/06/Girls-profile-picture-8.jpg?resize=450%2C400&ssl=1' alt=''/>
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
export default TopBar;