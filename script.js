// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevents the page from refreshing
    const textInput = document.getElementById("textInput").value;
    const outputDiv = document.getElementById("outputDiv");
    const wordCount = document.getElementById("wordCount");
  
    // Count the number of words
    const words = textInput.split(" ");
    const count = words.length;
  
    // Display the word count
    wordCount.textContent = `Word count: ${count}`;
  
    // Clear the input field
    document.getElementById("textInput").value = "";
  }
  
  // Add event listener to the form
  const form = document.getElementById("textForm");
  form.addEventListener("submit", handleSubmit);
  
  