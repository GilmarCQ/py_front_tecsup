import React from "react";
import OllaComunPage from "@/app/olla-comun/page";
import Navbar from "@/app/componentes/Navbar";

const layout = ({children}) => {
    return (
        <>
            <main className="min-h-screen max-h-screen min-w-screen max-w-screen flex flex-col">
                <Navbar/>
                {children}
            </main>
        </>
    )
}

export default layout;
