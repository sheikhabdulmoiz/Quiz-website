var monkeyWindow;

function newWindow() {
  // var w = window.open("signin.html");
  // w = window.open(
  //   "signin.html",
  //   "",
  //   "width=440,height=380,left=450,top=150"
  // ); //
  monkeyWindow = window.open("", "", "width=440,height=380,left=450,top=150");
  monkeyWindow.location.href = "signPages/signin.html";
}

// var submit_1 = document.getElementById("submit_1");
// submit_1.onclick = function () {
//   var email_1 = document.getElementById("email_1").value;
//   console.log(email_1);
// };

function signUp() {
  var fName_1 = document.getElementById("fName_1");
  var lName_1 = document.getElementById("lName_1");
  var email_1 = document.getElementById("email_1");
  var password_1 = document.getElementById("password_1");
  var credentialAlert1 = document.getElementById("credentialAlert1");
  fName_1.value;
  lName_1.value;
  email_1.value;
  password_1.value;
  var signup; //for obj
  if (!(fName_1.value && lName_1.value && email_1.value && password_1.value)) {
    fName_1.placeholder = "must be fill";
    lName_1.placeholder = "must be fill";
    email_1.placeholder = "must be fill";
    password_1.placeholder = "must be fill";
  } else if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_1.value) ===
    false
  ) {
    credentialAlert1.innerHTML = "invalid email address";
    setTimeout(function () {
      credentialAlert1.innerHTML = "";
    }, 4000);
  } else {
    console.log(fName_1.value);
    console.log(lName_1.value);
    console.log(email_1.value);
    console.log(password_1.value);

    signup = {
      firstname: fName_1.value,
      lastname: lName_1.value,
      email: email_1.value,
      password: password_1.value,
    };
    // localStorage.setItem("signupDetails", JSON.stringify(signup));
    // localStorage.removeItem("signupDetails")

    credentialAlert1.innerHTML = "";
    fName_1.value = "";
    lName_1.value = "";
    email_1.value = "";
    password_1.value = "";
    fName_1.placeholder = "";
    lName_1.placeholder = "";
    email_1.placeholder = "";
    password_1.placeholder = "";

    credentialAlert1.innerHTML = "Account created.";
    setTimeout(function () {
      credentialAlert1.innerHTML = "";
    }, 3500);
  }
}

//----------------------------------- Sign in -----------------------------------------------------

function signIn() {
  var email_2 = document.getElementById("email_2");
  var password_2 = document.getElementById("password_2");
  var credentialAlert2 = document.getElementById("credentialAlert2");
  email_2.value;
  password_2.value;
  var userEmail;
  var userPassword;
  var signin; //for obj
  if (!(email_2.value && password_2.value)) {
    email_2.placeholder = "must be fill";
    password_2.placeholder = "must be fill";
  } else if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_2.value) ===
    false
  ) {
    credentialAlert2.innerHTML = "invalid email address format";
    setTimeout(function () {
      credentialAlert2.innerHTML = "";
    }, 4000);
  } else {
    userEmail = email_2.value;
    userPassword = password_2.value;
    signin = {
      email: email_2.value,
      password: password_2.value,
    };
    // localStorage.removeItem("signupDetails")
    var savedSignupDetails = JSON.parse(localStorage.getItem("signupDetails"));
    // console.log(savedSignupDetails)

    if (
      userEmail === savedSignupDetails["email"] &&
      userPassword === savedSignupDetails["password"]
    ) {
      console.log("matched");
      monkeyWindow.close();
    } else {
      // credentialAlert2.innerHTML = "invalid credentials";
      console.log("Not matched");

      // abdulmoiz15000@gmail.com

      // for(key in savedSignupDetails){
      //   console.log(key);
      // }
    }
    credentialAlert2.innerHTML = "";
    email_2.value = "";
    password_2.value = "";
    email_2.placeholder = "";
    password_2.placeholder = "";
  }
}

// timer = setInterval(function () {
//   fName = document.getElementById("fName").placeholder = "must be fill";
//  }, 1000);
//  setTimeout(function () {
//    clearInterval(timer);
//  }, 2000);

// localStorage.setItem("moiz","main")
// localStorage.removeItem("moiz")
