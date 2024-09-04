import React from 'react';
import styles from '../ProsAndCons/prosAndcons.module.css';
import { clickOnItem, logic } from '../../logic';
import Item from '../Ui/Item';

const PartCreator = ({
	title,
	arrayOfItems,
	editingIndex,
	placeholderValue,
	setEditText,
	editText,
	setEditingIndex,
	setLists,
}) => {
	return (
		<div className={styles.part}>
			<div className={styles.list}>
				<h1 className={styles.title}>{title}</h1>
				<ol>
					{arrayOfItems.map((item, index) => (
						<Item
							key={index}
							item={item}
							index={index}
							arrayOfItems={arrayOfItems}
							setEditingIndex={setEditingIndex}
							setEditText={setEditText}
							setLists={setLists}
							editingIndex={editingIndex}
							placeholderValue={placeholderValue}
							editText={editText}
						/>
					))}
				</ol>
			</div>
		</div>
	);
};

export { PartCreator };
