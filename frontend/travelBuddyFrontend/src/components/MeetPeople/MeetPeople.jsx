import React, { useEffect, useState } from 'react';
import { StyledMeetContent } from './MeetPeople.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHand, faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import basicPhoto from '../../../public/users/userimg.jpg';

const MeetPeople = () => {
  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          'http://localhost:8080/users?page=0&size=10'
        );
        const data = await response.json();
        const usersData = data.content || [];
        setUsers(usersData);
        setVisibleUsers(usersData.slice(0, 6));
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleNext = () => {
    setVisibleUsers((prevVisible) => {
      const nextIndex = (users.indexOf(prevVisible[0]) + 1) % users.length;
      return [
        ...users.slice(nextIndex, nextIndex + 6),
        ...users.slice(0, Math.max(0, nextIndex + 6 - users.length)),
      ];
    });
  };

  const handlePrev = () => {
    setVisibleUsers((prevVisible) => {
      const prevIndex =
        (users.indexOf(prevVisible[0]) - 1 + users.length) % users.length;
      return [
        ...users.slice(prevIndex, prevIndex + 6),
        ...users.slice(0, Math.max(0, prevIndex + 6 - users.length)),
      ];
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <StyledMeetContent id="meet">
      <div className="center">
        <div className="left-arrow" onClick={handlePrev}>
          <i>
            <FontAwesomeIcon icon={faChevronLeft} />
          </i>
        </div>
        <div className="right-arrow" onClick={handleNext}>
          <i>
            <FontAwesomeIcon icon={faChevronRight} />
          </i>
        </div>

        <div className="people-wrapper">
          <div className="people">
            {visibleUsers.map((user, index) => (
              <div className="person" key={index}>
                <div className="top">
                  <img
                    src={user.photoUrl || basicPhoto}
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
                      <FontAwesomeIcon icon={faUser} />
                    </i>
                    {'  '}
                    profil
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyledMeetContent>
  );
};

export default MeetPeople;
