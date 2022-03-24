import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
//  import { Link } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';

// const Navbar = () => {
//   return (
//     <div className="nav-container">
//       <div className='logo-container'>
//         <Avatar src={icon} size="large" />
//         <Typography.Title level={2} className="logo">
//           <Link to="/">Cryptoverse</Link>
//         </Typography.Title>
//         {/* <Button className="menu-control-container">

//         </Button> */}
//       </div>
//       <Menu theme="dark">
//         <Menu.Item icon={<HomeOutlined />}>
//           <Link to="/">Home</Link>
//         </Menu.Item>
//         <Menu.Item icon={<FundOutlined />}>
//           <Link to="/cryptocurrencies">Cryptocurrencies</Link>
//         </Menu.Item>
//         <Menu.Item icon={<MoneyCollectOutlined />}>
//           <Link to="/exchanges">Exchanges</Link>
//         </Menu.Item>
//         <Menu.Item icon={<BulbOutlined />}>
//           <Link to="/news">News</Link>
//         </Menu.Item>
        
//       </Menu>
//     </div>
//   )
// }

// export default Navbar


 
const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/exchanges">Exchanges</Link>
          </li>
          <li>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;

 



// const Navbar = () => {
//   return (
//     <div className="nav-container">
//       <div className='logo-container'>
//         <Avatar src={icon} size="large" />
//         <Typography.Title level={2} className="logo">
//           <Link to="/">Cryptoverse</Link>
//         </Typography.Title>
//         {/* <Button className="menu-control-container">

//         </Button> */}
//       </div>
//       <Menu theme="dark">
//         <Menu.Item icon={<HomeOutlined />}>
//           <Link to="/">Home</Link>
//         </Menu.Item>
//         <Menu.Item icon={<FundOutlined />}>
//           <Link to="/cryptocurrencies">Cryptocurrencies</Link>
//         </Menu.Item>
//         <Menu.Item icon={<MoneyCollectOutlined />}>
//           <Link to="/exchanges">Exchanges</Link>
//         </Menu.Item>
//         <Menu.Item icon={<BulbOutlined />}>
//           <Link to="/news">News</Link>
//         </Menu.Item>
        
//       </Menu>
//     </div>
//   )
// }

// export default Navbar


