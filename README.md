# decodificador
Projeto final do curso da Alura no Oracle One T7


Os comentários explicam cada seção do código, descrevendo a finalidade de cada parte. Isso deve ajudar tanto na identificação rápida de componentes do código.

HTML
Explicações dos comentários:
processarTexto(acao): Esta função recebe uma string ("criptografar" ou "descriptografar") e processa o texto inserido pelo usuário, alterando as letras de acordo com a ação.

O texto é processado usando o método replace() para substituir caracteres específicos por strings codificadas ou decodificadas.
O resultado é exibido no campo de texto com ID resultado.
copiarTexto(): Esta função copia o conteúdo do campo de resultado para a área de transferência.

A função seleciona o texto no campo de texto, copia para a área de transferência e exibe um alerta para informar que a operação foi concluída.

Javascript
Explicações dos comentários:
removeAcentos: Remove acentos do texto para garantir que apenas caracteres básicos sejam processados.
chave: Um dicionário que mapeia letras para strings específicas usadas na criptografia.
chaveInvertida: Um dicionário inverso que mapeia strings criptografadas de volta para suas letras originais.
criptografar: Substitui cada letra no texto pelo valor correspondente no dicionário de criptografia.
descriptografar: Reverte o processo de criptografia, substituindo as strings codificadas pelas letras originais.
processarTexto: Chama a função de criptografia ou descriptografia com base na ação escolhida pelo usuário.
copiarTexto: Copia o texto processado para a área de transferência.
createMatrixEffect: Cria um efeito visual inspirado no filme "Matrix" em um canvas, desenhando letras aleatórias que "caem" na tela.

CSS
Explicações dos comentários:
button: Define o estilo dos botões, incluindo cores, sombras, e comportamento de foco.
footer: Estiliza o rodapé, centralizando o texto e ajustando a cor e tamanho da fonte.
.whatsapp-icon img: Configura o tamanho e comportamento do ícone do WhatsApp, incluindo uma animação de "pulse" ao passar o mouse.
@keyframes pulse: Define a animação de "pulse" para o ícone do WhatsApp.
body: Configura o layout da página, garantindo que ela ocupe toda a altura da janela e escondendo a barra de rolagem.
canvas: Configura os elementos de canvas usados para o efeito Matrix, fixando-os nos lados da tela.
#main-container: Estiliza o contêiner principal, incluindo margens para afastá-lo dos canvases laterais e configurando a imagem de fundo.
#content: Define o estilo do conteúdo central, incluindo fundo semi-transparente e bordas arredondadas.
.containerInput: Configura a disposição dos inputs dentro do formulário, centralizando-os e adicionando espaçamento.
input[type="text"], textarea: Estiliza os campos de texto e textarea, incluindo bordas arredondadas, padding, e tamanho da fonte.
@media (max-width: 768px): Adapta o layout para telas menores, ajustando margens, larguras e alturas dos elementos.

Link para o Vercel: 
