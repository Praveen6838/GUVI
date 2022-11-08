$(document).ready(function(){
$("#submit").click(function(){
var name = $("#name").val();
var email = $("#email").val();
var password = $("#pwd").val();
var pw-repeat = $("#pwd2").val();
// Returns successful data submission message when the entered information is stored in database.
var dataString = 'name1='+ name + '&email1='+ email + '&password1='+ pwd+ '&pwd3='+ pwd2;
if(name==''||email==''||pwd==''||pwd2=='')
{
alert("Please Fill All Fields");
}
else
{
// AJAX Code To Submit Form.
$.ajax({
type: "POST",
url: "dp.php",
data: dataString,
cache: false,
success: function(result){
alert(result);
}
});
}
return false;
});
});