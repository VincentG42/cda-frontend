import { defineStore } from 'pinia';
import { ref } from 'vue';

const setLocalStorageItem = (key, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
};
const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const token = ref(null);
  const setUser = (userData) => {
    user.value = userData;
    if (userData) {
      setLocalStorageItem("auth_user", JSON.stringify(userData));
    } else {
      if (typeof window !== "undefined") {
        localStorage.removeItem("auth_user");
      }
    }
  };
  const setToken = (newToken) => {
    token.value = newToken;
    if (newToken) {
      setLocalStorageItem("auth_token", newToken);
    } else {
      if (typeof window !== "undefined") {
        localStorage.removeItem("auth_token");
      }
    }
  };
  const login = async (credentials) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials)
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Login failed");
      }
      const data = await response.json();
      if (data.user) {
        setUser(data.user);
      }
      if (data.token) {
        setToken(data.token);
      }
      return data;
    } catch (error) {
      throw error;
    }
  };
  const logout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch (e) {
      console.error("Logout failed", e);
    } finally {
      user.value = null;
      token.value = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("auth_user");
        localStorage.removeItem("auth_token");
      }
      window.location.href = "/";
    }
  };
  const fetchUser = async () => {
    try {
      const response = await fetch("/api/auth/me", {
        headers: { "Accept": "application/json" }
      });
      if (response.ok) {
        const userData = await response.json();
        user.value = userData;
      } else {
        if (response.status !== 401) {
          const errorData = await response.json();
          console.error("Failed to fetch user (API error):", errorData);
        }
        user.value = null;
      }
    } catch (e) {
      console.error("Failed to fetch user (Network/System error)", e);
      user.value = null;
    }
  };
  if (typeof window !== "undefined") {
    fetchUser();
  }
  return { user, setUser, login, logout, fetchUser };
});

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

export { _export_sfc as _, useAuthStore as u };
