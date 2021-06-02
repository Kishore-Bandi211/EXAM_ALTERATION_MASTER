var UserProfile = (function() {
    var email = "";

    var getName = function() {
      console.log("Hello");
      return email;    // Or pull this from cookie/localStorage
    };
  
    var setName = function(email_n) {
      console.log("Hello");
      email = email_n;     
      // Also set this in cookie/localStorage
    };
  
    return {
      getName: getName,
      setName: setName
    }
  
  })();
  
  export default UserProfile;