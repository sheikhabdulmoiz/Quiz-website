function passwordVisibilty1() {
  var x = document.getElementById("password_1");
  if (x.type === "password" ) {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function passwordVisibilty2() {
  var y = document.getElementById("password_2");
  if (y.type === "password" ) {
    y.type = "text";
  } else {
    y.type = "password";
  }
}

// -------------------------------------------------------------------------------

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

var userSignUpDetail;
var signup;         //for obj
function SignUP(fname, lname, email, pass) {
  this.firstName = fname;
  this.lastName = lname;
  this.email = email;
  this.password = pass;
  }

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

      // signup= new SignUP(fName_1.value, lName_1.value, email_1.value, password_1.value)
      //   console.log(signup);
    signup = {
      firstname: fName_1.value,
      lastname: lName_1.value,
      email: email_1.value,
      password: password_1.value,
    };

    // var signString=JSON.stringify(signup)

    // userSignUpDetail=[]

    // userSignUpDetail.push(signString)

  //  localStorage.setItem("signupDetails",userSignUpDetail );

    localStorage.setItem("signupDetails", JSON.stringify(signup));
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

var savedSignupDetails;
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
    savedSignupDetails = JSON.parse(localStorage.getItem("signupDetails"));
    // console.log(savedSignupDetails)

    if (
      userEmail === savedSignupDetails["email"] &&
      userPassword === savedSignupDetails["password"]
    ) {
      console.log("matched");
      window.close()
          var qWindow=window.open()
          qWindow.location.href="quiz.html";
   


    } else {
      console.log("Not matched");
      credentialAlert2.innerHTML = "invalid credentials";

    }
   
    setTimeout(function () {
      credentialAlert2.innerHTML = "";
    }, 3500);
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

// ------------------------------------- QUIZ ---------------------------------------

savedSignupDetails = JSON.parse(localStorage.getItem("signupDetails"));
// console.log(savedSignupDetails.firstname)

var userNameAL=document.getElementById("userNameAL")
userNameAL.innerHTML="Welcome! "+savedSignupDetails.firstname+" "+savedSignupDetails.lastname
