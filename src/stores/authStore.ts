import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { User } from '../types';

const getLocalStorageItem = (key: string): string | null => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem(key);
    }
    return null;
};

const setLocalStorageItem = (key: string, value: string): void => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, value);
    }
};

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null); // Assuming user state is managed here
    const token = ref<string | null>(null); // Assuming token state is managed here

    const setUser = (userData: User | null) => {
        user.value = userData;
        if (userData) {
            setLocalStorageItem('auth_user', JSON.stringify(userData));
        } else {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('auth_user');
            }
        }
    };

    const setToken = (newToken: string | null) => {
        token.value = newToken;
        if (newToken) {
            setLocalStorageItem('auth_token', newToken);
        } else {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('auth_token');
            }
        }
    };

    const login = async (credentials: any) => {
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Login failed');
            }

            const data = await response.json();

            // If password change is required, we might still get a user and token, 
            // but we shouldn't fully log them in (persist them) if we want to be strict.
            // However, we need the token to change the password.
            // So we set the user and token, but the frontend will redirect.

            if (data.user) {
                setUser(data.user);
            }
            // Token is handled via cookie or returned? 
            // The backend returns 'token' in the JSON now based on my edit.
            if (data.token) {
                setToken(data.token);
            }

            return data; // Return data so component can check for require_password_change
        } catch (error) {
            throw error;
        }
    };

    const logout = async () => {
        try {
            await fetch('/api/auth/logout', { method: 'POST' });
        } catch (e) {
            console.error('Logout failed', e);
        } finally {
            user.value = null;
            token.value = null; // Clear token on logout
            if (typeof window !== 'undefined') {
                localStorage.removeItem('auth_user');
                localStorage.removeItem('auth_token'); // Clear token from local storage
            }
            window.location.href = '/';
        }
    };

    const fetchUser = async () => {
        try {
            // credentials: 'include' ensures cookies are sent with the request
            // although same-origin requests usually send them by default.
            const response = await fetch('/api/auth/me', {
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                const userData = await response.json();
                user.value = userData;
            } else {
                // If 401, it just means not logged in, no need to error log
                if (response.status !== 401) {
                    const errorData = await response.json();
                    console.error('Failed to fetch user (API error):', errorData);
                }
                user.value = null;
            }
        } catch (e) {
            console.error('Failed to fetch user (Network/System error)', e);
            user.value = null;
        }
    };

    // Initialize user from API on store creation (client-side only)
    if (typeof window !== 'undefined') {
        fetchUser();
    }

    return { user, setUser, login, logout, fetchUser };
});
