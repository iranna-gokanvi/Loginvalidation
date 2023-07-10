function validuser(){
    var unam=document.getElementById("uname").value
    var t=/^[a-z]{5,10}[1-9]{2}$/.test(unam)
    console.log(t)
    if(t==false){
        document.getElementById("result1").innerHTML="invalid user"
        document.getElementById("uname").style.border="2px solid red"
        return false;
    }else{
        return true
    }
}

function validpassword(){
    var pass=document.getElementById("password").value
    var t1=/^[a-z]{1,4}[@]{1}$/.test(pass)
    console.log(t1)
    if(t1==false){
       document.getElementById("result2").innerHTML="invalid pin"
       document.getElementById("password").style.border="2px solid red"
       return false;
    }
    else{
        return true
    }
   
}
