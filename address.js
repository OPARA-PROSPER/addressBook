
const delete_btn = document.querySelector('#section_activeContacts');

delete_btn.addEventListener('click', function(e){

    if (e.target.className === "delete") {
        const btn = e.target.parentElement.parentElement.parentElement.parentElement;
        btn.parentNode.removeChild(btn);
    } else if (e.target.className === "hide") {
        const hide = e.target.parentElement.parentElement.parentElement;
        hide.style.display = 'none';
    }
});

const edit = document.querySelector('#section_activeContacts');

edit.addEventListener('click', function(e){

    if ( e.target.className === "edit") {
        const edit_form = document.getElementById('editDetails');
        const details = e.target.parentElement.previousElementSibling.children[0].children;

        //
        let name = details[0].children[1];
        let phone = details[1].children[1];
        let email = details[2].children[1];




        const editForm = document.forms['editForm'];
        
        // get the input children of the editform
        const editName = editForm.children[2];
        const editPhone = editForm.children[4];
        const editEmail = editForm.children[6];

        //set attributes
        editName.setAttribute('value', name.textContent);
        editPhone.setAttribute('value', phone.textContent);
        editEmail.setAttribute('value', email.textContent);
        

        editForm.addEventListener('submit', function(e){
            e.preventDefault();

            name.textContent = editName.value;
            phone.textContent = editPhone.value;
            email.textContent = editEmail.value;

            edit_form.style.display = 'none';
        });
        
        edit_form.style.display = 'inline-block';


    }

        
});

const form = document.forms['newContactForm'];

form.addEventListener('submit', function(e){
    e.preventDefault();

    // Get all the form inputs
    const newName = form.querySelector('#name').value;
    const newPhone = form.querySelector('#phone').value;
    const newEmail = form.querySelector('#email').value;
    
    // Create new elements for the New User
    const addHeader = document.createElement('header');
    const addButton = document.createElement('button');
    const addContactDiv = document.createElement('div');
    const addOneDiv = document.createElement('div');
    const addUlDiv = document.createElement('div');
    const addUl = document.createElement('ul');
    const addFirstLi = document.createElement('li');
    const addSecondLi = document.createElement('li');
    const addThirdLi = document.createElement('li');

    const addFirstSpan = document.createElement('span');
    const addFirstSpanSpan = document.createElement('span');
    const addSecondSpan = document.createElement('span');
    const addSecondSpanSpan = document.createElement('span');
    const addThirdSpan = document.createElement('span');
    const addThirdSpanSpan = document.createElement('span');

    const addButtonDiv = document.createElement('div');
    const addFirstButton = document.createElement('button');
    const addSecondButton = document.createElement('button');
    const addThirdButton = document.createElement('button');

    // Append created Elements to the right Elements
    addHeader.appendChild(addButton);
    addHeader.appendChild(addContactDiv);

    addContactDiv.appendChild(addOneDiv);
    
    addOneDiv.appendChild(addUlDiv);
    addOneDiv.appendChild(addButtonDiv);

    addUlDiv.appendChild(addUl);
    addUl.appendChild(addFirstLi);
    addUl.appendChild(addSecondLi);
    addUl.appendChild(addThirdLi);

    addFirstLi.appendChild(addFirstSpan);
    addFirstLi.appendChild(addFirstSpanSpan);

    addSecondLi.appendChild(addSecondSpan);
    addSecondLi.appendChild(addSecondSpanSpan);

    addThirdLi.appendChild(addThirdSpan);
    addThirdLi.appendChild(addThirdSpanSpan);

    addButtonDiv.appendChild(addFirstButton);
    addButtonDiv.appendChild(addSecondButton);
    addButtonDiv.appendChild(addThirdButton);


    delete_btn.appendChild(addHeader);

    // Add Content to the created Elements
    addButton.innerHTML = `${newName}<span>View</span>`;
    addFirstSpan.textContent = 'Name :';
    addSecondSpan.textContent = 'Phone :';
    addThirdSpan.textContent = 'Email :';

    addFirstSpanSpan.textContent = ` ${newName}`;
    addSecondSpanSpan.textContent = ` ${newPhone}`;
    addThirdSpanSpan.textContent = ` ${newEmail}`;
    
    addFirstButton.textContent = 'Edit';
    addSecondButton.textContent = 'Delete';
    addThirdButton.textContent = 'hide';


    //Set the Attributes of the created Elments
    addContactDiv.setAttribute('class', 'contact');
    addOneDiv.setAttribute('class', 'one');
    addUl.setAttribute('id', 'ul');
    addButtonDiv.setAttribute('id', 'button');
    addFirstButton.setAttribute('class', 'edit');
    addSecondButton.setAttribute('class', 'delete');
    addThirdButton.setAttribute('class', 'hide');


    const hideContact = document.querySelectorAll('header button span');

    Array.from(hideContact).forEach(function(button){  
        
        button.addEventListener('click', function(e){
            const makeVisible = e.target.parentElement.nextElementSibling;
    
            makeVisible.style.display = 'block';        

        });
        
    });
    
});



const hideContact = document.querySelectorAll('header button span');

Array.from(hideContact).forEach(function(button){
    
    button.addEventListener('click', function(e){
        const makeVisible = e.target.parentElement.nextElementSibling;

        makeVisible.style.display = 'block';  
    });
    
});