    // LOGIN
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const request = new XMLHttpRequest();
        
        request.open("POST", 'https://www.fulek.com/data/api/user/login', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.onreadystatechange = function(){
            let json = JSON.parse(request.responseText);
            let token = json.data.token;
            localStorage.setItem("token", token);
            document.getElementById("loginStatus").innerHTML = "Uspješan login.";
            setTimeout(() => {
              window.location.href = "pocetna.html";
            }, 2000);
          };
          let login = JSON.stringify({
          username: username,
          password: password,
        });
        request.send(login);
      });
      
      // REGISTER
      function handleRegistration() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        const data = {
          username: username,
          password: password
        };
        
        fetch('https://www.fulek.com/data/api/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => response.json())
          .then(result => {
            console.log(result);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }
      
      document.getElementById('btnRegister').addEventListener('click', handleRegistration);