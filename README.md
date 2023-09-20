## Bank Front

# Tecnologias

    - tailwindcss doc: https://tailwindcss.com/docs/guides/nextjs
    - Next.js doc: https://nextjs.org/docs/getting-started/installation
    - Tabler Icons doc: https://tabler.io/docs/icons/react
    - Mantine doc: https://mantine.dev/
    - docker

# Instalações

    - iniciando o projeto: npx create-next-app@latest

    - tailwindcss
        - npm install -D tailwindcss postcss autoprefixer
        - npx tailwindcss init -p

    - tabler icons
        - npm install @tabler/icons-react

    - UUID
        - npm i uuid
        - npm i -D @types/uuid

    - Firebase
        - npm install firebase

    - Instalar a biblioteca Mantine, escolher os pacotes: https://mantine.dev/pages/getting-started/
        - npm install @mantine/core @mantine/hooks @mantine/dates dayjs @emotion/react

    - Instalar font google nunito
        - https://fonts.google.com/specimen/Nunito
        - src/styles/globals.css
            - adicione o import e font escolhida

# PlanetScale

    - login:
        - pscale auth login

    - Acessando a base de dados de main
      - pscale connect db_solles main --port 3309

    - Acessando a branch da base de dados de shadow
      - pscale connect db_solles shadow --port 3310

    - Promovendo a branch main para produção
        - pscale branch promote db_solles main

# Prisma ORM

    - Instalando o prisma
    - Instalando o prisma client

# Prisma Exec Local - Este comando envia o schema do banco para base local e não para a produção.

    - Execute o comando: npx prisma db push.
    - Acessando a dashboard do planetScale, branch schema, pode ver as tabelas criadas.

# Criando a permissão de acesso ao entrypoint

    - sudo chmod +x .docker/entrypoint.sh

# Criando o primeiro component

    - template/Page.tsx
        - Ele é responsavel por separar o acesso da aplicação interna e externa

# Configuração para que aplicação acesse links externos

    - No arquivo: next.config.js

        - Podemos adicionar permissões de dominio para acesso de dentro da aplicação.
        - Será utilzado a url: https://images.unsplash.com/
        - Então precisamos aplicar a permissão

            images: {
                domains: [
                'source.unsplash.com',
                'images.unsplash.com',
                'lh3.googleusercontent.com',
                ]
            }

