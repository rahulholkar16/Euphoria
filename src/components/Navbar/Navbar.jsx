import Logo from "../../assets/mainLogo.png"
import Btn from "../btn/Btn"
import ContentWrapper from "../contentWrapper/ContentWrapper"

const navLinks = [
    { id: 0, text: "List Your Dream", url: "#" },
    { id: 1, text: "New in Bag", url: "#" },
    { id: 2, text: "Language", url: "#" },
]
function Navbar() {
    return (
        <nav className="h-16 border-b-1 bg-black shadow-lg text-white">
            <ContentWrapper>
            
                <div className="flex justify-between gap-2  h-full">
                    {/* Navbar Logo */}
                    <div className="logo w-44">
                        <img src={Logo} alt="Euphora" className="m-2" />
                    </div>
                    {/* Navbar Links */}
                    
                        {/* NavLinks */}
                        <div className="flex gap-7 items-center font-medium">
                            {navLinks.map((links)=>(
                                <a key={links.id} className="hover:outline-none  hover:px-[10px] hover:py-2 rounded-full hover:bg-green-600 hover:shadow-2xl transition-all transition-ease" href={links.url}>{links.text}</a>
                            ))}
                        </div>
                        {/* Login and Search */}
                        <Btn content=" Login " />
                    
                </div>
            </ContentWrapper>
        </nav>
    )
}

export default Navbar