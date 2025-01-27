import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink, Outlet } from 'react-router'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div>
			<header> React router </header>
			<nav>
				<NavLink to="/" end> Go home </NavLink>
				<NavLink to="/away"> Go away </NavLink>
				<NavLink to="/content"> Content </NavLink>
			</nav>
			<p> Hash router </p>
			<Outlet />

		</div>

	)
}

export default App
