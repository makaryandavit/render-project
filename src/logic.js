export const clickOnItem = (index, arrayOfItems, setIndex, setText, setItemInArray) => {
	setIndex(index);
	setText(arrayOfItems[index]);
	if (index === arrayOfItems.length - 1) {
		setItemInArray([...arrayOfItems, '']);
	}
};

export const logic = (editedText, editingIndex, arrayOfItems, setItems, setEditingIndex, setEditedText) => {
	if (editedText.length === 0) {
		const restList = arrayOfItems.filter((item, index) => index !== editingIndex);
		setItems(restList);
	} else {
		const updatedParts = [...arrayOfItems];
		updatedParts[editingIndex] = editedText;
		setItems(updatedParts);
	}
	setEditingIndex(null);
	setEditedText('');
};
