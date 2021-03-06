## Criando uma calculadora IMC com Next.JS

Desenvolvimento WEB com o framework Next.JS - Criação de uma calculadora.

Para usar o framework Next.js é necessario instalar algumas ferramentas.
São elas: node.js o Yarn e o chocolatey.

Para instalar o Node é preciso acessar o site: https://nodejs.org/en/download/

Clique do usuário com o botão esquerdo do mouse em "LTS Recomendado para a maioria dos usuários 

![nodelts](https://user-images.githubusercontent.com/88038755/161458176-362c7d2e-0731-4434-b87b-390afce65b95.jpeg)

Selecionado a opção LTS, agora clique no sistema operacional desejado.

![node no win](https://user-images.githubusercontent.com/88038755/161458581-0d4b2c39-cbc8-4b34-9ade-9c016bdbd9f3.jpeg)

Apos o clique o Download será realizado

![dnNode](https://user-images.githubusercontent.com/88038755/161458847-db07b648-21c9-4d08-a5c8-11b883499bde.jpeg)

Clique encima para executar o instalador do Node.js

![nextNode](https://user-images.githubusercontent.com/88038755/161459379-cceef4c7-bc64-4616-b649-dc21efefdaf8.jpeg)

O usuário deverá clicar Next em todas as caixas de opção até concluir a instalação do Node.js

Para verificar se a instalação foi bem sucedida execute os dois comandos a seguir em uma janela do Terminal ou Prompt de Comando.
![digiCMD](https://user-images.githubusercontent.com/88038755/161460943-9e077dfb-733f-4bc1-8e09-6925970e693f.jpeg)
Pesquise por CMD na caixa de pesquisa:
![PCMD](https://user-images.githubusercontent.com/88038755/161461050-f3fa6516-8fa1-4b3c-8c04-21905afa7fe9.jpeg)
Execute como Administrador:
![CMDAberto](https://user-images.githubusercontent.com/88038755/161461114-06d3778d-5ad4-4d14-b95a-21a439608654.jpeg)
 Digite os comandos acima dentro do CMD.
 Caso esteja tudo certo, serão apresentadas as versões conforme abaixo: 

![node](https://user-images.githubusercontent.com/88038755/161459792-327bbc48-ca2e-4859-8412-0dbf80c99cb2.jpeg)

O Node.js é uma plataforma de execução JavaScript desenvolvida com o intuito de criar sistemas de rede escaláveis. Já o Yarn é um gerenciador de pacotes e dependências que funciona sobre o Node.js.

Para instalar o YARN abra o terminal e digite o seguinte comando:

![yarn](https://user-images.githubusercontent.com/88038755/161460120-12a0a340-5762-44d1-a2e7-cc5c3ea97cbe.jpeg)

Dessa forma as instalações do Node e Yarn estão finalizadas e testadas.

Próximo passo: Sera usados dois programas, o Visual Studio Code e o GitHub Desktop

O que é Visual Studio Code?

O Visual Studio Code ou Vscode é um editor de código-fonte que é gratuito e está disponível no Windows, Linux e macOS.

É desenvolvido e mantido pela Microsoft, inclui suporte para depuração, controle versão Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código.

Instalação do VS code no Windowns:

O processo de instalação do VSCode no Windows é bem simples, basta baixar o instalador do site.
Link para download: https://code.visualstudio.com/

![VsCode](https://user-images.githubusercontent.com/88038755/161541423-19c603f9-3e06-4f88-8d19-2e26de463ad2.jpeg)

Em seguida, execute o instalador baixado e siga as instruções na tela, não esqueça de marcar a opção “Add to Path” para adicionar o Visual Studio Code nas variáveis de ambiente.

Agora vamos baixar o GitHub Desktop:
Link: https://desktop.github.com/

O processo de instalação do GitHub no Windows é bem simples, basta baixar o instalador do site.

![git](https://user-images.githubusercontent.com/88038755/161553003-9f223ee4-b318-43a9-ab2f-1b68b60009e6.jpeg)

Em seguida, execute o instalador baixado e siga as instruções na tela.

Com o Visual Studio Code e o GitHub instalados, vamos clonar o repositório do GitHub no GitHub Desktop.

Clique em Code:

![pegando o link](https://user-images.githubusercontent.com/88038755/161653730-b2f4a48a-b79b-431f-8a7d-03f275e9bd4d.jpeg)

Posteriormente clique em copiar link.

Pesquise pelo GitHub Desktop e execute.
![abreGit](https://user-images.githubusercontent.com/88038755/161653980-26fb4259-74eb-4fe5-9422-ef4e9d9a2596.jpeg)

Agora clique em ADD para clonar o repositório.

![coleOlink](https://user-images.githubusercontent.com/88038755/161654110-99486c36-7cb5-48bd-94b7-8c619be19316.jpeg)

Cole o link dentro da caixa e clique em clonar.

Agora com o projeto selecionado no GitHub Desktop, clique em abrir projeto com o Visual Studio Code:

![AbraNoVSCODE](https://user-images.githubusercontent.com/88038755/161654271-8b12d3ad-ac17-4a98-8d3c-bf507d8c29d1.jpeg)

Após isso ira abrir o VS code.

![AbraOterminal](https://user-images.githubusercontent.com/88038755/161654352-724f3e9b-ac9b-4793-b2fa-4b7fb89a5bf9.jpeg)

Abra o terminal do VS code e digite o seguinte comando:
yarn create next-app ./

para criar o projeto:

![yarnCreate](https://user-images.githubusercontent.com/88038755/161655126-91e80ecc-f289-4bfe-9253-a15bd9db0d3c.jpeg)

## Para rodar o projeto, é usado o yarn dev

![yarnDev](https://user-images.githubusercontent.com/88038755/161655462-6d85a4e1-7847-458a-947b-eafa5ea230bf.jpeg)

## Com esse comando é possivel ter acesso ao link para ver o resultado do desenvolvimento do projeto pelo navegador.
## Copiando e colando a url no navegador.

## Desenvolvendo nosso código
Primeiramente, vamos excluir algumas coisas que não iremos utilizar no nosso projeto.
Na pasta styles, apagamos o Home.module.css; A pasta public, deixamos ela vazia; E na pages, apagamos a pasta api.

Em pages, vamos abrir o index.js e limpar tudo. Aqui vai ser criada nossa página com as funções da calculadora.
1. Importamos o useState (permite adicionar o state do React a um componente de função).
   Importamos o Head (é basicamente um componente interno que o Next.JS fornece para anexar elementos, como title e meta tags, ao elemento <head> no documento).
 
2.  Criamos as váriaveins para peso, altura e mensagem.
2.1 Criaremos a função para calcular o IMC, a primeira vai ser para receber o valor da altura e fazer a formatação do valor.
    E a segunda função será o calculo do imc, o peso dividido pela altura ao quadrado.
 
3. Usaremos if e else if para indicar o grau de peso da pessoa e retornar na mensagem.

4. Neste passo vamos criar nosso site. Mas antes vamos adicionar duas imagens na pasta public para usar no site.
4.1 Criamos a Head com o titulo fazendo tambem o link com o favicon.png da pasta public.
4.2 Abre a tag img e usamos a imagem da pasta public para embelezar o site.

![Passo 1 ao 4.2](https://user-images.githubusercontent.com/89039535/162013309-15cdae74-81d7-402b-9076-b062d1536db7.png)
![Passo 4](https://user-images.githubusercontent.com/89039535/162013699-a3bc57f3-d3c3-4966-b07b-1ef979fe0680.png)

4.3 Vamos abrir uma div "areaInput" para o usuário informar o peso e altura, e retornar para o calculo do IMC.
 
4.4 Criamos um botão para fazer a chamada da função de calcular o IMC.
 
4.5 Usamos uma section para exibir a mensagem do passo 3, onde o if e else if irá passar para o usuário o grau de peso e seu IMC.

4.6 Criaremos mais um botão, redirecionando para um PDF com mais informações sobre o IMC.

![Passo 4 3](https://user-images.githubusercontent.com/89039535/162015068-9b8e79c1-e070-4e3b-89a3-8435d73b9721.png)

5. Agora, vamos estilizar nosso site. Em styles vamos editar o index.css.
![index-css](https://user-images.githubusercontent.com/89039535/161989259-9f36b6d8-5536-4b5b-aa42-47f620a06b4a.png)

 6. E nossa calculadora de IMC está pronta.


**Integrantes do grupo:** Luis Gustavo, Rafael Henrique e Yan Silveira.
