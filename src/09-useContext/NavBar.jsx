import { Link, NavLink } from "react-router-dom"
export const NavBar = ({ links }) => (
    <>
        {links.map(({ name, link }) => <Link key={link} to={link}>{name}</Link>)}
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {links.map(({ link, name }) => (<NavLink
                            key={link}
                            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                            to={link}
                        >{name}</NavLink>))}
                    </ul>
                </div>
            </div>
        </nav>
    </>
)

