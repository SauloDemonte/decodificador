// Função para remover acentos do texto
function removeAcentos(texto) {
    // Normaliza o texto para decompor caracteres acentuados e remove os diacríticos (acentos)
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Dicionário de substituições para criptografia
const chave = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

// Inverte o dicionário de criptografia para facilitar a descriptografia
const chaveInvertida = Object.fromEntries(
    Object.entries(chave).map(([letra, codificacao]) => [codificacao, letra])
);

// Função para criptografar o texto
function criptografar(texto) {
    // Converte o texto para minúsculas e remove acentos
    const textoLimpo = removeAcentos(texto.toLowerCase());
    let textoCriptografado = '';

    // Substitui cada letra pelo valor correspondente na chave de criptografia
    for (let letra of textoLimpo) {
        textoCriptografado += chave[letra] || letra; // Se não houver substituição, mantém a letra original
    }

    return textoCriptografado;
}

// Função para descriptografar o texto
function descriptografar(textoCriptografado) {
    let textoOriginal = '';
    let i = 0;

    // Percorre o texto criptografado para identificar e substituir as codificações pelo valor original
    while (i < textoCriptografado.length) {
        let encontrado = false;

        // Tenta encontrar a maior correspondência possível (até 5 caracteres)
        for (let tamanho = 5; tamanho >= 2; tamanho--) {
            let trecho = textoCriptografado.substr(i, tamanho);
            if (trecho in chaveInvertida) {
                textoOriginal += chaveInvertida[trecho];
                i += tamanho;
                encontrado = true;
                break;
            }
        }

        // Se não encontrou correspondência, mantém o caractere original
        if (!encontrado) {
            textoOriginal += textoCriptografado[i];
            i++;
        }
    }

    return textoOriginal;
}

// Processa o texto de acordo com a ação escolhida (criptografar ou descriptografar)
function processarTexto(acao) {
    const texto = document.getElementById('palavra').value;

    // Se o campo de texto estiver vazio, exibe um alerta e não faz nada
    if (!texto) {
        return alert('Por favor, insira um texto para processar.');
    }

    let resultado = '';
    // Verifica a ação e chama a função correspondente
    if (acao === 'criptografar') {
        resultado = criptografar(texto);
    } else if (acao === 'descriptografar') {
        resultado = descriptografar(texto);
    }

    // Exibe o resultado no campo de texto com ID 'resultado'
    document.getElementById('resultado').value = resultado;
}

// Copia o texto da área de resultado para a área de transferência
function copiarTexto() {
    const resultadoTextArea = document.getElementById('resultado');
    resultadoTextArea.select();
    resultadoTextArea.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o texto selecionado para a área de transferência e exibe uma mensagem de sucesso
    navigator.clipboard.writeText(resultadoTextArea.value).then(() => {
        alert('Texto copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
    });
}

// Função para criar o efeito visual estilo Matrix
function createMatrixEffect(canvasId) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');

    // Configura o canvas para ocupar o espaço adequado
    canvas.width = 200;
    canvas.height = window.innerHeight;

    // Letras e números usados no efeito Matrix
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 16;
    const columns = canvas.width / fontSize;

    // Array que controla a posição vertical de cada coluna de texto
    const drops = Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
        // Desenha um fundo semitransparente para criar o efeito de "trilha" das letras
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Configura a cor e o estilo da fonte
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        // Percorre cada coluna e desenha uma letra aleatória
        drops.forEach((y, x) => {
            const text = letters.charAt(Math.floor(Math.random() * letters.length));
            ctx.fillText(text, x * fontSize, y * fontSize);

            // Se a letra ultrapassar a altura do canvas, reinicia a queda da letra ocasionalmente
            if (y * fontSize > canvas.height && Math.random() > 0.975) {
                drops[x] = 0;
            }

            drops[x]++;
        });

        // Chama a função continuamente para criar a animação
        requestAnimationFrame(drawMatrix);
    }

    drawMatrix();
}

// Inicializa o efeito Matrix para ambos os canvases na página
createMatrixEffect('matrixLeft');
createMatrixEffect('matrixRight');
