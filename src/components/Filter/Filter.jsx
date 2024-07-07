
import { useState, useEffect } from 'react';
import Select from 'react-select';
import { database } from '../../Firebase/Firebase';
import { ref, onValue } from 'firebase/database';
import css from './Filter.module.css';

export const Filter = () => {
  const [languageOptions, setLanguageOptions] = useState([]);
  const [levelOptions, setLevelOptions] = useState([]);
  const [priceOptions, setPriceOptions] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

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

  useEffect(() => {
    const fetchData = () => {
      try {
        const languagesRef = ref(database, 'languages');
        onValue(languagesRef, (snapshot) => {
          const languagesData = snapshot.val();
          if (languagesData) {
            const options = Object.keys(languagesData).map(key => ({
              value: key,
              label: languagesData[key].label,
            }));
            setLanguageOptions(options);
          }
        });

        const levelsRef = ref(database, 'levels');
        onValue(levelsRef, (snapshot) => {
          const levelsData = snapshot.val();
          if (levelsData) {
            const options = Object.keys(levelsData).map(key => ({
              value: key,
              label: levelsData[key].label,
            }));
            setLevelOptions(options);
          }
        });

        const pricesRef = ref(database, 'price_per_hour');
        onValue(pricesRef, (snapshot) => {
          const pricesData = snapshot.val();
          if (pricesData) {
            const options = Object.keys(pricesData).map(key => ({
              value: key,
              label: pricesData[key].label,
            }));
            setPriceOptions(options);
          }
        });

        const teachersRef = ref(database, 'teachers');
        onValue(teachersRef, (snapshot) => {
          const teachersData = snapshot.val();
          if (teachersData) {
            const teachersList = Object.keys(teachersData).map(key => ({
              name: teachersData[key].name,
              language: teachersData[key].languages, 
              level: teachersData[key].levels,
              price: teachersData[key].price_per_hour, 
            }));
            setTeachers(teachersList);
          }
        });

      } catch (error) {
        console.error('Error fetching data from Realtime Database:', error);
      }
    };

    fetchData();

  }, []);

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
            onChange={option => setSelectedLanguage(option)}
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
            onChange={option => setSelectedLevel(option)}
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
            onChange={option => setSelectedPrice(option)}
            options={priceOptions}
          />
        </li>
      </ul>
    </div>
  );
};


