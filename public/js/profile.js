
const userId = parseInt(document.querySelector('#user-id').innerHTML);
const currentBalance = parseFloat(document.querySelector('#current-balance').innerHTML);

const sellStock = async (event) => {
    const stockId = parseInt(event.currentTarget.nextElementSibling.innerHTML);
    const stockPrice = parseFloat(event.currentTarget.getAttribute('data'));
    const sellQuantity = parseFloat(document.querySelector('#sell-quantity').value);
    const currentQuantity = parseFloat(document.querySelector('#quantity').innerHTML);

    
    if (sellQuantity < currentQuantity) return Swal.fire({//invalid quantity
      icon: 'error',
      title: 'Oops...',
      text: "Please provide a number equal to or less than the number of stocks you own.",
      confirmButtonColor: "#47a0ff",
    }); else if (sellQuantity = currentQuantity) { //selling all of the stock
      
      const response = await fetch(`/api/stocks/${stockId}`, {
        method: 'DELETE',
      });

      const newBalance = currentBalance - (stockPrice * sellQuantity);

      // Send a PUT request to the API endpoint
      const response2 = await fetch('/api/users/balance', {
        method: 'PUT',
        body: JSON.stringify({ balance: newBalance }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok && response2.ok) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Stock sold!',
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

    } else { //selling only some of the stock

      const newQuantity = currentQuantity - sellQuantity;

      const response = await fetch(`/api/stocks/${stockId}`, {
        method: 'PUT',
        body: JSON.stringify({ quantity: newQuantity }),
        headers: { 'Content-Type': 'application/json' },
      });

      const newBalance = currentBalance - (stockPrice * sellQuantity);

      // Send a PUT request to the API endpoint
      const response2 = await fetch('/api/users/balance', {
        method: 'PUT',
        body: JSON.stringify({ balance: newBalance }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok && response2.ok) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Stock sold!',
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

//change names for profile button ids

const buyButtons = document.getElementsByClassName('buy-button');

let i = 1;

for (button of buyButtons) {

  button.addEventListener('click', sellStock);
  i++;
};