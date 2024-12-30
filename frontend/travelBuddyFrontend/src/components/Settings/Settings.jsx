import React, { useState, useEffect } from 'react';
import { StyledSettingsContainer } from './SettingsStyles';

const Settings = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const userId = storedUser?.id || '';

  const [formData, setFormData] = useState({
    username: '',
    country: '',
    city: '',
    age: '',
    languages: '',
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
          console.log('pobieranie usera', userData);
          setFormData({
            username: userData.username || '',
            country: userData.country || '',
            city: userData.city || '',
            age: userData.age || '',
            languages: userData.languages?.join(', ') || '',
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
        body: JSON.stringify({
          ...formData,
          languages: formData.languages.split(',').map((lang) => lang.trim()),
        }),
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
                Username:
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                />
              </label>

              <label>
                Country:
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Enter country"
                />
              </label>

              <label>
                City:
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                />
              </label>

              <label>
                Age:
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter age"
                />
              </label>

              <label>
                Languages (comma-separated):
                <input
                  type="text"
                  name="languages"
                  value={formData.languages}
                  onChange={handleChange}
                  placeholder="Enter languages"
                />
              </label>

              <label>
                Relationship Status:
                <input
                  type="text"
                  name="relationshipStatus"
                  value={formData.relationshipStatus}
                  onChange={handleChange}
                  placeholder="Enter relationship status"
                />
              </label>

              <label>
                Interests:
                <input
                  type="text"
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  placeholder="Enter interests"
                />
              </label>

              <label>
                Bio:
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
