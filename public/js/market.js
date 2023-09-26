const userId = parseInt(document.querySelector('#user-id').innerHTML);

const buyStock = async (event) => {
    const stockId = parseInt(event.currentTarget.nextElementSibling.innerHTML);
    const response = await fetch(`/api/stocks/:${stockId}`, {
      method: 'PUT',
      body: JSON.stringify({ user_id: userId }),
      headers: { 'Content-Type': 'application/json' },
    });
};

const buyButtons = document.getElementsByClassName('buy-button');

let i = 1;

for (button of buyButtons) {

  button.addEventListener('click', buyStock);
  i++;
};
