document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Simulate login - In a real app, this would make an API call
      login({
        id: '1',
        username: username,
        email: 'user@example.com',
        age: 30,
        patientHistory: {
          conditions: [],
          medications: [],
          allergies: [],
          lastVisit: new Date().toISOString(),
          bloodType: 'A+',
          height: '175cm',
          weight: '70kg'
        }
      });
    });
  });