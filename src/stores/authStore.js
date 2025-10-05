import { defineStore } from 'pinia';
import { ref } from 'vue';

const getLocalStorageItem = (key) => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key);
  }
  return null;
};

const setLocalStorageItem = (key, value) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, value);
  }
};

const removeLocalStorageItem = (key) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }
};

export const useAuthStore = defineStore('auth', () => {
  const token = ref(getLocalStorageItem('auth_token'));
  const user = ref(JSON.parse(getLocalStorageItem('auth_user') || 'null'));

  const setToken = (newToken) => {
    token.value = newToken;
    if (newToken) {
      setLocalStorageItem('auth_token', newToken);
    } else {
      removeLocalStorageItem('auth_token');
    }
  };

  const setUser = (newUser) => {
    user.value = newUser;
    if (newUser) {
      setLocalStorageItem('auth_user', JSON.stringify(newUser));
    } else {
      removeLocalStorageItem('auth_user');
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return { token, user, setToken, setUser, logout };
});
