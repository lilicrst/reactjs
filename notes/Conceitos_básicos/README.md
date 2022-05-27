Conceitos básicos no React
---

**Componentes**

No react, quando os componentes se repetem ou um mesmo tipo de objeto é mostrado várias vezes na tela, nós criamos um componente e só replicamos ele.

Por convenção, cada componente fica em um arquivo (js ou jsx) diferente.

**Propriedades**

As propriedades pertencem aos componentes e preenchem eles. Um componente pode acessar informações de um outro componente *parent* através do comando *props*.

**Estados**

É como uma variável cuja mudança de valor gera uma nova renderização, refletindo na aplicação.

**Imultabilidade**

Esse princípio diz que não podemos alterar o valor de uma variável, devemos sempre dar um novo valor a ela.

Hoots
---

No react, tudo é baseado em funções

**useState**

**useEffect**

`useEffect(() => {}, []);`

`useEffect(() => {corpo do useEffect / ações que vão ser executadas}, [array de dependências]);`

Recebe dois parâmentros: *qual função* vai ser executada e *quando* vai ser executada. A função do corpo sempre é executada quando os componentes são renderizados, ela não precisa ser chamada.

Chamamos o segundo parâmetro de *dependências*. Sempre que o estado da dependência mudar, o useEffect roda a função presente no primeiro parâmetro. Se o segundo parâmetro estiver vazio, a função só vai ser executada uma vez.

PRESTE ATENÇÃO para não deixar o segundo parâmetro vazio ou colocar os dois parâmetros em torno de uma mesma variável, isso faz com que o useEffect entre em loop.

**Chave única Key**
