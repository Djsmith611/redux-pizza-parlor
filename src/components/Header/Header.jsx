import AppBar from '@mui/material/AppBar';

function Header() {

    return (
            <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
                <h1>Prime Pizza</h1>
            </AppBar>
    )
};

export default Header;