export const clickOnItem = (
  index,
  arrayOfItems,
  setIndex,
  setText,
  setItemInArray
) => {
  setIndex(index);
  setText(arrayOfItems[index]);
  if (index == arrayOfItems.length - 1) {
    setItemInArray([...arrayOfItems, ""]);
  }
};

export const logic = (
  poxvoxText,
  poxvoxIndex,
  arrayOfItems,
  setItems,
  poxvoxIndexFunc,
  setPoxvoxText
) => {
  if (poxvoxText.length === 0) {
    const restList = arrayOfItems.filter(
      (item, index) => index !== poxvoxIndex
    );
    setItems(restList);
  } else {
    const updatedParts = [...arrayOfItems];
    updatedParts[poxvoxIndex] = poxvoxText;
    setItems(updatedParts);
  }
  poxvoxIndexFunc(null);
  setPoxvoxText("");
};
