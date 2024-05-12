/** @format */

// pages/secure.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SecurePage: React.FC = () => {
	const [message, setMessage] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('/api/secure');
				setMessage(response.data.message);
			} catch (error) {
				console.error('Error retrieving secure data:', error);
			}
		};
		fetchData();
	}, []);

	return (
		<div>
			<h1>Secure Page</h1>
			<p>{message}</p>
		</div>
	);
};

export default SecurePage;
