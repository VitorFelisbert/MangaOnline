function procurar(entradaU, entradaS){
    fetch("./json/loading.json").then(response => response.json()).then(data =>{
        const Usuario = data.find((user) => user.usuario === entradaU && entradaS);
        if (Usuario == undefined){
            alert("usario ou senha incorretos")
        } else{
            window.location.href = 'https://www.google.com';
        }
    })
}
function login(){
usuario = document.getElementById('usuario').value;
senha = document.getElementById('senha').value;

procurar (usuario, senha);
}

