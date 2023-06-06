## Bank Front

# Tecnologias Utilizadas

    - next.js
    - bootstrap
    - docker

# Instalações

    - Instalando a biblioteca sass que faz á pré compílação do css para dar estilo na pagia: npm install bootstrap sass --save

# Criando a permissão de acesso ao entrypoint

    - sudo chmod +x .docker/entrypoint.sh

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
