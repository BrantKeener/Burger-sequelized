
// This will control our client-side js needs

// Evaluate session data, and if the user is still in the same session, do not run the load animations
document.addEventListener('DOMContentLoaded', shouldAnimate = () => {
    const data = sessionStorage.getItem('singleSess');
    if(data !== 'true') {
        setTimeout(fadeClassChange, 4000);
    } else {
        fadeClassChange();
    }
    sessionKeeper();
});

// This will disable our animation by removing classes. Only toggles the first time (so animation will run once)
const fadeClassChange = () => {
    const title = document.getElementById('title');
    const content = document.getElementById('content-container');
    title.style = 'display: none';
    content.classList.toggle('fade-in');
};

// We do not want the title load animations to fire after the user has begun their session, we're going to store a little session data
sessionKeeper = () => {
    const data = sessionStorage.getItem('singleSess');
    if(data === null) {
        sessionStorage.setItem('singleSess', true);
    };
};

// Event Delegation
document.addEventListener('click', (event) => {
    if(event.target.id === 'add-submit' || event.target.id === 'new-customer') {
        event.preventDefault();
    }
    const buttonClick = () => {
        if(event.target.id === '')
            return event.target.className;
        else {
            return event.target.id;
        };
    };
    const data = event.target.dataset.id; 
    switch(buttonClick()) {
        case('devour-burg'):
        devourIt(data);
        break;
        case('add-submit'):
        addBurger();
        break;
        case('new-customer'):
        addCustomer();
        break;
        case('modal-container'):
        toggleModal();
        break;
        case('close-button'):
        toggleModal();
        break;
    };
});

// Function to handle the "Devour it" button click
devourIt = (data) => {
    const userMenu = document.getElementById('existing-cust');
    const selectedUser = userMenu.value;
    const url = `/api/burgers/${data}`;
    if(selectedUser === '') {
        return toggleModal('nocustomer');
    }
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify({'status': 1, 'customer': parseInt(selectedUser)}),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        location.reload();
    });
}

// Function to send our new burger data to the database
addBurger = () => {
    const userMenu = document.getElementById('existing-cust');
    const selectedUser = userMenu.value;
    let name = document.getElementsByName('burg-name')[0].value;
    let nameClear = document.getElementsByName('burg-name')[0];
    const url = '/api/burgers'
    const newBurgerObject = {'burgerName': name.trim(), 'CustomerId': parseInt(selectedUser)};
    if(selectedUser === '') {
        nameClear.value = '';
        return toggleModal('nocustomer');
    }
    if(name !== '') {
        if(name.trim() !== '') {
            nameClear.value = '';
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(newBurgerObject),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                location.reload()
            })
        } else {
            toggleModal('burger');
            return;
        };
    } else {
        toggleModal('burger');
        return;
    };
};

// Add a Customer
addCustomer = () => {
    let name = document.getElementsByName('cust-name')[0].value;
    const nameClear = document.getElementsByName('cust-name')[0];
    const url = 'api/customers';
    const newCustomer = { "customerName" : name.trim()};
    if(name !== '') {
        if(name.trim() !== '') {
            nameClear.value = '';
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(newCustomer),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                location.reload()
            })
        } else {
            toggleModal('customer');
            return;
        };
    } else {
        toggleModal('customer');
        return;
    };
}

const toggleModal = (corb) => {
    const burgerEmpty = 'Nobody Likes an Empty Burger';
    const customerEmpty = 'Your Horse May Not Have a Name, But You Must';
    const userNotSelected = 'You Must Choose a Name From "Returning Customer"';
    const giveAName = 'Give us a name.';
    const userDropMenu = 'You can select your name from the dropdown menu.';
    const head = document.getElementById('modal-head');
    const body = document.getElementById('modal-body');
    if(corb === 'burger') {
        head.textContent = burgerEmpty;
        body.textContent = giveAName;
    } else if(corb === 'customer') {
        head.textContent = customerEmpty;
        body.textContent = giveAName;
    } else if(corb === 'nocustomer') {
        head.textContent =  userNotSelected;
        body.textContent = userDropMenu;
    }
    const modal = document.getElementById('modal-container');
    modal.classList.toggle('modal-display');
}