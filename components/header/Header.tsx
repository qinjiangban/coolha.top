"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { RiCompass3Fill, RiCompass3Line, RiUserFill, RiUserLine, RiSearchLine, RiChat1Line, RiChat1Fill, RiHomeFill, RiHomeLine } from "react-icons/ri";
import { MenuButton } from "./MenuButton";
export default function Header() {
    const pathname = usePathname();
    return (
        <>
            <HeaderC />
        </>

    )
}
function HeaderC() {

    return (
        <div className=" hidden md:flex">



            <div className="navbar w-full py-0 px-0 md:px-4  bg-base-100   fixed top-0 left-0 z-50">


                <div className="navbar-start gap-4">

                    <Link href={`/`} className="avatar w-12 h-12 ">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Image
                                src='/favicon.ico'
                                width={40}
                                height={40}
                                className="w-12 h-12 rounded-full "
                                alt='Q'
                            />
                        </motion.div>
                    </Link>

                    <label className="input w-24 lg:w-56 input-bordered flex ">
                        <input type="text" className="grow" placeholder="搜索" />
                        <RiSearchLine className=" w-8 h-8" />
                    </label>

                </div>


                <div className="navbar-center hidden sm:flex">
                    <ul className="menu menu-horizontal gap-x-2 w-auto">
                        {/*                         <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li> */}
                        <NavbarLink />
                    </ul>
                </div>

                <div className="navbar-end">
                    <MenuButton />
                </div>

            </div>


            {/*             {["/find", "/message/chat", "/profile"].includes(pathname) ? (
                <div className="sm:hidden flex navbar border-b sm:border-0 w-100vw p-0">
                    {pathname === "/find" && <Find />}
                    {pathname === "/message/chat" && <Message />}
                    {pathname && pathname.startsWith("/profile") && null}
                    {pathname === "/profile" && <Profile />}
                    {pathname === `/@` && <Users />}
                </div>
            ) : null} */}




        </div>)
}

function NavbarLink() {
    const pathname = usePathname();
    const links = [
        {
            title: '首页',
            href: '/home',
            iconActive: RiHomeFill,
            iconInactive: RiHomeLine,
            startsWith: '/home'
        },
        {
            title: '发现',
            href: '/find',
            iconActive: RiCompass3Fill,
            iconInactive: RiCompass3Line,
            startsWith: '/find'
        },
        {
            title: '消息',
            href: '/message/chat',
            iconActive: RiChat1Fill,
            iconInactive: RiChat1Line,
            startsWith: '/message'
        },
        {
            title: '用户',
            href: '/profile',
            iconActive: RiUserFill,
            iconInactive: RiUserLine,
            startsWith: '/profile'
        }
    ];
    return (
        <>
            {links.map(link => (
                <li key={link.href}>
                    <Link
                        href={link.href}
                        className={`btn  ${pathname && pathname.startsWith(link.startsWith) ? " text-info " : ""}`}
                    >
                        {pathname.startsWith(link.startsWith) ? <link.iconActive className="size-8" /> : <link.iconInactive className="size-8" />}
                        <span className=" hidden md:flex text-lg">
                            {link.title}
                        </span>
                    </Link>
                </li>
            ))}

        </>
    )
}