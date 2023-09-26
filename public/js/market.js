const userId = parseInt(document.querySelector('#user-id').innerHTML);

const buyStock = async () => {
    const stockId = parseInt(this.parentElement.parentElement.firstChild.innerHTML);
    const response = await fetch(`/api/stock/${stockId}`, {
      method: 'PUT',
      body: JSON.stringify({ 
        user_id: userId }),
      headers: { 'Content-Type': 'application/json' },
    });
};

const buyButtons = document.getElementsByClassName('buy-button');

for (button of buyButtons) {
  button.addEventListener('click', buyStock)
};
