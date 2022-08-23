import data from './data.json';

export const validateLogin = (email, password) => {
  const { users } = data;

  if (Object.keys(users).includes(email)) {
    if (users[email].password === password) {
      return true;
    }
  }

  return false;
};
