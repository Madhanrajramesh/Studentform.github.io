// Add event listener to the submit button
document.querySelector("button[type='submit']").addEventListener("click", function(event) { 
  event.preventDefault();

  // Get the values of the form inputs
  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var linkedin = document.querySelector("#linkedin").value;
  var gender = document.querySelector("#gender").value;
  var skills = document.querySelector("#skills").value;
  var photo = document.querySelector("#photo").files[0];
  
  // Validate the form inputs
  if (!name || !email || !linkedin || !gender || !skills || !photo) {
    alert("All fields are required");
    return;
  }


  /*Validate the email
var emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
if (!email.match(emailPattern)) {
  alert("Invalid email address");
  return;
}

// Validate the LinkedIn URL
var linkedinPattern = /^https?:\/\/(www\.)?linkedin\.com\/(in|profile)\/[a-z0-9_-]+\/?$/i;
if (!linkedin.match(linkedinPattern)) {
  alert("Invalid LinkedIn URL");
  return;
}*/
  
  // Display the form data and photo on the page
  var formDataContainer = document.createElement("div");
  formDataContainer.classList.add("form-data-container");
  
  var column1 = document.createElement("div");
  column1.classList.add("column1");
  column1.innerHTML = `
    <p>Name:    ${name}</p>
    <p><Email:    <a href="mailto:${email}">${email}</a></p>
    <p>LinkedIn: <a href="${linkedin}" target="_blank">${linkedin}</a></p>
    <p>Gender:    ${gender}</p>
    <p>Skills:    ${skills}</p>
  `;
  var heading = document.createElement("h2");
heading.innerText = "Description";
formDataContainer.appendChild(heading);
var heading = document.createElement("h2");
heading.innerText = "Image";
formDataContainer.appendChild(heading);


  var column2 = document.createElement("div");
  column2.classList.add("column2");
  var photoContainer = document.createElement("img");
  photoContainer.src = URL.createObjectURL(photo);
  photoContainer.classList.add("form-data-img");
  column2.appendChild(photoContainer);
  
  formDataContainer.appendChild(column1);
  formDataContainer.appendChild(column2);
  document.body.appendChild(formDataContainer);
  
  
  document.querySelector("form").reset();
});
