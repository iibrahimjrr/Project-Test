// Simulated authentication state management
const AUTH_KEY = 'health_track_auth';

function isLoggedIn() {
  return localStorage.getItem(AUTH_KEY) !== null;
}

function getCurrentUser() {
  const userData = localStorage.getItem(AUTH_KEY);
  return userData ? JSON.parse(userData) : null;
}

function login(userData) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(userData));
  window.location.href = 'index.html';
}

function logout() {
  localStorage.removeItem(AUTH_KEY);
  window.location.href = 'login.html';
}

// Update navigation based on auth state
function updateNavigation() {
  const loginLink = document.getElementById('loginLink');
  const registerLink = document.getElementById('registerLink');
  const profileLink = document.getElementById('profileLink');
  const logoutLink = document.getElementById('logoutLink');

  const isAuthenticated = isLoggedIn();

  if (loginLink) loginLink.style.display = isAuthenticated ? 'none' : 'block';
  if (registerLink) registerLink.style.display = isAuthenticated ? 'none' : 'block';
  if (profileLink) profileLink.style.display = isAuthenticated ? 'block' : 'none';
  if (logoutLink) {
    logoutLink.style.display = isAuthenticated ? 'block' : 'none';

    // تأكد إن الحدث ما بيتكرر
    logoutLink.removeEventListener('click', handleLogout);
    logoutLink.addEventListener('click', handleLogout);
  }
}

function handleLogout(event) {
  event.preventDefault();
  logout();
}

// Check authentication on protected pages
function checkAuth() {
  const isProtectedPage = window.location.pathname.includes('profile.html');
  const isAuthPage = window.location.pathname.includes('login.html') || 
                    window.location.pathname.includes('register.html');

  if (isProtectedPage && !isLoggedIn()) {
    window.location.href = 'login.html';
  } else if (isAuthPage && isLoggedIn()) {
    window.location.href = 'profile.html';
  }
}

// Initialize auth checks
document.addEventListener('DOMContentLoaded', () => {
  updateNavigation();
  checkAuth();
});
