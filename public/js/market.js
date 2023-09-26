const userId = parseInt(document.querySelector('#user-id').innerHTML);
const currentBalance = parseFloat(document.querySelector('#current-balance').innerHTML);

const buyStock = async (event) => {
    const stockId = parseInt(event.currentTarget.nextElementSibling.innerHTML);
    const stockPrice = parseInt(event.innerHTML);//how do i get to the price value

    //logic for if stockPrice is greater than current balance show sweet alert else carry on with the "purchase"
    
    
    const response = await fetch(`/api/stocks/${stockId}`, {
      method: 'POST',
      body: JSON.stringify({ user_id: userId }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
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
};

const buyButtons = document.getElementsByClassName('buy-button');

let i = 1;

for (button of buyButtons) {

  button.addEventListener('click', buyStock);
  i++;
};
