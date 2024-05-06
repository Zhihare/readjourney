import React, { useState } from 'react';
import { FilterFormCont } from './Filter.styled';
import { ButtonLogout } from '../BurgerMenu/BurgerMenu.styled';

interface FilterFormProps {
  onSearch: (filter: { bookTitle: string, author: string }) => void;
}

const FilterForm: React.FC<FilterFormProps> = ({ onSearch }) => {
  const [bookTitle, setBookTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch({ bookTitle, author });
  };

  return (
      <FilterFormCont onSubmit={handleSubmit}>
          <h3>Filters:</h3>
      <div>
              <input 
                  id='bookTitle'
                type="text"
                value={bookTitle}
                placeholder='Enter text'
                onChange={(event) => setBookTitle(event.target.value)}
            />
        <label>
              Book Title:
        </label>
          </div>

          <div>
              <input 
                  id='author'
                  type="text"
                  value={author}
                  placeholder='Enter text'
                onChange={(event) => setAuthor(event.target.value)}
                />
        <label>
        Author:
        </label>
        </div>
      <ButtonLogout className='toApply' type="submit">To Apply</ButtonLogout>
    </FilterFormCont>
  );
};

export default FilterForm;
