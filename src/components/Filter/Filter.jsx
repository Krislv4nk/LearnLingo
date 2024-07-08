

import { useState } from 'react';
import Select from 'react-select';
import { getTeachersByLanguage, getTeachersByLevel, getTeachersByPrice } from '../../Firebase/Teachers';
import { v4 as uuidv4 } from 'uuid';
import { languageOptions, levelOptions, priceOptions } from '../../Firebase/constants';
import { TeacherCard } from '../TeachersList/TeacherCard/TeacherCard';
import css from './Filter.module.css';

export const Filter = ({ onApply }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null); 
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  

  const handleChangeLanguage = async (selectedOption) => {
    setSelectedLanguage(selectedOption);
     if (selectedOption && selectedOption.value) {
      try {
        const teachers = await getTeachersByLanguage(selectedOption.value);
        setFilteredTeachers(teachers);
        onApply(selectedOption);
      } catch (error) {
        console.error('Error fetching filtered teachers:', error);
      }
    } else {
      setFilteredTeachers([]);
    }
  };

  const handleChangeLevel = async (selectedOption) => {
  setSelectedLevel(selectedOption);
  if (selectedOption && selectedOption.value) {
    try {
      const teachers = await getTeachersByLevel(selectedOption.value);
      setFilteredTeachers(teachers);
      onApply(selectedOption);
    } catch (error) {
      console.error('Error fetching filtered teachers:', error);
    }
  } else {
    setFilteredTeachers([]);
  }
};

const handleChangePrice = async (selectedOption) => {
  setSelectedPrice(selectedOption);
  if (selectedOption && selectedOption.value) {
    try {
      const teachers = await getTeachersByPrice(selectedOption.value);
      setFilteredTeachers(teachers);
      onApply(selectedOption);
    } catch (error) {
      console.error('Error fetching filtered teachers:', error);
    }
  } else {
    setFilteredTeachers([]);
  }
  };
  

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '14px',
      padding: '0 18px',
      width: '221px',
      height: '48px',
      backgroundColor: 'var(--white-color)',
      outline: 'none',
      border: '1px solid var(--accentBtn)',
      display: 'flex',
      alignItems: 'center',
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '14px',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'var(--white-color)' : provided.backgroundColor,
      color: state.isSelected ? 'var(--accentBtn)' : provided.color,
    }),
  };

  const loadMoreTeachers = () => {
    setFilteredTeachers(prevFilteredTeachers => [...prevFilteredTeachers, ...prevFilteredTeachers.slice(0, 4)]);
  };

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        <li className={css.item}>
          <label htmlFor="Languages" className={css.label}>Languages</label>
          <Select
            styles={customStyles}
            placeholder={"Language"}
            isClearable={true}
            value={selectedLanguage}
            onChange={handleChangeLanguage}
            options={languageOptions}
          />
        </li>
        <li className={css.item}>
          <label className={css.label} htmlFor="Level of knowledge">Level of knowledge</label>
          <Select
            styles={customStyles}
            placeholder={"Level"}
            isClearable={true}
            value={selectedLevel}
            onChange={handleChangeLevel}
            options={levelOptions}
          />
        </li>
        <li className={css.item}>
          <label className={css.label} htmlFor="Price">Price</label>
          <Select
            styles={customStyles}
            placeholder={"$/hour"}
            isClearable={true}
            value={selectedPrice}
            onChange={handleChangePrice}
            options={priceOptions}
          />
        </li>
      </ul>
      <div className={css.listWrapper}>
        <ul>
          {filteredTeachers.map(teacher => (
      <TeacherCard key={uuidv4()} teacher={teacher} />
          ))}
        </ul>
        {filteredTeachers.length > 0 && filteredTeachers.length % 4 === 0 && (
        <button className={css.loadBtn} type='button' onClick={loadMoreTeachers}>
          Load more
        </button>
      )}
      </div>
    </div>
  );
};



