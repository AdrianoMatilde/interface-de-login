const form = document.querySelector('form');
const loginButton = document.querySelector('#login-button');

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // Enviar nome de usuário e senha para o servidor
    // usando uma solicitação AJAX ou outra tecnologia de rede
});
