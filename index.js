// Завдання 1

// Отримати загальну суму балансу (поле balance) всіх користувачів.
// const users = [
//     { id: 1, name: 'Bill', balance: 5000000000000000 },
//     { id: 2, name: 'Kate', balance: 1030 },
//     { id: 3, name: 'Will', balance: 500 },
//     { id: 4, name: 'Kiril', balance: 4 },
//     { id: 5, name: 'Emil', balance: 50 },
//   ];

// const calculateTotalBalance = users => {
//     return users.reduce((total, user) => total + user.balance, 0);
// };

// console.log(calculateTotalBalance(users));

// Завдання 2

// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

// const getUsersWithFriend = (users, friendName) => {
//     return users
//     .filter(user => user.friends.includes(friendName))
//     .map(user => user.name);
    
// };

// const users = [
//     { id: 1, name: 'Jammes Pie', friends: ['George Deevil','Kyril Hoddakov'] },
//     { id: 2, name: 'Kyril Hoddakov', friends: ['George Deevil', 'Emil Mamisto', 'Jammes pie'] },
//     { id: 3, name: 'Emil Mamisto', friends: ['Kyril Hoddakov', 'George Deevil'] },
//     { id: 4, name: 'George Deevil', friends: ['Kyril Hoddakov', 'Emil Mamisto', 'Jammes pie'] },
//   ];

//   console.log(getUsersWithFriend(users,"Kyril Hoddakov"));
  
//   Завдання 3

// Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)

// const getNamesSortedByFriendsCount = users => {
//     return users
//     .slice()
//     .sort((a, b) => b.friends.length - a.friends.length)
//     .map(user => user.name)
// }; 

// const users = [
//     { id: 1, name: 'Moore Hensley', friends: ['Laylla Shubledog','Emil Mamisto'] },
//     { id: 1, name: 'Laylla Shubledog', friends: ['Moore Hensley','Kyril Hoddakov', 'Emil Mamisto'] },
//     { id: 1, name: 'Kyril Hoddakov', friends: ['Laylla Shubledog','Emil Mamisto'] },
//     { id: 1, name: 'Emil Mamisto', friends: ['Laylla Shubledog','Moore Hensley','Kyril Hoddakov'] },
//   ];

//   console.log(getNamesSortedByFriendsCount(users));
  
//   Завдання 4

// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

const getSortedUniqueSkills = users => {
    return users
    .flatMap(user => user.skills)
    .filter((skill, index, array) => array.indexOf(skill) === index)
    .sort();

};
const users = [
    { id: 1, name: 'John', skills: ['Sleeping', 'Super-Jump', 'Breath in any Gas'] },
    { id: 2, name: 'Alex', skills: ['Over-Wright Omniverse'] },
    { id: 3, name: 'John II', skills: ['Telekinesis', 'Super Speed'] },
  ];

  console.log(getSortedUniqueSkills(users));
  