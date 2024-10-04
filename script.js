// Detectando a rolagem e alterando a cor de fundo
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const documentHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;

    // Mudança de cor suave conforme a porcentagem de rolagem
    if (scrollPercentage < 50) {
        document.body.style.backgroundColor = '#433878'; // Cor inicial
    } else if (scrollPercentage >= 50) {
        document.body.style.backgroundColor = '#7E60BF'; // Cor intermediária
    }
});
