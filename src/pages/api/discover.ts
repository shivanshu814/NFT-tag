/** @format */

// pages/api/discover.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import noble from 'noble';

type BluetoothDevice = {
	address: string;
	name: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<BluetoothDevice[]>
) {
	// Array to store discovered Bluetooth devices
	const discoveredDevices: BluetoothDevice[] = [];

	// Start scanning for Bluetooth devices
	noble.on('stateChange', (state) => {
		if (state === 'poweredOn') {
			console.log('Scanning for Bluetooth devices...');
			noble.startScanning();
		} else {
			noble.stopScanning();
			console.log('Bluetooth scanning stopped.');
		}
	});

	// Handle discovered devices
	noble.on('discover', (peripheral) => {
		const device: BluetoothDevice = {
			address: peripheral.address,
			name: peripheral.advertisement.localName || 'Unknown Device',
		};
		discoveredDevices.push(device);
		console.log('Found device:', device.name, device.address);
	});

	// Send discovered devices as response when scanning completes
	noble.on('scanStop', () => {
		console.log('Bluetooth scanning completed.');
		console.log('Discovered devices:', discoveredDevices);
		res.status(200).json(discoveredDevices);
	});
}
