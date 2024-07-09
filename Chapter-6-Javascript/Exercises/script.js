var nameBtn=document.getElementsByid('namealert');
var nameInput=document.getElementById('name');
nameBtn.addEventListener( 'click' , function(){
    if (nameInput.value==""){
        alert("Please enter your name");
    }
    else{
        alert( nameInput.value);
    }

});