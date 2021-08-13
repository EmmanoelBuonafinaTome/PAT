// Consuming API
const searchCep = async() => {
    const cep = document.getElementById('cep').value;
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados`;

    // Processing data
    const dados = await fetch(url);
    const address = await dados.json();
    console.log(address)

    if(address.hasOwnProperty('erro')){
        console.log(address);
        console.log('CEP not found');
    }else {
        fillForm(address); 
    }
}