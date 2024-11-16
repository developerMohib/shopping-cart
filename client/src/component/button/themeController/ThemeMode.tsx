import { IoMoonSharp } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import React, { useEffect, useState } from "react";

const ThemeMode: React.FC = () => {
    const [isDark, setIsDark] = useState<boolean>(false);
    const [isRotating, setIsRotating] = useState<boolean>(false);

    // effect to load theme on local storage
    useEffect(() => {
        const saveTheme: string | null = localStorage.getItem("theme");
        if (saveTheme === "dark") {
            setIsDark(true)
            document.documentElement.setAttribute("data-theme", "dark")
        } else {
            document.documentElement.setAttribute("data-theme", "light")
        }
    }, [])

    const handleThemeChange = (): void => {
        setIsDark(!isDark)
        setIsRotating(true)
        if (isDark) {
            document.documentElement.setAttribute("data-theme", "light")
            localStorage.setItem("theme", "light")
        } else {
            document.documentElement.setAttribute("data-theme", "dark")
            localStorage.setItem("theme", "dark")
        }
        setTimeout(() => {
            setIsRotating(false)
        }, 800);
    }


    return (
        <button className="p-2 m-1 text-center bg-textWhite border border-bg rounded-md text-text hover:bg-bg dark:hover:bg-gray-700" aria-label="Toggle Theme" onClick={handleThemeChange}> {isDark ? <IoIosSunny className={`h-6 w-6 ${isRotating ? "animate-spin" : ""}`} /> : <IoMoonSharp className={`w-6 h-6 ${isRotating ? "animate-spin" : ""}`} />} </button>
    );
};

export default ThemeMode;