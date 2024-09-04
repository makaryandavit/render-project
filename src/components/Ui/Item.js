import React from 'react';
import { clickOnItem, logic } from '../../logic';
import styles from '../ProsAndCons/prosAndcons.module.css';

const Item = ({
	item,
	index,
	arrayOfItems,
	setEditingIndex,
	setEditText,
	setLists,
	editingIndex,
	placeholderValue,
	editText,
}) => {
	return (
		<li onClick={() => clickOnItem(index, arrayOfItems, setEditingIndex, setEditText, setLists)}>
			{editingIndex === index ? (
				<input
					type="text"
					placeholder={placeholderValue}
					className={styles.valueItem}
					value={editText}
					onChange={(e) => {
						setEditText(e.target.value);
					}}
					onBlur={() => {
						if (editingIndex !== null) {
							logic(editText, editingIndex, arrayOfItems, setLists, setEditingIndex, setEditText);
						}
					}}
					autoFocus
				/>
			) : (
				item
			)}
		</li>
	);
};

export default Item;
