import React from 'react';
import styles from '../ProsAndCons/prosAndcons.module.css';

const Item = (props) => {
	const { item, isEditingNull, placeholderValue, isEditing, editText, onClick, onChange, onBlur } = props;

	return (
		<li onClick={onClick}>
			{isEditing ? (
				<input
					type="text"
					placeholder={placeholderValue}
					className={styles.valueItem}
					value={editText}
					onChange={(event) => onChange(event.target.value)}
					onBlur={() => {
						if (isEditingNull) {
							onBlur();
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

export { Item };