# Construção da aplicação será por partes

    - 1 Parte criando os componentes

    - Landing page
        - cabecalho
        - comum
            - Area (Envolve o cabeçalho com a logo e cria um padding entre as bordas)
            - Logo
        - depoimentos
        - destaques
        - rodape
        - vantagens

    - 2 Parte criando os componentes - Area Interna
        - financas
            - Lista
               - Criando a function renderizacao de linhas utilizando mock
            - Formulario

        - template
            - Cabecalho
            - BoasVindas
            - MenuUsuario
            - Pagina
            - Conteudo (Aplicar o conteudo em CadastroUsuario e Financas)
            - Não encontrado

        - data
            - constants
                - mock de usuario
                - mock das trasações

        - logic
            - core
                - usuarios
                    - interface usuarios
                - comum
                    - Id.tsx
                - financas
                    - TipoTransacao
                    - InterfaceTransacao
                        - ITransacao
                        - transacaoVazia
                - util
                    - Dinheiro
                    - Data

        - pages/_app.tsx
            - Applicaremos o conceito de provedor do Mantine, onde podemos definir o tema e a cor
            - Aplicando a cor definida para todos os components definidos no projeto

            <MantineProvider
                theme={{
                    colorScheme: 'dark',
                }}
            >
            </MantineProvider>

        - Criando a pagina de usuário

            - pages/usuarios.tsx

        - Criar um metodo para criar uma nova transacao

            - Criar o botão na tela financa/index.tsx
            - Criar novas transações
            - Criar hooks personalizados para o formulario.

        - Criar os metodos para adicionar dados de usuário

            - Component
                - usuario
                    - formulario


            - Template
                - MiniFormulario
                - TituloPagina

            - data
                - hooks
                    - useFormulario


    - 3 Parte Integração do front com backend e o firebase

        - Criar a conta no Firebase
            - https://console.firebase.google.com/?hl=pt-br

            - Criar aplicação

            - Criando a configuração do APP ts

                - firebase
                    - config
                        - app.ts

                - auth
                    - Autenticacao

        - Criando o Autenticacao Context

            - src/data

                - contexts
                    - AutenticacaoContext.tsx

            - Para que a autenticacao seja aplicada é precisa envolver todos os componentes para dentro de AutenticacaoProvider

                - Está sendo exportada de:
                    - contexts
                        - AutenticacaoContext.tsx

                - Exportando para pages/_app.tsx

                    <AutenticacaoProvider>
                        <Component {...pageProps} />;
                    </AutenticacaoProvider>


            - Sendo assim podemos invocar as nossas paginas, verificando se usuario está setado.

                - index.tsx
                - Podemos também tratar as demais paginas

            - Em components/landing/cabecalho

                - Menu.tsx.
                    - A autenticacao com o google será atraves do useContext que ira servir o usuário autenticado.

                - Todas as paginas serão autenticadas por usuário

                    - const {usuario} = useContext(AutenticacaoContext);

            - Criando o componente Carregando.tsx

                - Para que ele seja executado enquanto está sendo processado

                - Adicionando o componente de Carregando

        - Criar um componente para forçar autenticação

            - components/ autenticacao/ ForcarAutenticacao.tsx

            - Este componente ele está utilizando as rotas do proprio Next.js.

        - Utilizando o componente forçar autenticacao em:

            - template/ Pagina

                - Será criado uma função para verificar se a pagina a ser renderizada é de uso interno ou externo.

                - Com o componente de ForcarAutenticacao podemos garantir que o usuario acesse a pagine com a opção marcada

        - Console firebase criado, é necessario criar permissão de autenticaçao

    - Criando as coleções da aplicação em:

        - firebase/db/colecao.

    - Criando os serviços da aplicação de financa

        - logic/core/financas

            - ServicoTransacao.ts

        - Instaciar o serviço de transação em:

            - components/ financas/ index.tsx
                - Onde está declarado o metodo salvar em memoria


    - Para que os dados seja integrados na base dados com o firebase é necessario adicionar as permissoes:

        - Para criar um banco de dados no Firebase, pode ser definido o banco de dados em producao

        match /financas/{email}/transacoes/{id} {
            allow read: if (request.auth != null && request.auth.token.email == email);
            allow write: if (request.auth != null && request.auth.token.email == email);
        }

        match /usuarios/{email} {
            allow read: if (request.auth != null && request.auth.token.email == email);
            allow write: if (request.auth != null && request.auth.token.email == email);
        }


    - Pode ser criado um arquivo index.ts

        - logic/core/
            - O index fica responsavel por instaciar os metodos de serviços
            - Evitando um acumulo de informação ao componente

    - Para desacoplar o componente de financas/index


        - será criado o hooks, personalisados para controle de estado
        - src/data/hooks

    - Dentro dos hooks iremos controlar o estado da aplicação.

        - src/data/hooks.

        - Criando o metodo de buscarTransacoes

        - Criando o metodo de consultar em:
            - logic/core/financas/ServicosTransacoes

        - Para carregar as transaçoes utilizamos o useEffect para carregar na inicialização do componente

            - Assim podemos substituir os mocks pelos dados que estão vindo da nuvem

        - Criando os metodos de servicos de usuarios:
            - logic/core/usuarios/ServicosUsuario

            - loginGoogle
            - logout
            - salvar um novo emai de um usuário logado
            - validar existencia do usuário
            - monitorarAutenticacao

        - Em AutenticacaoContext:

            - Passar o metodo de servico de usuario para monitorar

                - exportando o metodo de atualizarUsuario

    - Carregamento dos dados do usuário para o formulario de usario.

        - component/usuario/Formulario

            - Dados do usuário será carregado pelo metodo de userContexto
            - O Tipo useFormulario não permite entrada de usuario com tipo = null


    - Criando o componente dos meses em Portugues

        - src/logic/utils/Data

            - Criando os metodos de validação de data e mês

        - Criado o componente

            - component/template/CampoMesAno.tsx

        - No hooks useTransacao será criado um novo estado para o armazenamento de data. Para a manipulação do componente

            - data/hooks/useTransacao
            - component/template/CampoMesAno.tsx

            - Criar um metodo em serviço transação, para que a consulta retorne os dados por Mês utilizando filtro.

                - consultaPorMes()

                - Criado um metodo static em:
                    - logic/utils/Data
                        - Para receber os parametros de data por mês e o ano, com inici e fim

    - Tipos de rederização por Grid ou Lista

        - component/financas/index
            - funcao renderizarControle()

        - Criado um tipoExibição em hooks/useTransactio
            - Para alterar o status de exibicao

        - Criado um metodo para rederizar a lista ou grid das financas
            - component/financas/index

# Link da aula

    - https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=72c63d0a-3a9f-4a0f-a35c-4fc974403699&muted=false&saveProgress=false&autoplay=false
