
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
      // If successful, redirect the browser to the home page
      document.location.replace('/balance');
    } else {
      alert(response.statusText);//remove alert for HTML text
    }
    } else {
        //include code to display message without alert
    }

  };

  document
  .querySelector('.balance-form')
  .addEventListener('submit', balanceFormHandler);