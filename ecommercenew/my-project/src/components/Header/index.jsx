import React from 'react'
import { Link } from 'react-router-dom';
import Search from '../Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { FaCartShopping } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export const Header = () => {
    return (
        <header>
            <div className="top-strip py-2 border-t-[1px] border-gray-250 border-b-[1px]">

                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="col1 w-[50%]">
                            <p className="text-[12px] font-[500]">Get up to 50% off new season styles, llimited time only</p>

                        </div>

                        <div className="col2 flex items-center justify-end">
                            <ul className="flex items-center gap-3">
                                <li className="list-none">
                                    <Link to="/help-center" className="text-[13px] link font-[500] transition">Help Center </Link>
                                </li>
                                <li className="list-none">
                                    <Link to="/order-tracking" className="text-[13px] link font-[500] transition">Order Tracking </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header">
                <div className="container flex items-center justify-between">
                    <div className="col1 w-[25%]">
                        <Link to={"/"}><img src="/logo.jpg" /></Link>
                    </div>
                    <div className="col2 w-[45%]">
                        <Search />
                    </div>
                    <div className="col3 w-[30%] flex items-center pl-7">
                        <ul className="flex items-center gap-3">
                            <li className="list-none">
                                <Link to="/login" className="link transition text-[15px] font-[500]">Login</Link> | &nbsp;
                                <Link to="/register" className="link transition text-[15px] font-[500]">Register</Link>
                            </li>

                            <li>
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={4} color="secondary">
                                        <FaCartShopping />
                                    </StyledBadge>
                                </IconButton>
                            </li>

                            <li>
                                <IconButton aria-label="mail">
                                    <StyledBadge badgeContent={4} color="secondary">
                                        <IoMdMail />
                                    </StyledBadge>
                                </IconButton>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;