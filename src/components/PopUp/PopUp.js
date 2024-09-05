import React, { useEffect, useState } from 'react';
import styles from './popUp.module.css';
import { popUpData } from '../../data';

const PopUp = () => {
	const [status, setStatus] = useState(() => {
		const hasStatus = localStorage.getItem('status');
		return hasStatus ? JSON.parse(hasStatus) : false;
	});

	useEffect(() => {
		localStorage.setItem('status', JSON.stringify(status));
	}, [status]);

	return (
		<div className={status ? styles.hide : styles.globalBox}>
			<div className={styles.box}>
				<h1>How To Use</h1>
				<ul>
					{popUpData.map((item) => (
						<li key={item.id}>{item.label}</li>
					))}
				</ul>
				<button
					className={styles.ok}
					onClick={() => {
						setStatus(true);
					}}>
					OK
				</button>
			</div>
		</div>
	);
};

export { PopUp };
