import './Sidebar.css';
import logo from '../../assets/logo.jpeg'

const Sidebar = ({ SidebarOpen, closeSidebar }) => {
    return (
        <div className={SidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                <img src={logo} alt="logo" />
                <h1>Dashboard</h1>
            </div>

            <i
            onClick={() => closeSidebar()}
            className="fa- fa-times"
            id="SidebarIcon"
            aria-hidden="true"
            ></i>
        </div>

        <div className ="sidebar__menu">
            <div className="sidebar__link active_menu_link">
                <i className="fa- fa-minus-square"></i>
                <a href="#">Home</a>
            </div>
            <h2>User</h2>
            <div className="sidebar__link">
                <i className="fa- fa-tachometer"></i>
                <a href="#">Área de gerenciamento</a>
            </div>

            <div className="sidebar__link">
                <i className="fa- fa-building"></i>
                <a href="#">Despesas</a>
            </div>

            <div className="sidebar__link">
                <i className="fa- fa-archive"></i>
                <a href="#">Receitas</a>
            </div>

            <div className="sidebar__link">
                <i className="fa- fa-tachometer"></i>
                <a href="#">Parcelados</a>
            </div>

            <div className="sidebar__link">
                <i className="fa- fa-bars"></i>
                <a href="#">Categorias</a>
            </div>

            <div className="sidebar__logout">
                <i className="fa- fa-power-off"></i>
                <a href="#">Log out</a>
            </div>

        </div>
        </div>
    )
}

export default Sidebar;