import { useRef, useState, useEffect } from 'react'
import { menuItems } from './MenuData';

function NavWithKeys() {
    const menuRef = useRef([])
    const [currentTab, setCurrentTab] = useState(0);

    useEffect(() => {
        if (menuRef.current[currentTab]) {
            menuRef.current[currentTab].focus();
        }
    }, [currentTab])

    const handleArrowNavigation = (e) => {
        if (e.key === "ArrowRight" || e.key === "Tab") {
            // console.log("right arrow.....")
            setCurrentTab((prevTab) => (prevTab + 1) % menuItems.length)
            e.preventDefault();
        }
        else if (e.key === "ArrowLeft") {
            // console.log("left arrow.....")
            setCurrentTab((prevTab) => (prevTab - 1 + menuItems.length) % menuItems.length);
            e.preventDefault()
        }
        else if (e.key === "Enter") {
            // console.log("enter key pressed.....")
            alert(`${menuItems[currentTab].tabName} selected!!!!!!!!`)
        }
    }

    return (
        <div className='container' style={{ marginTop: 60, justifyItems: 'center' }}>
            <h1>Task 3</h1>
            <p>Build a keyboard-accessible navigation menu. Handle Tab and Arrow key
                events with visual indicators for the focused element.</p>
            <nav style={{ justifyItems: 'center' }}>
                <ul className="nav nav-tabs" onKeyDown={handleArrowNavigation} tabIndex={0}>
                    {menuItems.map((items, index) => (
                        <li className="nav-item" key={index}
                            ref={(e) => menuRef.current[index] = e}
                            tabIndex={-1} >
                            <a className="nav-link" style={{ backgroundColor: "rgb(13, 110, 253)", color: 'white' }}>
                                {items.tabName}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="card m-4" style={{ width: "50rem", height: "20rem", backgroundColor: "rgb(231 231 231)" }}>
                    <div className="card-body" >
                        <h5 className="card-title text-primary" style={{ textAlign: "center" }}>
                            {menuItems[currentTab].tabName}
                        </h5>
                        <p className="card-text">
                            {menuItems[currentTab].body}
                        </p>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default NavWithKeys
