async function buscarEndereco(){
    try{
        const cep = document.getElementById("cep").value;
        const resposta = await fetch("https://viacep.com.br/ws/"+cep+"/json/");
        const dados = await resposta.json();
        document.getElementById("rua").textContent = dados.logradouro;
        document.getElementById("bairro").textContent = dados.bairro;
        document.getElementById("cidade").textContent = dados.localidade;
        document.getElementById("estado").textContent = dados.estado;
        document.getElementById("regiao").textContent = dados.regiao;
        alert("Consulta de CEP concluida");
    } catch (erro){
        alert("Erro ao buscar dados da API");
        console.log(erro);
    }
}