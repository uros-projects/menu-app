import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import data from './data';

const allCategories = ['all', ...new Set(data.map( item => item.category ))];

function App() {
	const [menuItems, setMenuItems] = useState(data)
	const [categories, setCategories] = useState(allCategories)

	const filterItems = category => {
		if(category === 'all') {
			setMenuItems(data); // Reset previous filter to all items			
			return;
		}

		// Apply filter to a passed in category name
		const newItems = data.filter( item => item.category === category)
		setMenuItems(newItems)
	}

	return (
		<main>
			<section className='menu section'>
				<div className='title'>
					<h2>our menu</h2>
					<div className='underline'></div>
				</div>

				<Categories categories={categories} filterItems={filterItems} />
				<Menu items={menuItems} />
			</section>
		</main>
	);
}

export default App;
