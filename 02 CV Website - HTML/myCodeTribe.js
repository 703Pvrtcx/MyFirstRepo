function loginUser()
{
  var userN = document.getElementById("username").value;
  var passW = document.getElementById("password").value;

  if(userN == 'codetribe' && passW == "admin")
  {
    window.location.href = "CV.html";
  }
  else if(passW != "admin")
  {
    alert("Invalid username/password");
  }
}
