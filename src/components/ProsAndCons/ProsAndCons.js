import React, { useEffect, useState } from 'react';
import styles from './prosAndcons.module.css';
import { PartCreator } from '../PartCreator';

const ProsAndCons = () => {
	const [listsPros, setListsPros] = useState(() => {
		const savedPros = localStorage.getItem('pros');

		return savedPros
			? JSON.parse(savedPros)
			: ["It's really tasty", "It's really tasty", "It's really tasty", "It's really tasty", ''];
	});

	const [listsCons, setListsCons] = useState(() => {
		const savedCons = localStorage.getItem('cons');

		return savedCons ? JSON.parse(savedCons) : ['Makes me fat', 'Too expensive', ''];
	});

	const [editingProIndex, setEditingProIndex] = useState(null);
	const [editingConIndex, setEditingConIndex] = useState(null);
	const [editingText, setEditingText] = useState('');

	useEffect(() => {
		localStorage.setItem('pros', JSON.stringify(listsPros));
	}, [listsPros]);

	useEffect(() => {
		localStorage.setItem('cons', JSON.stringify(listsCons));
	}, [listsCons]);

	return (
		<div className={styles.container}>
			<header>
				<p>Should I eat at McDonalds?</p>
			</header>
			<main>
				<PartCreator
					title="Pros"
					arrayOfItems={listsPros}
					editingIndex={editingProIndex}
					placeholderValue={'Write Your Pros'}
					setEditText={setEditingText}
					editText={editingText}
					setEditingIndex={setEditingProIndex}
					setLists={setListsPros}
				/>
				<PartCreator
					title="Cons"
					arrayOfItems={listsCons}
					editingIndex={editingConIndex}
					placeholderValue={'Write Your Cons'}
					setEditText={setEditingText}
					editText={editingText}
					setEditingIndex={setEditingConIndex}
					setLists={setListsCons}
				/>
			</main>
		</div>
	);
};

export { ProsAndCons };
