// generates a random string of 6 letters containing numbers and lower and capital letters
const generateRandomString = () => {
  const urlLetters = [
    '1','2','3','4','5','6','7','8','9',
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
  ];
  const result = [];
  for (let i = 0; i < 6; i++) {
    const randNum = (Math.round(Math.random() * 61));
    result.push(urlLetters[randNum]);
  }
  return result.join('');
};

// returns the user object linked to the associated email
const getUserByEmail = (usersObj, email) => {
  for (let user in usersObj) {
    if (usersObj[user].email === email) {
      return usersObj[user];
    }
  }
};

// returns an array of urls created by a specific id
const urlsForUser = (database, id) => {
  const filteredDatabase = {};

  for (let url in database) {
    if (database[url].userId === id) {
      filteredDatabase[url] = database[url];
    }
  }
  return filteredDatabase;
};

// returns true if the user is in the database, false otherwise
const isUser = (userId, userDatabase) => {
  for (let user in userDatabase) {
    if (userDatabase[user].user_id === userId) {
      return true;
    }
  }
  return false;
}

module.exports = {
  generateRandomString,
  getUserByEmail,
  urlsForUser,
  isUser,
};