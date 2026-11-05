import { motion } from "framer-motion";
import { useState } from "react";

import frFlag from '../../assets/fr-flag.png';
import enFlag from '../../assets/en-flag.png';

export default function Sidebar({ t }) {
    const [current, setCurrent] = useState("home");

    return (
        <div className="w-[13%] h-[100vh] bg-[#F7FCFF] border-[#A0DCFF] border-r-1 flex flex-col justify-center">
            <nav className="flex flex-col p-7">
                {[t.sidebar.home, t.sidebar.about, t.sidebar.projects, t.sidebar.contact].map((link) => (
                    <div className="mb-3 p-3 pl-0 border-b-2 border-[#343434]" key={link} onClick={() => setCurrent(link)}>
                        {current === link && (
                            <motion.div layoutId="highlight" className="highlight-blue" />
                        )}

                        <span>{link}</span>
                    </div>
                ))}
            </nav>

            <div className="flex flex-row justify-start items-center gap-4 p-7 pt-0 mb-4">
                <a href="/fr" className={t.sidebar.language === "fr" ? "rounded-full border-3 border-[#16244E]" : ""}> { /* plz replace ts shit with actual useState things */}
                    <img
                        src={frFlag.src}
                        alt="French"
                        className="w-7 h-7"
                    />
                </a>
                <a href="/en" className={t.sidebar.language === "en" ? "rounded-full border-3 border-[#16244E]" : ""}>
                    <img
                        src={enFlag.src}
                        alt="English"
                        className="w-7 h-7"
                    />
                </a>
            </div>
        </div>
    )
}