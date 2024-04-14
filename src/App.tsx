import React from 'react'
import './App.css'

const App = () => {
	return (
		<div className='App'>
			<Header />
			<Technologies />
		</div>
	)
}

const Header = () => {
	return (
		<div>
			<a href='#s'>Home</a>
			<a href='#s'>News</a>
			<a href='#s'>Contacts</a>
		</div>
	)
}

const Technologies = () => {
	return (
		<div>
			<ul>
				<li>Js</li>
				<li>React</li>
				<li>Html</li>
				<li>CSS</li>
			</ul>
		</div>
	)
}

export default App
