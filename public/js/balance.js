const balanceFormHandler = async (event) => {
    event.preventDefault();

    console.log("button hit");
  
    // Collect value from the balance form
    const addBalance = document.querySelector('#add-balance').value.trim();
  
    if (addBalance) {
      // Send a get request to the API endpoint
      const response = await fetch(`/api/users/balance`, {
        method: 'GET',
      });
  
      if (response.ok) {
        
        console.log(response);
        // If successful, redirect the browser to the home page
        //document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.balance-form')
  .addEventListener('submit', balanceFormHandler);