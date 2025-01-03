import React, { useState, useEffect } from 'react';
import { StyledCreateTripContainer } from './CreateTripStyles';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  OutlinedInput,
  Box,
  Chip,
} from '@mui/material';
import languagesList from './languagesList';

const CreateTrip = () => {
  const [formData, setFormData] = useState({
    tripName: '',
    destination: '',
    lookingFor: '',
    estimatedCost: '',

    meetingBefore: '',
    startDate: '',
    endDate: '',
    countries: [],
    travelType: [],
    languages: [],
    itinerary: '',
    description: '',
    wantToSee: '',
    wantToDo: '',
  });

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const [travelTypes, setTravelTypes] = useState([]);
  const [countries, setCountries] = useState([]);
  const [languages, setLanguages] = useState([]);
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const userId = storedUser?.id || '';

  useEffect(() => {
    const fetchTravelTypes = async () => {
      try {
        const response = await fetch('http://localhost:8080/travel-types');
        if (response.ok) {
          const data = await response.json();
          setTravelTypes(data);
        } else {
          console.error('Error fetching travel types:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching travel types:', error);
      }
    };

    fetchTravelTypes();
  }, []);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('http://localhost:8080/countries');
        if (response.ok) {
          const data = await response.json();
          setCountries(data);
        } else {
          console.error('Error fetching countries:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (
      name === 'startDate' ||
      name === 'endDate' ||
      name === 'estimatedCost'
    ) {
      const today = new Date().toISOString().split('T')[0];
      if (name === 'startDate' && value < today) {
        alert('Start date cannot be earlier than today.');
        return;
      }
      if (
        name === 'endDate' &&
        formData.startDate &&
        value < formData.startDate
      ) {
        alert('End date cannot be earlier than start date.');
        return;
      }
      if (name === 'estimatedCost' && isNaN(value)) {
        alert('Estimated cost must be a number.');
        return;
      }

      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
        daysOfTravel: calculateDaysOfTravel(
          name === 'startDate' ? value : prevFormData.startDate,
          name === 'endDate' ? value : prevFormData.endDate
        ),
      }));
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTravelTypeChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      travelType: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleCountriesChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      countries: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleLanguagesChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      languages: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tripData = {
      ...formData,
      ownerId: userId,
      countries: formData.countries,
      travelTypeIds: formData.travelType,
      estimatedCost: formData.estimatedCost || 0,
      language: formData.language
        ? formData.language.split(',').map((lang) => lang.trim())
        : [],
    };

    delete tripData.travelType;
    delete tripData.language;

    try {
      const response = await fetch('http://localhost:8080/trips', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tripData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Trip created successfully:', responseData);
        alert('Trip created successfully!');
      } else {
        const errorData = await response.json();
        console.error('Error creating trip:', errorData);
        alert(`Failed to create trip: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error creating trip:', error);
      alert('Failed to create trip.');
    }
  };

  const calculateDaysOfTravel = (startDate, endDate) => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  };

  return (
    <StyledCreateTripContainer>
      <div className="center">
        <div className="banner">Create new trip!</div>
        <form className="forms" onSubmit={handleSubmit}>
          <div className="grid">
            <input
              type="text"
              name="tripName"
              className="tripName"
              placeholder="Trip name"
              value={formData.tripName}
              onChange={handleInputChange}
            />

            <select
              name="lookingFor"
              className={`lookingFor ${
                formData.lookingFor === '' ? 'lookingFor-placeholder' : ''
              }`}
              value={formData.lookingFor}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Looking for
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="mixed group">Mixed Group</option>
              <option value="any">Any</option>
            </select>
            <input
              type="text"
              name="estimatedCost"
              className="budget"
              placeholder="Estimated Cost"
              value={formData.estimatedCost}
              onChange={handleInputChange}
            />

            <label>
              <FormControl sx={{ width: '100%' }}>
                <Select
                  labelId="travel-types-label"
                  id="travel-types-select"
                  multiple
                  value={formData.travelType}
                  onChange={handleTravelTypeChange}
                  displayEmpty
                  input={
                    <OutlinedInput
                      id="select-multiple-travel-types"
                      sx={{
                        padding: '1px',
                        border: '1px solid black',
                        borderRadius: '4px',
                        backgroundColor: 'white',
                      }}
                    />
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return (
                        <span style={{ color: 'gray', fontSize: '1.2rem' }}>
                          Select travel types
                        </span>
                      );
                    }
                    return (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.1 }}>
                        {selected.map((value) => (
                          <Chip
                            key={value}
                            label={
                              travelTypes.find((type) => type.id === value)
                                ?.name || value
                            }
                          />
                        ))}
                      </Box>
                    );
                  }}
                  MenuProps={MenuProps}
                >
                  {travelTypes.map((type) => (
                    <MenuItem key={type.id} value={type.id}>
                      {type.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </label>

            <label htmlFor="">start & end date</label>
            <input
              type="date"
              name="startDate"
              className="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]}
            />
            <input
              type="date"
              name="endDate"
              className="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              disabled={!formData.startDate}
              min={formData.startDate || ''}
            />

            <label>
              <FormControl sx={{ width: '202.5%', gridColumn: 'span 2' }}>
                <Select
                  labelId="countries-label"
                  id="countries-select"
                  multiple
                  value={formData.countries}
                  onChange={handleCountriesChange}
                  displayEmpty
                  input={
                    <OutlinedInput
                      id="select-multiple-countries"
                      sx={{
                        padding: '1px',
                        border: '1px solid black',
                        borderRadius: '4px',
                        backgroundColor: 'white',
                      }}
                    />
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return (
                        <span style={{ color: 'gray', fontSize: '1.2rem' }}>
                          Select destinations
                        </span>
                      );
                    }
                    return (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.1 }}>
                        {selected.map((value) => (
                          <Chip
                            key={value}
                            label={
                              countries.find((country) => country.id === value)
                                ?.name || value
                            }
                          />
                        ))}
                      </Box>
                    );
                  }}
                  MenuProps={MenuProps}
                >
                  {countries.map((country) => (
                    <MenuItem key={country.id} value={country.id}>
                      {country.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </label>

            <select
              name="meetingBefore"
              className={`meetingBefore ${
                formData.meetingBefore === '' ? 'meetingBefore-placeholder' : ''
              }`}
              value={formData.meetingBefore}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Select meeting preference
              </option>
              <option value="No">No</option>
              <option value="Online">Online</option>
              <option value="In person">In person</option>
            </select>

            <label>
              <FormControl sx={{ width: '202.5%' }}>
                <Select
                  labelId="languages-label"
                  id="languages-select"
                  multiple
                  value={formData.languages}
                  onChange={handleLanguagesChange}
                  displayEmpty
                  input={
                    <OutlinedInput
                      id="select-multiple-languages"
                      sx={{
                        padding: '1px',
                        border: '1px solid black',
                        borderRadius: '4px',
                        backgroundColor: 'white',
                      }}
                    />
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return (
                        <span style={{ color: 'gray', fontSize: '1.2rem' }}>
                          Select languages
                        </span>
                      );
                    }
                    return (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.1 }}>
                        {selected.map((value) => (
                          <Chip
                            key={value}
                            label={
                              languages.find(
                                (language) => language.id === value
                              )?.name || value
                            }
                          />
                        ))}
                      </Box>
                    );
                  }}
                  MenuProps={MenuProps}
                >
                  {languagesList.map((language) => (
                    <MenuItem key={language} value={language}>
                      {language}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </label>

            <select
              name="itinerary"
              className={`itinerary ${
                formData.itinerary === '' ? 'itinerary-placeholder' : ''
              }`}
              value={formData.itinerary}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Select itinerary type
              </option>
              <option value="flexible">Flexible</option>
              <option value="fixed">Fixed</option>
              <option value="none">None</option>
            </select>

            <textarea
              name="description"
              className="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
            <textarea
              name="wantToSee"
              className="wantToSee"
              placeholder="Want to see"
              value={formData.wantToSee}
              onChange={handleInputChange}
            ></textarea>
            <textarea
              name="wantToDo"
              className="wantToDo"
              placeholder="Want to do"
              value={formData.wantToDo}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button type="submit" className="submitButton">
            Submit
          </button>
        </form>
      </div>
    </StyledCreateTripContainer>
  );
};

export default CreateTrip;
