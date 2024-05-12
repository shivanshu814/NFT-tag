/** @format */

// pages/index.tsx

import Head from 'next/head';
import Link from 'next/link';

const Home: React.FC = () => {
	return (
		<div className='min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 flex flex-col justify-center items-center'>
			<Head>
				<title>NFT Tag</title>
				<meta name='description' content='Welcome to NFT Tag' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='text-center text-white'>
				<h1 className='text-4xl font-bold mb-6' style={{ marginTop: '2rem' }}>
					Welcome to NFT Tag
				</h1>

				<p className='text-lg text-gray-300 mb-8'>
					NFT Tag is a revolutionary way to track your belongings using
					blockchain technology. Easily tag your items and monitor their
					whereabouts securely on the blockchain.
				</p>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{/* Placeholder for Image */}
					<div
						className='bg-gray-800 p-6 rounded-lg'
						style={{ marginLeft: '5rem' }}>
						<img
							src='https://taptag.shop/cdn/shop/articles/IMG_7210.jpg?v=1673564822&width=4032'
							alt='NFT Tag'
							className='w-full h-auto rounded-lg'
						/>
					</div>

					{/* Feature Section */}
					<div className='flex flex-col justify-center'>
						<h2 className='text-2xl font-bold mb-4'>Key Features</h2>
						<ul className='text-lg text-gray-300'>
							<li className='mb-2'>
								<span className='text-yellow-300 mr-2'>•</span> Real-time
								tracking of your belongings
							</li>
							<li className='mb-2'>
								<span className='text-yellow-300 mr-2'>•</span> Securely store
								item details on the blockchain
							</li>
							<li className='mb-2'>
								<span className='text-yellow-300 mr-2'>•</span> Easy-to-use
								mobile app interface
							</li>
							<li className='mb-2'>
								<span className='text-yellow-300 mr-2'>•</span> Customizable
								alerts and notifications
							</li>
						</ul>
					</div>
				</div>

				<Link
					href='/connect-device'
					style={{ marginLeft: '50rem' }}
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8'>
					Connect Your Device
				</Link>
			</main>
		</div>
	);
};

export default Home;
