import { Outlet } from "react-router-dom"


const Root = () => {
    return (
        <div>
            <section className="header w-full bg-[var(--article-color)] flex items-center justify-center py-5 mb-7 md:mb-10 ">
                <div className="container px-3 md:max-w-[1200px] flex items-center justify-between" >
                    <h1 className="font-bold text-base md:text-xl  ">Where in the World?</h1>
                    <section className="mode__inner flex items-center justify-between gap-3">
                        <img className="w-4 h-4 md:h-5 md:w-5" src="/assets/icon-sun.svg" alt="" />
                        <button className="header-btn text-sm md:text-base">Light mode</button>
                    </section>
                </div>
            </section>
        
            <Outlet />
        


        </div>
    )
}

export default Root