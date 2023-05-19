// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevents the page from refreshing
    const textInput = document.getElementById("textInput").value;
    const outputDiv = document.getElementById("outputDiv");
    outputDiv.textContent = `You entered: ${textInput}`;
  }
  
  // Add event listener to the form
  const form = document.getElementById("textForm");
  form.addEventListener("submit", handleSubmit);
  