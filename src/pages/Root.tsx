import { useState } from "react"
import { Outlet } from "react-router-dom"


const Root = () => {
    const [darkMode, setDarkMode] = useState(false)

    const changeMode = () => {
        document.documentElement.classList.toggle('dark')
        setDarkMode(!darkMode)
    }

    return (
        <div>
            <section className="header w-full bg-[var(--text-color)] text-[var(--light-mode-text)] flex items-center justify-center
             py-5 mb-7 md:mb-10 dark:bg-[var(--article-color)] dark:text-[var(--text-color)]">
                <div className="container px-3 md:max-w-[1200px] flex items-center justify-between" >
                    <h1 className="font-bold text-base md:text-xl  ">Where in the World?</h1>
                    <section className="mode__inner flex items-center justify-between gap-3">
                        <img style={{
                            transform: `rotate(${darkMode ? '360deg' : '0deg'})`,
                            transition: 'transform 0.5s ease'
                        }}
                            className="w-4 h-4 md:h-5 md:w-5" src={darkMode ? "/assets/icon-moon.svg" : "/assets/icon-sun.svg"} alt="" />
                        <button
                            onClick={changeMode}
                            className="header-btn text-sm md:text-base">
                            {darkMode ? 'Dark mode' : 'Light mode'}
                        </button>
                    </section>
                </div>
            </section>

            <Outlet />
        </div>
    )
}

export default Root