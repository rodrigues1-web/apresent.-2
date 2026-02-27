const botao = document.getElementById("btnBuscar");
const nome = document.getElementById("nomePokemon");
imagem = document.getElementById("imagemPokemon");

botao.addEventListener("click", function(){
    const numero=document.getElementById("numerodoPokemon").value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
    .then(function(resposta){
        return resposta.json ();
})
.then (function(dados)  {
   nome.textContent = dados.name;
   imagem.src = dados.sprites.front_default;
})
});