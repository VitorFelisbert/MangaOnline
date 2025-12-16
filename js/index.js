function procurar(entradaU, entradaS){
    fetch("./json/loading.json").then(response => response.json()).then(data =>{
        const Usuario = data.find((user) => user.usuario === entradaU && user.senha === entradaS);
        if (Usuario == undefined){
            alert("usario ou senha incorretos")
        } else{
            window.location.href = './segunda.html';
        }
    })
}
function login(){
usuario = document.getElementById('usuario').value;
senha = document.getElementById('senha').value;

procurar (usuario, senha);
}

