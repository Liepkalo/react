import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={style.friend}>
    {' '}
    {friends.map(friend => (
      <li
        className={friend.isOnline ? style.mark : style.offLine}
        key={friend.id}
      >
        <span className={style.description}> {friend.isOnline} </span>{' '}
        <img
          className={style.avatar}
          src={friend.avatar}
          alt={friend.alt}
          width="48"
        />
        <p className={style.name}> {friend.name} </p>{' '}
      </li>
    ))}{' '}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }),
  ).isRequired,
};

export default FriendList;
