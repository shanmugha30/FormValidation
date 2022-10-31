
const form=document.getElementById('form');
const password1=document.getElementById('password1');
const password2=document.getElementById('password2');
const message=document.getElementById('message');
const messageContainer=document.querySelector('.message-container');


//Event Listener

var isValid=false;
var isConfirm=false;

function validateForm(){
	isValid=form.checkValidity();
	//if an error occur
	if(!isValid){
		message.textContent="Please fill out all fields";
		message.style.color="red";
		messageContainer.style.borderColor="red";
		return;
	}
	if(password1.value !== password2.value){
		message.textContent="passwords should match";
		message.style.color="red";
		messageContainer.style.borderColor="red";
	}
	else{
		isConfirm=true;
	}
	
	if(isValid && isConfirm){
		storeData();
		message.textContent="Succesfully Registered";
		message.style.color="green";
		messageContainer.style.borderColor="green";
	}

}

function storeData(){
	const user={
		name:form.name.value,
		phone:form.phone.value,
		email:form.email.value,
		password:form.password.value,
		url:form.url.value
	}
	console.log(user);
}

function processFormData(e){
	e.preventDefault();
	//Validate Form
	validateForm();
}

form.addEventListener('submit',processFormData);
