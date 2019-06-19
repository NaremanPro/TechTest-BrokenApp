document.getElementById('submitBtn').addEventListener('click', function(e) {
  e.preventDefault();
  var name = document.getElementById('name').value;

  // Use function sendInfo to POST information to server
  sendInfo('/user/' + name, 'GET', name, function(err, success) {
      // Some things are missing...
      console.log('I am in sendInfo function');
      if (err) {
        console.log('error is: ',err);
      } else {
        console.log('inside the else');
        window.location = success.redirect; // You will need this line somewhere ;)
      }
    })
  });
