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

**useState**

**useEffect**
Recebe dois parâmentros: *qual função* vai ser executada e *quando* vai ser executada. Chamamos o segundo parâmetro de *dependências*.

Por exemplo, o segundo parâmentro pode receber uma variável e, sempre que ela mudar, o useEffect roda a função presente no primeiro parâmetro. Portanto, se o segundo parâmetro estiver vazio, a função só vai ser executada uma vez.

PRESTE ATENÇÃO para não deixar o segundo parâmetro vazio ou colocar os dois parâmetros em torno de uma mesma variável, isso faz com que o useEffect entre em loop.

**Chave única Key**
