function f1()
{
 var pass1=document.getElementById('pwd1').value;
 var pass2=document.getElementById('pwd2').value;

  if(pass1!==pass2)
  {
  document.getElementById('pwd1').style.border="1px solid red";
  document.getElementById('p1').innerHTML="password mismtch";
  document.getElementById('p1').style.color="red";
  document.getElementById('pwd2').style.border="1px solid red";
  }

function validate()
{
 var id=document.getElementById('loginId').value;

 var regx=/[0-5]A[6-9]/;
 if(regx.test(id))
 {
  alert("valid Id");
 }
 else
 {
  alert("invalid Id");
 }
}
}
