import React, { useState } from "react";
import styles from "./prosAndcons.module.css";

const ProsAndCons = () => {
  const [listsPros, setListsPros] = useState([
    "It's realy tasty11111111111",
    "It's realy tasty222222",
    "It's realy tasty333333333",
    "It's realy tasty444444444",
  ]);

  const [listsCons, setListsCons] = useState(["Makes me fat", "Too Expensive"]);
  

  const [editingProIndex, setEditingProIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleProClick = (index) => {
    setEditingProIndex(index);
    setEditingText(listsPros[index]);
  };


  onkeydown = (e) => {
    
  }

  const handleSaveEdit = () => {
    if (editingProIndex !== null) {
      if(editingText.trim().length === 0){
        const listsWithoud = listsPros.filter((item,index) => (index !== editingProIndex));
        setListsPros(listsWithoud)
      }else{
        const updatedPros = [...listsPros];
        updatedPros[editingProIndex] = editingText;
        setListsPros(updatedPros);
      }
      setEditingProIndex(null);
      
    } 
    setEditingText("");
  };

  return (
    <div className={styles.container}>
      <header>
        <p>Should I eat at McDonalds?</p>
      </header>
      <main>
        <div className={styles.prosPart}>
          <h1 className={styles.title}>Pros</h1>
          <div className={styles.list}>
            <ol>
            {listsPros.map((value, index) => (
              <li key={index} onClick={() => handleProClick(index)}>
                {editingProIndex === index ? (
                  <input
                    type="text"
                    className={styles.valueItem}
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    onBlur={handleSaveEdit}
                    autoFocus
                  />
                ) : (
                  value
                )}
              </li>
            ))}
            </ol>
          </div>
        </div>
        <div className={styles.consPart}>
          <h1 className={styles.title}>Cons</h1>
          <div className={styles.list}></div>
        </div>
      </main>
    </div>
  );
};

export { ProsAndCons };