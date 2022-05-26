Criando estrutura do projeto
---

Para inicializar
```
    yarn init -y
    yarn add react
    yarn add react-dom
```

Criar as pastas **src** e **public** (com o index.html dentro) no diretório do projeto

Configurando Babel
---

O babel converte os códigos de forma que todos os navegadores possam entende-lo apesar das atualizações.

Instalação
    `yarn add @babel/core @babel/cli @babel/preset-env -D`

Criar o arquivo **babel.config.js** no diretório do projeto

**@babel/core:** Biblioteca do babel, basicamente

**@babel/cli:** Posibilita a execusão do babel atravéz da linha de comando

**@babel/preset-env:** Extensão que identifica o navegador em que a api está sendo executada para converter o código de acordo

Criar (e restart) arquivo de conversão
```
    yarn babel src/index.jsx --out-file dist/bundle.js
    (ou index.jsx, dependendo da extensão e do nome do arquivo)
```

Preset para react
    `yarn add @babel/preset-react -D`


Configurando o Webpack
---

Instalação
```
    yarn add webpack webpack-cli webpack-dev-server -D
    yarn add babel-loader -D (integração entre babel e webpack)
```


entry -> indica o arquivo inicial da aplicação

output -> o arquivo que vai ser gerado com o webpack


HTML estático
    `yarn add html-webpack-plugin -D`

**Webpack dev server**

Instalação, configuração e execução
```
    yarn add webpack-dev-server -D
    devServer: {
        static: path.resolve(__dirname, 'public'),
    },
    yarn webpack serve
```

**Source maps**

Funcionalidade pra o código ser exibido na "versão programador" sem todos os adicionais pra falicitar o tratamento de erro.


**Ambiente dev e ambiente de produção**

Criar variável ambiente para executar o programa no modo de produção
    `yarn add cross-env -D (qualquer sistema operacional)`

no webpack.config
```
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
```

no package.json
```
  "scripts": {
    "dev": "webpack serve",
    "build": "cross-env NODE_ENV=production webpack"
  },
```

**Integração com css**

Instala
```
    yarn add style-loader css-loader -D
    yarn add sass-loader -D
    yarn add node-sass -D
```

https://app.rocketseat.com.br/discover/course/especializar-react/especializar-react/importando-arquivos-css-1
(arquivo global css)
