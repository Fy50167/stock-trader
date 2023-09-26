const userId = document.querySelector('#id-hide').innerHTML;

const buyStock = async () => {

    const response = await fetch('/api/stock', {
      method: 'PUT',
      body: JSON.stringify({ user_id: userId }),
      headers: { 'Content-Type': 'application/json' },
    });
};

const buyButtons = document.getElementsByClassName('buy-button');
buyButtons.forEach((button) => { 
    button.addEventListener('click', buyStock)
});
