/** @format */

import React, { useState, useEffect } from 'react';

const ConnectDevice: React.FC = () => {
	const [devices, setDevices] = useState<{ name: string; address: string }[]>(
		[]
	);
	const [selectedDevice, setSelectedDevice] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const simulateDeviceDiscovery = () => {
			setTimeout(() => {
				setDevices([
					{ name: 'Shivanshu Iphone', address: '00:11:22:33:44:55' },
					{ name: 'Shivanshu Android', address: 'AA:BB:CC:DD:EE:FF' },
					{ name: 'YH Android', address: 'AA:BB:CC:DD:EE:FF' },
					{ name: 'YH Iphone', address: 'AA:BB:CC:DD:EE:FF' },
				]);
				setLoading(false);
			}, 5000);
		};

		simulateDeviceDiscovery();

		return () => {};
	}, []);

	const handleConnect = () => {
		console.log('Connecting to device:', selectedDevice);
	};

	useEffect(() => {
		const hideLoader = setTimeout(() => {
			setLoading(false);
		}, 5000);

		return () => clearTimeout(hideLoader);
	}, []);

	return (
		<div className='min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 flex flex-col justify-center items-center'>
			<h1 className='text-4xl font-bold mb-6 text-white '>
				Connect Your Device
			</h1>
			<div className='max-w-lg mx-auto px-8 py-6 bg-white rounded-lg shadow-md'>
				<p className='text-lg mb-4 text-blue-600'>
					Follow the steps below to connect your device:
				</p>
				<ol className='list-decimal list-inside mb-4 text-gray-800'>
					<li>Turn on Bluetooth on your device.</li>
					<li>Select your device from the list below.</li>
					<li>Click the "Connect" button to pair with your device.</li>
				</ol>
				<p className='mt-4 mb-3 text-black font-bold py-2 rounded w-full'>
					{' '}
					Available Devices
				</p>
				{loading ? (
					<div className='loader-wrapper'>
						<img
							src='./loader.gif'
							alt='Loader'
							className='mx-auto'
							style={{ height: '60px', width: '100px' }}
						/>
					</div>
				) : (
					<div className='overflow-y-auto max-h-60 mb-4'>
						{devices.length > 0 ? (
							<ul className='space-y-2 text-black'>
								{devices.map((device, index) => (
									<li
										key={index}
										className='flex items-center justify-between py-2 px-4 bg-gray-200 rounded'>
										<span>{device.name}</span>
										<span>{device.address}</span>
									</li>
								))}
							</ul>
						) : (
							<p className='text-gray-500'>No devices found.</p>
						)}
					</div>
				)}
				<select
					className='block w-full text-black bg-white border border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:border-blue-500'
					value={selectedDevice}
					onChange={(e) => setSelectedDevice(e.target.value)}>
					<option value=''>Select a Device</option>
					{devices.map((device, index) => (
						<option key={index} value={device.address}>
							{device.name}
						</option>
					))}
				</select>
				<button
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full'
					onClick={handleConnect}
					disabled={!selectedDevice}>
					Connect
				</button>
			</div>
		</div>
	);
};

export default ConnectDevice;
