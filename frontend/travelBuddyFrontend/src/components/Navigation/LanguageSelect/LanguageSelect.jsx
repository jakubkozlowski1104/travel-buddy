import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledLanguageSelect } from './LanguageSelectStyles';

const LanguageSelect = ({ flags }) => {
  const [flagsArray, setFlagsState] = useState(flags);
  const { i18n } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const [actualLanguage, setActualLanguage] = useState(flags[0].src);

  const changeLanguage = (lang) => {
    setTimeout(() => {
      const selectedFlag = flagsArray.find((flag) => flag.name === lang);
      setActualLanguage(selectedFlag.src);
      i18n.changeLanguage(lang);

      const reorderedFlags = [
        selectedFlag,
        ...flagsArray.filter((flag) => flag.name !== lang),
      ];
      setFlagsState(reorderedFlags);
      setOpenModal(false);
    }, 300);
  };

  return (
    <StyledLanguageSelect>
      <div className="circle" onClick={() => setOpenModal(!openModal)}>
        <img src={actualLanguage} alt="Selected language" />
        <div className={`dropdown ${openModal ? 'open' : ''}`}>
          {flagsArray.map((flag) => (
            <img
              key={flag.name}
              src={flag.src}
              alt={flag.alt}
              onClick={() => changeLanguage(flag.name)}
            />
          ))}
        </div>
      </div>
      <div className="name">{flagsArray[0].name.toUpperCase()}</div>
    </StyledLanguageSelect>
  );
};

export default LanguageSelect;
