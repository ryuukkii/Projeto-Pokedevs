const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {

        const cartaoPokedevAberto = document.querySelector(".aberto");
        cartaoPokedevAberto.classList.remove("aberto");

        const idPokedevSelecionado = pokedev.attributes.id.value;
        const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
        const CartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
        CartaoPokedevParaAbrir.classList.add("aberto")

            const pokedevAtivoNaListagem = document.querySelector(".ativo");
            pokedevAtivoNaListagem.classList.remove("ativo");

            const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
            pokedevSelecionadoNaListagem.classList.add("ativo"); 
    
    })
})
