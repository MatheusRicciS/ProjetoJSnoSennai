function btnForm() {
    let nome = document.getElementById('name').value;
    alert("Enviado com Sucesso! " + nome);

    document.getElementById("formContato").reset();
}