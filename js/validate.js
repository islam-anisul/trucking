// quote form validation
function quotevalidate() {
    var fstName = document.getElementById("firstName").value;
    var lstName = document.getElementById("lastName").value;
    var mailID = document.getElementById("emailID").value;
    var message = document.getElementById("msg").value;

    // first name validation
    if ((fstName == "") || (fstName == null)) {
        document.getElementById("fNameErr").innerHTML = "*Required First Name !"
        return false;
    } else if (fstName.length < 2) {
        document.getElementById("fNameErr").innerHTML = "*First can't be less than 2 characters !"
        return false;
    }  else {
        document.getElementById("fNameErr").innerHTML = null;
    }


    // last name validation
    if ((lstName == "") || (lstName == null)) {
        document.getElementById("lstNameErr").innerHTML = "*Required last name"
        return false;
    } else if (!isNaN(lstName)) {
        document.getElementById("lstNameErr").innerHTML = "*Last name can't be number"
        return false;
    } else {
        document.getElementById("lstNameErr").innerHTML = null;
    }

    // mail vlaidation
    if ((mailID == "") || (mailID == null)) {
        document.getElementById("EmailIDErr").innerHTML = "*Required Email ID"
        return false;
    } 
    else if (mailID.indexOf('@')<=0) {
        document.getElementById("EmailIDErr").innerHTML="*Invalid Email format"
        return false;
    } else if((mailID.charAt(mailID.length - 4)!='.') && (mailID.charAt(mailID.length-3)!='.')){
        document.getElementById("EmailIDErr").innerHTML="*Invalid Email format"
        return false;
    } else {
        document.getElementById("EmailIDErr").innerHTML=null;        
    }

    // message validation
    if((message=="")||(message==null)){
 document.getElementById("msgErr").innerHTML="*MSG can't be blank"
 return false;
    } else if(message.length<10){
        document.getElementById("msgErr").innerHTML="*MSG can't be less than 10 characters"
        return false;
    } else{
        document.getElementById("msgErr").innerHTML=null;
    }
};

// contact form validation
function validateContact() {
    var fName = document.getElementById("fstName").value;
    var lName = document.getElementById("lstName").value;
    var mlID = document.getElementById("cmail").value;
    var conmsg = document.getElementById("cmsg").value;

    // first name validation
    if ((fName == "") || (fName == null)) {
        document.getElementById("fstErr").innerHTML = "*Required First Name !"
        return false;
    } else if (fstName.length < 2) {
        document.getElementById("fstErr").innerHTML = "*First can't be less than 2 characters !"
        return false;
    }  else {
        document.getElementById("fstErr").innerHTML = null;
    }


    // last name validation
    if ((lName == "") || (lName == null)) {
        document.getElementById("lstErr").innerHTML = "*Required last name"
        return false;
    } else if (!isNaN(lName)) {
        document.getElementById("lstErr").innerHTML = "*Last name can't be number"
        return false;
    } else {
        document.getElementById("lstErr").innerHTML = null;
    }

    // mail vlaidation
    if ((mlID == "") || (mlID == null)) {
        document.getElementById("cmailErr").innerHTML = "*Required Email ID"
        return false;
    } 
    else if (mlID.indexOf('@')<=0) {
        document.getElementById("cmailErr").innerHTML="*Invalid Email format"
        return false;
    } else if((mlID.charAt(mlID.length - 4)!='.') && (mlID.charAt(mlID.length-3)!='.')){
        document.getElementById("cmailErr").innerHTML="*Invalid Email format"
        return false;
    } else {
        document.getElementById("cmailErr").innerHTML=null;        
    }

    // message validation
    if((conmsg=="")||(conmsg==null)){
 document.getElementById("cmsgErr").innerHTML="*MSG can't be blank"
 return false;
    } else if(conmsg.length<10){
        document.getElementById("cmsgErr").innerHTML="*MSG can't be less than 10 characters"
        return false;
    } else{
        document.getElementById("cmsgErr").innerHTML=null;
    }
};