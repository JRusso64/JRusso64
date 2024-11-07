import './AppBar.css';

const AppBar = () => {
    return(
        <>
            <h1>John Russo</h1>

            <ul className="nav-list">
                <li><a href="#website">Website</a></li>
                <li><a href="#github">Github</a></li>
                <li><a href="#resume">Resume/Contact Info</a></li>
            </ul>
        </>
    );
};

export default AppBar;
