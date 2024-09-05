import React from 'react';
import styles from '../ProsAndCons/prosAndcons.module.css';
import { clickOnItem, logic } from '../../logic';
import {Item} from '../Item';

const PartCreator = (props) => {
	const { title, arrayOfItems, editingIndex, placeholderValue, setEditText, editText, setEditingIndex, setLists } =
		props;

	const onItemClick = (index) => {
		clickOnItem(index, arrayOfItems, setEditingIndex, setEditText, setLists);
	};

	const onItemChange = (value) => {
		setEditText(value);
	};

	const onItemBlur = () => {
		logic(editText, editingIndex, arrayOfItems, setLists, setEditingIndex, setEditText);
	};

	return (
		<div className={styles.part}>
			<div className={styles.list}>
				<h1 className={styles.title}>{title}</h1>
				<ol>
					{arrayOfItems.map((item, index) => (
						<Item
							key={index}
							item={item}
							placeholderValue={placeholderValue}
							editText={editText}
							isEditing={editingIndex === index}
							isEditingNull={editingIndex !== null}
							onClick={() => onItemClick(index)}
							onChange={(value) => onItemChange(value)}
							onBlur={() => onItemBlur()}
						/>
					))}
				</ol>
			</div>
		</div>
	);
};

export { PartCreator };
