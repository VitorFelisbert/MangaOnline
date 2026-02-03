fetch(`../json/banco-dados.json`).then(response => response.json()).then(data => {
    const mangaOnline = document.querySelector('#mangaOnline');
 
    data .forEach( manga =>
    {
        mangaOnline.innerHTML += `      
        <td style="max-width: 500px;">
        
        <div class="divimagem">
        <img src="${manga.img}" alt="" ></div>
        <p>${manga.nome}</p>
        <p>${manga.autor}</p>
        <div class="notapopulares">
        <p style="color:yellow; display: inline;"> ${manga.nota} ★</p></div>
        <p class="mangs">${manga.descricao} </p>
        <h2>${manga.capitulos}</h2> 
        
        </td>
        `;

    }) 
  
    
}
)
