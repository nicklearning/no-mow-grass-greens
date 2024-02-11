document.addEventListener('DOMContentLoaded', function () {
    // Get a reference to the form
    const quoteForm = document.querySelector('form');

    // Add event listener for form submission
    quoteForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form data
        const formData = new FormData(quoteForm);

        // Create object from form data
        const quoteData = {};
        formData.forEach((value, key) => {
            quoteData[key] = value;
        });

        // Make POST request to submit quote
        fetch('/get-a-quote/submit-quote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(quoteData)
        })
            .then(response => {
                if (response.ok) {
                    // Handle successful response
                    console.log('Form submitted successfully');
                    // Optionally, you can redirect the user to another page
                    // window.location.href = '/thank-you'; // Redirect to thank-you page
                } else {
                    // Handle error response
                    console.error('Form submission failed');
                }
            })
            .catch(error => {
                // Handle network errors
                console.error('Error:', error);
            });
    });
});
