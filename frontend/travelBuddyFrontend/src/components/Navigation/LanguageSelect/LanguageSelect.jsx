import React, { useState } from 'react';
import { useLanguage } from '../../../Context/LanguageContext'; // Use the Language context
import { StyledLanguageSelect } from './LanguageSelectStyles';
import ES from '../../../assets/flags/ES.png';
import PL from '../../../assets/flags/PL.png';
import GB from '../../../assets/flags/GB.png';

const flags = [
  { src: GB, alt: 'Great Britain', name: 'en', language: 'English' },
  { src: PL, alt: 'Poland', name: 'pl', language: 'Polski' },
  { src: ES, alt: 'Spain', name: 'es', language: 'Español' },
];

const LanguageSelect = () => {
  const { language, changeLanguage } = useLanguage(); // Access current language and change function from context
  const [openModal, setOpenModal] = useState(false);

  // Reorder the flags dynamically based on the current language
  const reorderedFlags = [
    flags.find((flag) => flag.name === language), // Current language flag
    ...flags.filter((flag) => flag.name !== language), // Other flags
  ];

  return (
    <StyledLanguageSelect>
      <div className="circle" onClick={() => setOpenModal(!openModal)}>
        <img src={reorderedFlags[0].src} alt={reorderedFlags[0].alt} />{' '}
        <div className={`dropdown ${openModal ? 'open' : ''}`}>
          {reorderedFlags.map((flag) => (
            <img
              key={flag.name}
              src={flag.src}
              alt={flag.alt}
              onClick={() => {
                changeLanguage(flag.name);
                setOpenModal(false);
              }}
            />
          ))}
        </div>
      </div>
      <div className="name">{reorderedFlags[0].name.toUpperCase()}</div>
    </StyledLanguageSelect>
  );
};

export default LanguageSelect;
