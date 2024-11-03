import favicone from "../../assets/favicone.jpg"

const navLinks = [
    { id: 0, text: "College", url: "#" },
    { id: 1, text: "Exams", url: "#" },
    { id: 2, text: "Course", url: "#" },
    { id: 3, text: "Carrier", url: "#" },
    { id: 4, text: "Latest Updates", url: "#" },
    { id: 5, text: "More", url: "#" },
]
function Navbar() {
    return (
        <>
            <nav className="w-full h-16 border-b-2">
                <div className="grid grid-cols-2 gap-2 place-content-center h-full container">
                    <div className="logo flex gap-2 w-12">
                        <div className="border-3 rounded-md w-12 text-center h-full p-2">
                            <img src={favicone} alt="Euphora" />
                        </div>

                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Euphoria</span>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="">
                            <ul className="flex justify-center text-xs font-medium gap-6  uppercase items-center">
                                {navLinks.map((link) => (
                                    <li
                                        key={link.id}
                                        className="
                                        hover:border-2 hover:p-2 hover:rounded-md hover:bg-black hover:text-white transition-all duration-100 active:bg-blue-600
                                    ">
                                        <a href={link.url}>{link.text}</a>
                                    </li>
                                ))}
                                <li className="p-2 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300  ">
                                    <a href="#">Login</a>
                                </li>

                                <form className="flex items-center max-w-sm mx-auto">
                                    <label for="simple-search" className="sr-only">Search</label>
                                    
                                    <button type="submit" className="p-2 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                        <span className="sr-only">Search</span>
                                    </button>
                                </form>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar