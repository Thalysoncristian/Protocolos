// Função para gerar o acionamento
function gerarAcionamento() {
    const site = document.getElementById("site-search").value.toUpperCase() || "";
    const uc = document.getElementById("uc").value || "";
    const endereco = document.getElementById("endereco").value || "";
    const protocolo = document.getElementById("protocolo").value.toUpperCase() || "";
    const atendente = document.getElementById("atendente").value.toUpperCase() || "";
    const horaData = new Date().toLocaleString('pt-BR');

    let resultado = `INFORMATIVO DE PROTOCOLO\nSITE: ${site}\nUC: ${uc}\nENDEREÇO: ${endereco}\nPROTOCOLO: ${protocolo}\nATENDENTE: ${atendente}\nHORA E DATA: ${horaData}`;

    document.getElementById("resultado").innerText = resultado.trim();
}

// Função para copiar o acionamento gerado
function copiarAcionamento() {
    const resultado = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(resultado);
    alert("Acionamento copiado para a área de transferência!");
}

// Função para buscar site e filtrar opções
document.getElementById("site-search").addEventListener("input", function() {
    const filter = this.value.toUpperCase();
    const options = document.getElementById("site").options;
    const dropdownContent = document.getElementById('dropdown-content');
    dropdownContent.innerHTML = '';

    if (filter.length >= 3) {
        for (let i = 0; i < options.length; i++) {
            const optionText = options[i].text.toUpperCase();
            if (optionText.includes(filter)) {
                const div = document.createElement('div');
                div.textContent = optionText;
                div.addEventListener('click', function() {
                    document.getElementById('site-search').value = optionText;
                    dropdownContent.classList.remove('show');
                    preencherDados(options[i].value);
                });
                dropdownContent.appendChild(div);
            }
        }
        dropdownContent.classList.add('show');
    } else {
        dropdownContent.classList.remove('show');
    }
});

// Função para preencher dados de UC e Endereço
function preencherDados(value) {
    const select = document.getElementById('site');
    let found = false;
    for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value === value) {
            const dados = select.options[i].value.split('*');
            document.getElementById('uc').value = dados[1];
            document.getElementById('endereco').value = dados[2];
            found = true;
            break;
        }
    }
    if (!found) {
        document.getElementById('uc').value = '';
        document.getElementById('endereco').value = '';
    }
}

document.addEventListener('click', function(event) {
    const dropdownContent = document.getElementById('dropdown-content');
    if (!event.target.matches('#site-search')) {
        dropdownContent.classList.remove('show');
    }
});

// Função para limpar campos UC e Endereço antes de preencher novos dados
function limparCampos() {
    document.getElementById('uc').value = '';
    document.getElementById('endereco').value = '';
}

// Adiciona a chamada para limparCampos antes de preencher novos dados
document.getElementById('site-search').addEventListener('input', function() {
    limparCampos();
    const searchValue = this.value.toLowerCase();
    const select = document.getElementById('site');
    const dropdownContent = document.getElementById('dropdown-content');
    dropdownContent.innerHTML = '';

    if (searchValue.length >= 3) {
        for (let i = 0; i < select.options.length; i++) {
            const option = select.options[i];
            if (option.text.toLowerCase().includes(searchValue)) {
                const div = document.createElement('div');
                div.textContent = option.text;
                div.addEventListener('click', function() {
                    document.getElementById('site-search').value = option.text;
                    dropdownContent.classList.remove('show');
                    preencherDados(option.value);
                });
                dropdownContent.appendChild(div);
            }
        }
        dropdownContent.classList.add('show');
    } else {
        dropdownContent.classList.remove('show');
    }
});
