import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
const LanguageSelect = ({
  actualLanguage,
  openModal,
  actualLanguageName,
  setActualLanguage,
  setActualLanguageName,
  setOpenModal,
  flags,
}) => {
  const [flagsState, setFlagsState] = useState(flags);
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    setTimeout(() => {
      const selectedFlag = flagsState.find((flag) => flag.name === lang);
      setActualLanguage(selectedFlag.src);
      setActualLanguageName(selectedFlag.name);
      i18n.changeLanguage(lang);

      const reorderedFlags = [
        selectedFlag,
        ...flagsState.filter((flag) => flag.name !== lang),
      ];
      setFlagsState(reorderedFlags);
      setOpenModal(false);
    }, 300);
  };

  return (
    <div className="language">
      <div className="circle" onClick={() => setOpenModal(!openModal)}>
        <img src={actualLanguage} alt="Selected language" />
        <div className={`dropdown ${openModal ? 'open' : ''}`}>
          {flagsState.map((flag) => (
            <img
              key={flag.name}
              src={flag.src}
              alt={flag.alt}
              onClick={() => changeLanguage(flag.name)}
            />
          ))}
        </div>
      </div>
      <div className="name">{actualLanguageName.toUpperCase()}</div>
    </div>
  );
};

export default LanguageSelect;
