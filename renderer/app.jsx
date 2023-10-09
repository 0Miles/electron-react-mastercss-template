import { useContext } from 'react'
import { ThemeContext } from './theme'

export default function App() {
    const themeContext = useContext(ThemeContext)

    return <>
        <div className="font:40 font:heavy italic mt:50 mb:16 text:center">
            Hello World
        </div>
        <div className="text:center mx:2>button">
            <button onClick={() => themeContext.switchTheme('light')}>Light </button>
            <button onClick={() => themeContext.switchTheme('dark')}>Dark</button>
            <button onClick={() => themeContext.switchTheme('system')}>System</button>
        </div>
    </>
}
