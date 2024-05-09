import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';

import { getOwnBooks } from '../../redax/Books/booksThanks';
import { AppDispatch } from '../../redax/store'
import { SelectContainer } from './Select.styled';


interface SelectorProps {}

const SelectorComponent: React.FC<SelectorProps> = () => {
  const dispatch: AppDispatch = useDispatch();
  const options = ['Unread', 'In progress', 'Done', 'All books'];
  const [selectedOption, setSelectedOption] = useState<string>('All books');
  const [selectedOptionstatus, setSelectedOptionstatus] = useState<string>('All books');
useEffect(() => {
    if (selectedOption !== 'All books') {
        dispatch(getOwnBooks({status: selectedOption})); 
    } else{
        dispatch(getOwnBooks({}));
    }
}, [dispatch, selectedOption]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOptionstatus(selectedValue);
   const transformedValue =
    selectedValue === 'Unread' ? 'unread' :
    selectedValue === 'In progress' ? 'in-progress' :
    selectedValue === 'Done' ? 'done' :
    selectedValue;
  
  setSelectedOption(transformedValue);
};

  return (
    <SelectContainer>
      <select onChange={handleOptionChange} value={selectedOptionstatus}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </SelectContainer>
  );
};

export default SelectorComponent;
