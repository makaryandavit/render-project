import React, { useEffect, useRef, useState } from "react";
import styles from "./prosAndcons.module.css";

const ProsAndCons = () => {
  // Solve 1

  // const [listsPros, setListsPros] = useState([
  //   "It's realy tasty11111111111",
  //   "It's realy tasty222222",
  //   "It's realy tasty333333333",
  //   "It's realy tasty444444444",
  //   "",
  // ]);

  // const [listsCons, setListsCons] = useState(["Makes me fat", "Too Expensive",""]);

  // Solve 1

  // Solve 2

  const [listsPros, setListsPros] = useState(() => {
    const savedPros = localStorage.getItem("pros");
    return savedPros
      ? JSON.parse(savedPros)
      : [
          "It's really tasty",
          "It's really tasty",
          "It's really tasty",
          "It's really tasty",
          "",
        ];
  });

  const [listsCons, setListsCons] = useState(() => {
    const savedCons = localStorage.getItem("cons");
    return savedCons
      ? JSON.parse(savedCons)
      : ["Makes me fat", "Too expensive", ""];
  });

  // Solve 2

  const [editingProIndex, setEditingProIndex] = useState(null);
  const [editingConIndex, setEditingConIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    localStorage.setItem("pros", JSON.stringify(listsPros));
  }, [listsPros]);

  useEffect(() => {
    localStorage.setItem("cons", JSON.stringify(listsCons));
  }, [listsCons]);

  const prosClick = (index) => {
    setEditingProIndex(index);
    setEditingText(listsPros[index]);

    if (index === listsPros.length - 1) {
      setListsPros([...listsPros, ""]);
    }
  };

  const consClick = (index) => {
    setEditingConIndex(index);
    setEditingText(listsCons[index]);
    if (index === listsCons.length - 1) {
      setListsCons([...listsCons, ""]);
    }
  };

  const saveChanges = () => {
    if (editingProIndex !== null) {
      if (editingText.length === 0) {
        const listsWithoud = listsPros.filter(
          (item, index) => index !== editingProIndex
        );
        setListsPros(listsWithoud);
      } else {
        const updatedPros = [...listsPros];
        updatedPros[editingProIndex] = editingText;
        setListsPros(updatedPros);
      }
      setEditingProIndex(null);
    } else if (editingConIndex !== null) {
      if (editingText.length === 0) {
        const listsWithoud = listsCons.filter(
          (item, index) => index !== editingConIndex
        );
        setListsCons(listsWithoud);
      } else {
        const updatedCons = [...listsCons];
        updatedCons[editingConIndex] = editingText;
        setListsCons(updatedCons);
      }
      setEditingConIndex(null);
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
                <li key={index} onClick={() => prosClick(index)}>
                  {editingProIndex === index ? (
                    <input
                      type="text"
                      placeholder="Write your Pros"
                      className={styles.valueItem}
                      value={editingText}
                      onChange={(e) => {
                        setEditingText(e.target.value);
                      }}
                      onBlur={saveChanges}
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
          <div className={styles.list}>
            <ol>
              {listsCons.map((value, index) => (
                <li key={index} onClick={() => consClick(index)}>
                  {editingConIndex === index ? (
                    <input
                      type="text"
                      placeholder="Write your Cons"
                      className={styles.valueItem}
                      value={editingText}
                      onChange={(e) => {
                        setEditingText(e.target.value);
                      }}
                      onBlur={saveChanges}
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
      </main>
    </div>
  );
};

export { ProsAndCons };
