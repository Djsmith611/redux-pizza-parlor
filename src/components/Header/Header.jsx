import AppBar from '@mui/material/AppBar';

function Header({theme, ThemeProvider}) {

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
                <h1>Prime Pizza</h1>
            </AppBar>
        </ThemeProvider>
    )
};

export default Header;