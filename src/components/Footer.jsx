const footerStyles = {
    backgroundColor: '#ccc',
    padding: '50px',
    color: '#555'
}



function Footer() {
    return (
        <footer style={footerStyles} className="row justify-between align-center">
            <p>Created by Nadav Glikshtern</p>
            <p>&copy; 2024 Rutgers Bootcamp</p>
        </footer>
    )
}

export default Footer