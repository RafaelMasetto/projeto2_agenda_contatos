const form = document.getElementById('form-contato');
const imgWhatsapp = '<img src="./images/whatsapp.jpg" alt="Logo Whatsapp">';
const imgTelefone = '<img src="./images/telefone.png" alt="Logo Telefone">';

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelContato = document.getElementById('tel-contato');
    const selectTipoContato = document.getElementById('tipo-contato')

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelContato.value}</td>`;

    const imgSrc = selectTipoContato.value === "Whatsapp" ? imgWhatsapp : imgTelefone;
    linha += `<td>${imgSrc}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeContato.value = '';
    inputTelContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

