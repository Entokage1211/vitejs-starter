import Button from '@mui/material/Button';
import React from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { LiaShippingFastSolid } from "react-icons/lia";






const Navigation = () => {
    return (
        <nav className='py-2'>
            <div className='container flex items-center justify-end gap-8'>
                <div className='col_1 w-[20%]'>
                    <Button className="!text-black gap-2"><RiMenu2Fill className='text-[18px]' />
                        Shop by Categories
                        <LiaAngleDownSolid className="text-[13px] ml-auto font-bold" />
                    </Button>
                </div>

                <div className='col_2 w-[60%]'>
                    <ul className='flex items-center gap-3'>
                        <li className='list-none'>
                            <Link to="/" className='link transition text-[16px] font-[500]'>
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#5433eb]">
                                    Home
                                </Button>
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/" className='link transition text-[16px] font-[500]'>
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#5433eb]">
                                    Fashion
                                </Button>
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/" className='link transition text-[16px] font-[500]'>
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#5433eb]">
                                    Mobile & Gadgets
                                </Button>
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/" className='link transition text-[16px] font-[500]'>
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#5433eb]">
                                    Electronics
                                </Button>
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/" className='link transition text-[16px] font-[500]'>
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#5433eb]">
                                    Bags
                                </Button>
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/" className='link transition text-[16px] font-[500]'>
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#5433eb]">
                                    Beauty
                                </Button>
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/" className='link transition text-[16px] font-[500]'>
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#5433eb]">
                                    Accessories
                                </Button>
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/" className='link transition text-[16px] font-[500]'>
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#5433eb]">
                                    Groceries
                                </Button>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='col_3 w-[20%]'>
                    <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
                        <LiaShippingFastSolid className='text-[18px]' />
                        Free International Delivery</p>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;