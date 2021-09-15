import React, { useState, useEffect } from "react";
import data from "./fixtures/data.json";

//IN THIS FILE INCLUDES ALL THE MAIN FILTERING AND DISPLAY LOGIC

const Context = React.createContext();

function ContextProvider({ children }) {
  //I USE 2 STATES ONE FOR STORING DATA, OTHER TO STORE TAGS SELECTED BY THE USER
  const [badgeData, setBadgeData] = useState([]);
  const [filterTags, setFilterTags] = useState([]);

  //IF A TAG IS ALREADY IN THE FILTERTAGS ARRAY, I DONT INCLUDE IT
  function handleFilter(e) {
    const newTag = e.target.innerHTML;
    if (!filterTags.includes(newTag)) {
      setFilterTags((prevState) => [...prevState, newTag]);
    }
  }

  //REMOVES A TAG WHEN PRESSING CLOSE BUTTON IN SELECTED TAG
  function handleCloseButton(item) {
    setFilterTags((prevState) => prevState.filter((value) => value !== item));
  }

  //ALL ENTRIES IN DATA STORE ARE FILTERED BASEN ON TAG VALUE
  function filterBadges() {
    let filteredBadges = data;
    filterTags.map((tag) => {
      filteredBadges = filteredBadges.filter(
        (item) =>
          item.role === tag ||
          item.level === tag ||
          item.languages.includes(tag) ||
          item.tools.includes(tag)
      );
    });
    return filteredBadges;
  }

  //I USE USEEFFECT HOOK TO RERENDER THE NEW FILTERED LIST WHEN THE FILTERTAGS ARRAY UPDATES
  useEffect(() => {
    setBadgeData(filterBadges());
  }, [filterTags]);

  //I RETURN THE CONTEXT TO PLACES NEEDED
  return (
    <Context.Provider
      value={{ badgeData, handleFilter, filterTags, handleCloseButton }}
    >
      {children}
    </Context.Provider>
  );
}

//CONTEXT EXPORTED
export { ContextProvider, Context };
