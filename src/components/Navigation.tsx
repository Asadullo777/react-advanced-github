import { Link } from "react-router-dom";

export function Navigation() {
    return(
        <nav className="flex justify-between items-center h-[50px] px-5 shadow-md   bg-cyan-600 text-white ">
            <h3 className=" font-bold  font-serif">Github Поиск</h3>

            <span>
                {/* при нажатие на главная переходится на главную по умалчанию стоит на главной to=""  */}
                <Link to="/" className=" mr-2  font-serif">Главная</Link>
                {/* при нажатие на Сохраненные переходится на Сохраненные to="/favourites"  */}
                <Link to="/favourites" className=" font-serif">Сохраненные</Link>
            </span>
        </nav>
        )
}