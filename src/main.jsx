import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter, Route, Routes } from 'react-router'
import Away from './Away.jsx'
import Content from './Content.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<HashRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="/away" element={<Away />} />

					<Route path="/content" element={<Content />} />

				</Route>
			</Routes>
		</HashRouter>
	</StrictMode>,
)
