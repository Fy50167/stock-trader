const userId = parseInt(document.querySelector('#user-id').innerHTML);



const buyStock = async (event) => {
    const currentBalance = parseFloat(document.querySelector('#current-balance').innerHTML);
    const stockId = parseInt(event.currentTarget.nextElementSibling.innerHTML);
    const stockPrice = parseFloat(event.currentTarget.getAttribute('data'));
    const newQuantity = parseInt(event.currentTarget.previousElementSibling.value);

    //logic for if stockPrice is greater than current balance show sweet alert else carry on with the "purchase"
    if (currentBalance < stockPrice) return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Insufficient funds",
      confirmButtonColor: "#47a0ff",
    }); else {
      const response = await fetch(`/api/stocks/${stockId}`, {
        method: 'POST',
        body: JSON.stringify({ quantity: newQuantity }),
        headers: { 'Content-Type': 'application/json' },
      });

      const newBalance = currentBalance - (stockPrice * newQuantity);

      // Send a PUT request to the API endpoint
    const responsePUT = await fetch('/api/users/balance', {
      method: 'PUT',
      body: JSON.stringify({ balance: newBalance }),
      headers: { 'Content-Type': 'application/json' },
    });

      if (response.ok && responsePUT.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Stock purchased!',
          showConfirmButton: false,
          timer: 1500
        }); 
        const newBalance = parseInt(currentBalance - (stockPrice * newQuantity));
        document.querySelector('#current-balance').innerHTML = newBalance;
        
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
