const userId = parseInt(document.querySelector('#user-id').innerHTML);
const currentBalance = parseFloat(document.querySelector('#current-balance').innerHTML);

const buyStock = async (event) => {
    const stockId = parseInt(event.currentTarget.nextElementSibling.innerHTML);
    const stockPrice = parseFloat(event.currentTarget.getAttribute('data'));

    //logic for if stockPrice is greater than current balance show sweet alert else carry on with the "purchase"
    if (currentBalance < stockPrice) return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Insufficient funds",
      confirmButtonColor: "#47a0ff",
    }); else {
      const response = await fetch(`/api/stocks/${stockId}`, {
        method: 'POST',
        body: JSON.stringify({ user_id: userId }),
        headers: { 'Content-Type': 'application/json' },
      });

      const newBalance = currentBalance - stockPrice;

      // Send a PUT request to the API endpoint
    const responsePUT = await fetch('/api/users/balance', {
      method: 'PUT',
      body: JSON.stringify({ balance: newBalance }),
      headers: { 'Content-Type': 'application/json' },
    });

      if (response.ok && responsePUT.ok) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Stock purchased!',
          showConfirmButton: false,
          timer: 1500
        }); 
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: response.statusText,
          confirmButtonColor: "#47a0ff",
        });
      }
    }  
};

const buyButtons = document.getElementsByClassName('buy-button');

let i = 1;

for (button of buyButtons) {

  button.addEventListener('click', buyStock);
  i++;
};
