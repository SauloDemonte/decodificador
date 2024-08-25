function removeAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const chave = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const chaveInvertida = Object.fromEntries(Object.entries(chave).map(([letra, codificacao]) => [codificacao, letra]));

function criptografar(texto) {
    const textoLimpo = removeAcentos(texto.toLowerCase());
    let textoCriptografado = '';

    for (let letra of textoLimpo) {
        textoCriptografado += chave[letra] || letra;
    }

    return textoCriptografado;
}

function descriptografar(textoCriptografado) {
    let textoOriginal = '';
    let i = 0;

    while (i < textoCriptografado.length) {
        let encontrado = false;

        // Verificar todas as entradas da chave invertida
        for (let tamanho = 5; tamanho >= 2; tamanho--) {
            let trecho = textoCriptografado.substr(i, tamanho);
            if (trecho in chaveInvertida) {
                textoOriginal += chaveInvertida[trecho];
                i += tamanho;
                encontrado = true;
                break;
            }
        }

        // Se não encontrou um trecho correspondente, adicione o caractere individualmente
        if (!encontrado) {
            textoOriginal += textoCriptografado[i];
            i++;
        }
    }

    return textoOriginal;
}

function processarTexto(acao) {
    const texto = document.getElementById('palavra').value;

    if (!texto) {
        return alert('Por favor, insira um texto para processar.');
    }

    let resultado = '';
    if (acao === 'criptografar') {
        resultado = criptografar(texto);
    } else if (acao === 'descriptografar') {
        resultado = descriptografar(texto);
    }

    document.getElementById('resultado').value = resultado;
}

