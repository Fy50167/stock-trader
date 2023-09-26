const Swal = require('sweetalert2');

const balanceFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect value from the balance form
    const addBalance = parseFloat(document.querySelector('#add-balance').value);
    const currentBalance = parseFloat(document.querySelector('#current-balance').innerHTML);
  
    //add validation code to check for negative numbers and the e character 
    if (addBalance || addBalance > 0) {
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
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your balance has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        //alert(response.statusText);//remove alert for HTML text
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong, your balance could not be updated!',
        })
      }
    } else {
        //include code to display message without alert
        Swal.fire({
          icon: 'error',
          title: 'Invalid Balance',
          text: 'Please provide a positive balance value and try again!',
        })
    }
  };

  document
  .querySelector('.balance-form')
  .addEventListener('submit', balanceFormHandler);