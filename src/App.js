import React from 'react'
import logo from './logo.svg'
import './App.css'
import Keyfinder from './Keyfinder'

function App() {
	return (
		<div className='App'>
			<header
				className='App-header'
				title='extracts the top level keys from JSON objects'
			>
				Keyfinder
			</header>
			<Keyfinder />
		</div>
	)
}

export default App
