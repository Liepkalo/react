import React from 'react';
import Profile from './Profile';
import user from './Profile/user.json';
import FriendList from './FriendList';
import friends from './FriendList/friends.json';
import Stats from './Stats';
import transactions from './Transaction/transactions.json';
import TransactionHistory from './Transaction';

const stats = [
  {
    id: 'id-1',
    label: '.docx',
    percentage: 22,
  },
  {
    id: 'id-2',
    label: '.pdf',
    percentage: 4,
  },
  {
    id: 'id-3',
    label: '.mp3',
    percentage: 17,
  },
  {
    id: 'id-4',
    label: '.psd',
    percentage: 47,
  },
  {
    id: 'id-5',
    label: '.pdf',
    percentage: 10,
  },
];

const App = () => (
  <>
    <Profile user={user} /> <Stats title="Upload stats" stats={stats} />{' '}
    <TransactionHistory items={transactions} /> <FriendList friends={friends} />{' '}
  </>
);

export default App;
