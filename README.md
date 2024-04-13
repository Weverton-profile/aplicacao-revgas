# aplicacao revgas
 revgas application with the API and the web application that consumes the data

## Sumário

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Visão Geral

Neste projeto, desenvolvi uma API utilizando o framework Spring e a consumi em um projeto React. Este repositório contém tanto o código-fonte da API quanto do projeto React que a consome.

## Tecnologias Utilizadas

- Spring Framework
- React

## Como Usar
1. Faça as devidas alterações no arquivo:
   
   ```
    application.properties
   ```
   ```
   spring.application.name=revgas
   spring.datasource.url=jdbc:mysql://localhost/revgas
   spring.datasource.username= "Adicione o seu username"
   spring.datasource.password= "Adicione a sua senha"
   spring.jpa.hibernate.ddl-auto=create
   spring.jpa.hibernate.naming.physical-strategy=org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl
   spring.jpa.show-sql=true
   spring.jpa.properties.hibernate.format_sql=true
  	```
3. Clone este repositório:

    ```
    git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/Weverton-profile/aplicacao-revgas.git)
    ```

4. Navegue até o diretório da API e execute o seguinte arquivo:

    [RevgasApplication.java](https://github.com/Weverton-profile/aplicacao-revgas/blob/main/revgas/src/main/java/com/devops/revgas/RevgasApplication.java)

5. Em seguida, navegue até o diretório do projeto React e execute o seguinte comando para iniciar a aplicação:

    ```
    cd aplicacao-revgas/react-app-revgas/revgas
    npm install
    npm start
    ```

6. Acesse a aplicação React em [http://localhost:3000](http://localhost:3000).
