// Script personalizado para interações simples

document.addEventListener('DOMContentLoaded', () => {
    console.log('Site carregado e pronto para edição!');

    // Exemplo: Adicionar comportamento extra aos botões se precisar
    const buyButtons = document.querySelectorAll('a[href="#pricing"]');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Se quiser rastrear cliques ou algo assim futuramente
            console.log('Usuário clicou em comprar');
        });
    });
});
