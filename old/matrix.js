// Script para o efeito Matrix nas duas laterais
function createMatrixEffect(canvasId) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');

    // Ajustar o canvas para o tamanho completo
    canvas.width = 200;
    canvas.height = window.innerHeight;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 16;
    const columns = canvas.width / fontSize; // Número de colunas

    // Uma coluna por caractere
    const drops = Array(Math.floor(columns)).fill(1);

    // Função de animação
    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Fundo com leve opacidade para criar o efeito de fade
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0F0'; // Cor verde Matrix
        ctx.font = fontSize + 'px monospace';

        drops.forEach((y, x) => {
            const text = letters.charAt(Math.floor(Math.random() * letters.length));
            ctx.fillText(text, x * fontSize, y * fontSize);

            if (y * fontSize > canvas.height && Math.random() > 0.975) {
                drops[x] = 0;
            }

            drops[x]++;
        });
    }

    setInterval(drawMatrix, 50);
}

// Inicializar o efeito Matrix para ambos os canvases
createMatrixEffect('matrixLeft');
createMatrixEffect('matrixRight');
