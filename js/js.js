fetch(`../json/banco-dados.json`).then(response => response.json()).then(data => {
    const mangaOnline = document.querySelector('#mangaOnline');
 
    data .forEach( manga =>
    {
        mangaOnline.innerHTML = `
        <td style="max-width: 500px;">
        <h1>${manga.nome}</h1>
        <a href="${manga.img}">
        <div class="divimagem">
        <img src="img/One-Piece.jpg" alt="One piece" ></div>
        <p>${manga.author}</p>
        <div class="nota populares">
        <p style="color:yellow; display: inline;"> ${manga.nota} ★</p></div>
        <p>${manga.descricao} </p>
        <h2>${manga.capitulos}</h2>  
        </a>
        </td>
        `;


    }

    )
    
}
)
