const userId = parseInt(document.querySelector('#user-id').innerHTML);

const buyStock = async (id) => {
    const stockId = parseInt(document.querySelector(`#id-${id}`).innerHTML);
    const response = await fetch(`/api/stocks/${stockId}`, {
      method: 'PUT',
      body: JSON.stringify({ 
        user_id: userId }),
      headers: { 'Content-Type': 'application/json' },
    });
};

const buyButtons = document.getElementsByClassName('buy-button');

let i = 1;

for (button of buyButtons) {
  button.addEventListener('click', buyStock(i));
  i++;
};
