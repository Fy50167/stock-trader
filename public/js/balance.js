
const balanceFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect value from the balance form
    const addBalance = parseFloat(document.querySelector('#add-balance').value);
    const currentBalance = parseFloat(document.querySelector('#current-balance').innerHTML);

    console.log(addBalance);
  
    //add validation code to check for negative numbers and the e character 
    if (addBalance > 0) {
     const newBalance = addBalance + currentBalance;
     //console.log('hit');

     // Send a PUT request to the API endpoint
    const response = await fetch('/api/users/balance', {
      method: 'PUT',
      body: JSON.stringify({ balance: newBalance }),
      headers: { 'Content-Type': 'application/json' },
    });

      if (response.ok) {
        // If successful, refresh the page
        document.location.replace('/balance');

      } else {
        //alert(response.statusText);//remove alert for HTML text
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: response.statusText,
          confirmButtonColor: "#47a0ff",
        });
      }
    } else {
        //include code to display message without alert
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please provide a positive value!',
          confirmButtonColor: "#47a0ff",
        });
    }
  };

  document
  .querySelector('.balance-form')
  .addEventListener('submit', balanceFormHandler);