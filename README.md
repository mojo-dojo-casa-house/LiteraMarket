# LiteraMarket


## Tabela de Conteúdo

- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Download](#download)
- [Instalação](#instalação)
- [Configurações](#configurações)
- [Execução](#execução)
- [Arquitetura](#arquitetura)
- [Autores](#autores)

## Tecnologias utilizadas

Essas são as frameworks e ferramentas que você precisará instalar para desenvolver esse projeto:
- Node.js
- React
- Expo
- Sequelize

## Download

Para que seja possível a execução dos arquivos deste repositório, o usuário deve clonar através da ferramenta git. Abrindo o terminal do seu sistema operacional ou o GitBash, insira o seguinte comando na pasta desejada:

```bash
git clone https://github.com/mojo-dojo-casa-house/LiteraMarket.git
Instalação
Para o correto funcionamento do aplicativo, terão que ser feitas as instalações das dependências, tanto da pasta back-end, quanto da pasta front-end. Para isso entre na pasta que foi clonada pelo comando e exclua a pasta .git:

Abra o seu terminal e execute o comando para instalar as dependências da pasta de back-end do projeto denominada back.
bash
cd mojo-dojo-casa-house
cd backend
npm install 


Agora, a partir do passo anterior, execute os comandos abaixo para instalar as dependências da pasta de front-end do projeto denominada front.

bash
cd ..

cd mojo-dojo-casa-house/frontend
yarn add

Configurações
Após a instalação, algumas preparações anteriores devem ser realizadas na pasta back. A partir dos comandos abaixo, será feita a configuração da pasta back-end:

bash
Copy code
cd ..

cd back

cp .env_example .env

npm run keys

npm run migrate

npm run seed
Execução
Ainda na pasta back, execute o seguinte comando para servir o aplicativo em um servidor customizado para posterior execução no front-end:

bash
Copy code
npm run dev
Com as configurações feitas, mude a seguir para a pasta front, para a execução do aplicativo utilizando o Expo utilizando os seguintes comandos:

bash
Copy code
cd ..

cd frontend

expo start
Para parar a execução do aplicativo, basta executar o comando CTRL + C no terminal.

Autores
Gerente - Iago Cesar
Tech Lead - Rian manhente
Tech Lead - Théo
Dev Front-end - Lucas Stefano
Dev Front-end - Nikolas Miguez
Dev Back-end - Lucas Al
Dev Back-end - Danilo
