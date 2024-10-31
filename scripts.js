document.getElementById("site-search").addEventListener("input", function() {
    const filter = this.value.toUpperCase();
    const options = document.getElementById("site").options;

    for (let i = 1; i < options.length; i++) {
        const optionText = options[i].text.toUpperCase();
        options[i].style.display = optionText.includes(filter) ? "" : "none";
    }
});

function preencherDados() {
    const siteSelect = document.getElementById("site").value;
    const [site, uc, endereco] = siteSelect.split('*');
    document.getElementById("uc").value = uc || '';
    document.getElementById("endereco").value = endereco || '';
}

function gerarInformativo() {
    const site = document.getElementById("site").selectedOptions[0].text;
    const uc = document.getElementById("uc").value;
    const endereco = document.getElementById("endereco").value;
    const protocolo = document.getElementById("protocolo").value;
    const atendente = document.getElementById("atendente").value;
    const dataHora = new Date().toLocaleString("pt-BR");

    const informativo = `
        <strong>INFORMATIVO DE PROTOCOLO</strong><br>
        SITE: ${site}<br>
        UC: ${uc}<br>
        ENDEREÇO: ${endereco}<br>
        PROTOCOLO: ${protocolo}<br>
        ATENDENTE: ${atendente}<br>
        HORA E DATA: ${dataHora}
    `;
    document.getElementById("resultado").innerHTML = informativo;
}
