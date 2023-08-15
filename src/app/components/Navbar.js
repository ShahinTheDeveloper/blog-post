import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav>
            <div className="flex space-x-6">
                <div>
                    <Link href={"/"}>Home</Link>
                </div>
                <div>
                    <Link href={"/blog"}>Blog</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
