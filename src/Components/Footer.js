import React from 'react'
// import './Footer.css'

export const Footer = () => {
    let footerStyle = {
            position: "absolute",
            bottom:"0",
            width: "100%"
    }
    return (
        <footer className='bg-dark text-light py-3' style={footerStyle}>
            <p className='text-center'>Made with ❤️ , 🍕 and ☕️ by Chirayu</p>
            <p className='text-center'>© 2021</p>
        </footer>
    )
}


