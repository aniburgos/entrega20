function attemptLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Realizar la solicitud al backend para la autorización basada en token
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'access-token': 'Bearer ' + localStorage.getItem('accessToken'),
      },
      body: JSON.stringify({ username, password }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
        if (data.token) {
            // Si se recibe un token, almacenarlo en localStorage o en una cookie
            localStorage.setItem('accessToken', data.token);
            // Redirigir a la página principal o realizar otras acciones necesarias
            window.location = "main.html";
          } else {
            // Mostrar un mensaje de error si la autenticación falla
            document.getElementById('loginMessage').innerHTML = 'Usuario y/o contraseña incorrecto';
        }  
        })
    .catch(error => console.error('Error:', error));
  }