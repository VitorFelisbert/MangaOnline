function log(){
    fetch("bancodedados.json").then(response => response.json()).then(data => {
        // alert(JSON.stringify(data))
        const manga = data.find((anime) => );
        const info = documnetCreatElement("div");
        info.innerHTMl = `
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        
        `
    })
}