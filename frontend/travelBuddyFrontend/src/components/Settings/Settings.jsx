import React, { useState, useEffect } from 'react';
import { StyledSettingsContainer } from './SettingsStyles';
import countries from './countries';
import languages from './languages';
import relationship from './relationship';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  OutlinedInput,
  Box,
  Chip,
} from '@mui/material';

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

const Settings = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const userId = storedUser?.id || '';

  const [formData, setFormData] = useState({
    username: '',
    country: '',
    city: '',
    age: '',
    languages: [],
    relationshipStatus: '',
    interests: '',
    bio: '',
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/users/${userId}`);
        if (response.ok) {
          const userData = await response.json();
          setFormData({
            username: userData.username || '',
            country: userData.country || '',
            city: userData.city || '',
            age: userData.age || '',
            languages: userData.languages || [],
            relationshipStatus: userData.relationshipStatus || '',
            interests: userData.interests || '',
            bio: userData.bio || '',
          });
        } else {
          console.error('Failed to fetch user data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleLanguagesChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      languages: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        alert('Data updated successfully');
        console.log(updatedUser);
      } else {
        alert('Failed to update data');
        console.error('Update failed', response.statusText);
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <StyledSettingsContainer>
      <div className="center">
        <div className="banner">UPDATE YOUR DATA</div>
        <div className="forms">
          <div className="photo-form">PHOTO</div>
          <div className="details">
            <form className="form" onSubmit={handleSubmit}>
              <label>
                <span>Username</span>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                />
              </label>

              <label>
                <span>Country</span>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select a country
                  </option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>City</span>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                />
              </label>

              <label>
                <span>Age</span>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter age"
                />
              </label>

              <label>
                <span>Languages</span>
                <FormControl sx={{ width: '50%' }}>
                  <Select
                    labelId="languages-label"
                    id="languages-select"
                    multiple
                    value={formData.languages}
                    onChange={handleLanguagesChange}
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
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.1 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {languages.map((language) => (
                      <MenuItem key={language} value={language}>
                        {language}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </label>

              <label>
                <span>Relationship Status</span>
                <select
                  name="relationshipStatus"
                  value={formData.relationshipStatus}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select a relationship status
                  </option>
                  {relationship.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span>Interests</span>
                <input
                  type="text"
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  placeholder="Enter interests"
                />
              </label>

              <label>
                <span>Bio</span>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Enter bio"
                />
              </label>

              <button
                color="secondary"
                variant="contained"
                type="submit"
                className="btn"
              >
                SAVE CHANGES
              </button>
            </form>
          </div>
        </div>
      </div>
    </StyledSettingsContainer>
  );
};

export default Settings;
