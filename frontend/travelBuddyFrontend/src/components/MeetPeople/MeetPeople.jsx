import React, { useEffect, useState } from 'react';
import { StyledMeetContent } from './MeetPeople.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons'; // Zmieniono na 'free-regular-svg-icons'
import { faHand } from '@fortawesome/free-regular-svg-icons'; // Zmieniono na 'free-regular-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const MeetPeople = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users from backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          'http://localhost:8080/users?page=0&size=6'
        ); // Backend endpoint
        const data = await response.json();
        setUsers(data.content || []); // Assuming response has a "content" key for paginated results
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <StyledMeetContent id="meet">
      <div className="center">
        <div className="left-arrow">
          <i>
            <FontAwesomeIcon icon={faChevronLeft} />
          </i>
        </div>
        <div className="right-arrow">
          <i>
            <FontAwesomeIcon icon={faChevronRight} />
          </i>
        </div>

        <div className="people">
          {users.map((user) => (
            <div className="person" key={user.id}>
              <div className="top">
                <img
                  src={user.photoUrl || '/default-avatar.png'}
                  alt={`${user.username}`}
                />
                <div className="user-info">
                  {user.username}, {user.age}
                </div>
              </div>
              <div className="bottom">
                <div className="chat">
                  <i>
                    <FontAwesomeIcon icon={faComment} />
                  </i>{' '}
                  chat
                </div>
                <div className="wave">
                  <i>
                    <FontAwesomeIcon icon={faHand} />
                  </i>
                  {'  '}
                  wave
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledMeetContent>
  );
};

export default MeetPeople;
