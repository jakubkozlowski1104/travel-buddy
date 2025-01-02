import React, { useState } from 'react';
import { StyledCreateTripContainer } from './CreateTripStyles';

const CreateTrip = () => {
  const [formData, setFormData] = useState({
    tripName: '',
    destination: '',
    lookingFor: '',
    budget: '',
    meetingBefore: '',
    startDate: '',
    endDate: '',
    countries: '',
    travelType: '',
    language: '',
    itinerary: '',
    description: '',
    wantToSee: '',
    wantToDo: '',
  });

  const storedUser = JSON.parse(localStorage.getItem('user'));
  const userId = storedUser?.id || '';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tripData = {
      ...formData,
      ownerId: userId,
      countries: formData.countries
        ? formData.countries.split(',').map((country) => country.trim())
        : [], // Convert countries to an array of strings or an empty array
      travelTypeIds: formData.travelType
        ? formData.travelType
            .split(',')
            .map((type) => parseInt(type.trim(), 10))
        : [], // Convert travelType to an array of numbers or an empty array
      languages: formData.language
        ? formData.language.split(',').map((lang) => lang.trim())
        : [], // Convert languages to an array of strings or an empty array
    };

    delete tripData.travelType; // Remove the original travelType field
    delete tripData.language; // Remove the original language field

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
              type="number"
              name="budget"
              className="budget"
              placeholder="Budget in USD"
              value={formData.budget}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="travelType"
              className="travelType"
              placeholder="Travel type"
              value={formData.travelType}
              onChange={handleInputChange}
            />

            <label htmlFor="">start & end date</label>
            <input
              type="date"
              name="startDate"
              className="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="endDate"
              className="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="countries"
              className="countries"
              placeholder="Countries"
              value={formData.countries}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="meetingBefore"
              className="meetingBefore"
              placeholder="Meeting before"
              value={formData.meetingBefore}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="language"
              className="language"
              placeholder="Language"
              value={formData.language}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="itinerary"
              className="itinerary"
              placeholder="Itinerary"
              value={formData.itinerary}
              onChange={handleInputChange}
            />
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
