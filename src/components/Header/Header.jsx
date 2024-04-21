function Header({theme, ThemeProvider}) {

    return (
        <ThemeProvider theme={theme}>
            <div backgroundColor='primary.main'>
                <h1>Prime Pizza</h1>
            </div>
        </ThemeProvider>
    )
};

export default Header;