import React, { useState, useEffect } from 'react'

const Keyfinder = () => {
	const [text, setText] = useState(``)

	const onChange = e => setText(e.target.value)

	const extraction = () => {
		const isJSON = str => {
			try {
				JSON.parse(str)
			} catch (e) {
				return false
			}
			return true
		}

		if (isJSON(text)) {
			const json = JSON.parse(text),
				keys = []
			for (let key in json) keys.push(key)
			return keys.length ? `"${keys.join(`", "`)}"` : ''
		} else {
			return ''
		}
	}

	const noop = () => {}

	return (
		<div id='container'>
			<div className='double'>
				<textarea
					placeholder='Enter object to extract keys from'
					type='text'
					name='obj'
					onChange={onChange}
					value={text}
				/>
			</div>
			<div className='double'>
				<textarea
					readOnly
					placeholder='Copy and paste the keys when displayed here'
					type='text'
					name='keys'
					value={extraction()}
				/>
			</div>
		</div>
	)
}

export default Keyfinder
