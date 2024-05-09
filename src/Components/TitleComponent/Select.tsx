import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectMyLibrary } from '../../redax/Books/booksSelector';
import { setMyBooks } from '../../redax/Books/booksSlice';
import { getOwnBooks } from '../../redax/Books/booksThanks';
import { AppDispatch } from '../../redax/store'

interface SelectorProps {}

const SelectorComponent: React.FC<SelectorProps> = () => {
  const dispatch: AppDispatch = useDispatch();
  const options = ['unread', 'in-progress', 'done', 'All books'];
  const [selectedOption, setSelectedOption] = useState<string>('All books');

useEffect(() => {
    if (selectedOption !== 'All books') {
        dispatch(getOwnBooks({status: selectedOption})); 
    } else{
        dispatch(getOwnBooks({}));
    }
}, [dispatch, selectedOption]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <SelectContaine>
      <select onChange={handleOptionChange} value={selectedOption}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </SelectContaine>
  );
};

export default SelectorComponent;
