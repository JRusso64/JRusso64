import './CustomAppBar.css';
import Typography from '@mui/material/Typography';

const AppBar = () => {
    return(
        <>
            <Typography variant="h6" component="div">John Russo</Typography>

            <ul className="nav-list">
                <li><a href="/">Website</a></li>
                <li><a href="https://github.com/JRkusso64">Github</a></li>
                <li><a href="/resume">Resume/Contact Info</a></li>
            </ul>
        </>
    );
};

export default AppBar;
