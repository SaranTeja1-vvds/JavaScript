function f1()
{
var firstname=document.getElementsById('fn').value
var lastname=document.getElementsById('ln').value
var email=document.getElementsById('em').value
var pwd1=document.getElementsById('pwd1').value
var pwd2=document.getElementsById('pwd2').value
var m=document.getElementById('rdm');
var f=document.getElementById('rdf');

alert(firstname);
alert(lastname);
alert(email);
alert(pwd1);
alert(pwd2);
}

function f1()
{

  if(m.checked==true)
  {
   alert("the selected is"+m.value);
  }
  else
  {
   alert("the selected is"+f.value);
  }
}

function f1()
{
 var place=document.getElementById('selectbox').value;
 alert(place);
}
