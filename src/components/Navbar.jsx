import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';
import { TfiMenu } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
    const navItems = [
        { name: "Home", path: "home" },
        { name: "About", path: "about" },
        { name: "Projects", path: "projects" },
        { name: "Contact", path: "contact" }
    ];

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [show, setShow] = useState(false);

    const handleToggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const handleClick = (path) => {
        window.history.pushState({}, '', `#${path}`);
        scroller.scrollTo(path, {
            duration: 100,
            delay: 100,
            smooth: true,
            offset: -50
        });
        setShow(false);
    };

    return (
        <div className="navbar flex gap-20 md:gap-48 lg:justify-between py-3 px-8 lg:px-32 fixed w-full z-50 font-bold bg-white dark:bg-gray-900 shadow-lg">
            <h1 className='text-2xl md:text-3xl text-purple-900 dark:text-white'>Gladys</h1>
            <ul className="hidden lg:flex text-lg font-semibold gap-10 lg:ml-[20rem]">
                {navItems.map((nav, i) => (
                    <li key={i} className='hover:text-purple-900 dark:hover:text-purple-300 cursor-pointer  hover:border-b-2 border-purple-900 dark:border-purple-300'>
                        <span onClick={() => handleClick(nav.path)}>{nav.name}</span>
                    </li>
                ))}
                <a href="https://drive.google.com/file/d/1t1IyNkFtmCRyvbSuT1YRDwaOjA8lqDT6/view?usp=drive_link"><li className='hover:text-purple-900 dark:hover:text-purple-300 cursor-pointer  hover:border-b-2 border-purple-900 dark:border-purple-300'>Resume</li></a>
            </ul>
            <label className="cursor-pointer grid place-items-center lg:ml-[-10rem]">
                <input
                    type="checkbox"
                    className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2 "
                    onChange={handleToggle}
                    checked={theme === 'dark'}
                />
                <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"/>
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
                </svg>
                <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            </label>
    
            {show ? (
                <AiOutlineClose onClick={() => setShow(prev => !prev)} className='menu-icon text-3xl lg:hidden text-purple-900 dark:text-white p-1 border rounded border-purple-900 dark:border-white z-50 fixed right-8' />
            ) : (
                <TfiMenu onClick={() => setShow(prev => !prev)} className='menu-icon text-3xl lg:hidden text-purple-900 dark:text-white p-1 border rounded border-purple-900 dark:border-white z-50 fixed right-8' />
            )}
            {show && (
                <aside className='mobile-menu lg:hidden flex text-lg font-semibold flex-col w-1/2 gap-2 items-center bg-purple-900/25 backdrop-blur-sm absolute top-0 right-0 shadow-xl py-5 pt-12 rounded-bl'>
                    {navItems.map((nav, i) => (
                        <p key={i} className='text-white hover:text-purple-900 dark:hover:text-purple-300 cursor-pointer hover:font-bold' onClick={() => handleClick(nav.path)}>
                            {nav.name}
                        </p>
                    ))}
                </aside>
            )}
        </div>
    );
};

export default Navbar;
