fetch(`banco-dados.json`).then(response => response.json()).then(data => {
    const container = document.createElement('tr');
    data.manga .forEach( manga =>
    {
        const mangasOnline = document.createElement('div');
        mangasOnline.innerHTML = `
        <td style="max-width: 500px;">
        <h1>${manga.nome}</h1>
        <a href="${manga.img}">
        <p>${manga.author}</p>
        <p style="color:yellow; display: inline;"> ${manga.nota} ★</p></div>
        <p>${manga.descricao} </p>
        <h2>${capitulos}</h2>  
        </a>
        </td>
        `;

    }

    )
    const mangaOnline = document.querySelector('#mangaOnline');
    mangaOnline.appendChild(container)
}
)