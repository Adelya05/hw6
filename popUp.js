const ROOT = document.getElementById('root');

const redAcceptButton = document.getElementById('redAcceptButton'); 
const greenDeclineButton = document.getElementById('greenDeclineButton'); 
const modalContent = document.getElementById('modalContent');

const btnModal = document.createElement('button');
ROOT.append(btnModal);
btnModal.textContent = 'SHOW MODAL';

btnModal.style.cssText = `
color: black;
padding: 10px;
cursor: pointer;
border-radius: 10px;
position: fixed;
top: 50%;`;

// Задний фон
const modal = document.createElement('div'); 
modal.style.cssText = `
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
backdrop-filter: blur(2px);
display: none;
justify-content: center;
align-items: center;`;

// Окно
const modalWindow = document.createElement('div'); 
modalWindow.style.cssText = `
width: 800px;
height: 250px;
background-color: #fff;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
padding: 20px;
font-size: 20px;
color: #000;
border-radius: 15px;
box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 1);`;

modal.append(modalWindow);

//загаловок
const modalTitle = document.createElement('h1');
modalTitle.textContent = 'Warning!';
modalTitle.style.cssText = `
text-align: left;
font-size: 24px;
margin-bottom: 10px;
position: absolute;
top: 20px; 
left: 20px; 
font-size: 24px;` 

modalWindow.append(modalTitle);

/////
const modalContentText = document.createElement('p'); 
modalContentText.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing 
elit. Officiis sequi ea laborum iusto dolore a, odit provident facilis aliquam 
deleniti nemo necessitatibus amet quae rem doloremque tenetur beatae voluptate? Provident.`;

modalContentText.style.cssText = `
font-size: 16px;
line-height: 1.5;
margin-top: 40px;`;

modalWindow.append(modalContentText);

//кнопки
btnModal.addEventListener('click', () => {
    modal.style.display = 'flex';
    ROOT.append(modal);
});

//  Х
const btnClouse = document.createElement('button');
btnClouse.textContent = 'x';
btnClouse.style.cssText = `
position: absolute;
right: 10px;
top: 10px;
background-color: white;
border: none;
width: 40px;
height: 30px;
font-size: 30px;`;

modalWindow.append(btnClouse);

btnClouse.addEventListener('click', () => {
    modal.remove();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.remove();
    }
});


// ACCEPT
const accept = document.createElement('button');
accept.textContent = 'ACCEPT';
accept.style.cssText = `
background-color: green;
border: none;
width: 100px;
height: 40px;
font-size: 16px;
color: white;
border-radius: 5px;
cursor: pointer;
`;

/// DECLINE
const decline = document.createElement('button');
decline.textContent = 'DECLINE';
decline.style.cssText = `
background-color: red;
border: none;
width: 100px;
height: 40px;
font-size: 16px;
color: white;
border-radius: 5px;
cursor: pointer;
margin: 10px 10px;`;

modalWindow.append(accept, decline);

accept.addEventListener('click', () => {
    modal.style.backgroundColor = 'red';
});

decline.addEventListener('click', () => {
    modal.style.backgroundColor = 'green';
});




