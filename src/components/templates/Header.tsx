import Title from "../atoms/Title"

const Header = () => {
    return (
        <header className="w-full h-[70px] absolute top-0 bg-[#4d0a0a] grid place-items-center shadow-lg">
            <Title/>
        </header>
    )
}

export default Header