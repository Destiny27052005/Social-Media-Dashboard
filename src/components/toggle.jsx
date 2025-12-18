import { useState, useEffect } from "react";

function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const cards = document.querySelectorAll('.card')
        const overviews = document.querySelectorAll('.overview')
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
        if (isDarkMode) {
            for (const card of cards) {
                card.setAttribute('data-theme', 'dark')
            }
            for (const overview of overviews) {
                overview.setAttribute('data-theme', 'dark')
            }
            document.querySelector('.toggle-container').setAttribute('data-theme', 'dark')
        } else {
            for (const card of cards) {
                card.setAttribute('data-theme', 'light')
            }
            for (const overview of overviews) {
                overview.setAttribute('data-theme', 'light')
            }
            document.querySelector('.toggle-container').setAttribute('data-theme', 'light')
        }
    }, [isDarkMode])

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.className = isDarkMode ? 'Light-theme' : 'dark-theme'
    };
    return (
        <div className="toggle-container">
            <span className="toggle-label" style={{ color: 'var(--Gray-400-Text)' }}>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
            <button className={`toggle-btn ${isDarkMode ? 'on' : 'off'}`} onClick={toggleTheme} aria-label="Toggle Theme">
                <div className="toggle-handle"></div>
            </button>
        </div>
    )
}


export default ThemeToggle
