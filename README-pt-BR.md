<h1 align="center"> PRINCIPIOS SOLID - BCC3004 </h1>

<h2>Introdução</h2>
<p>Os princípios SOLID são um conjunto de princípios de design de software que incentivam os desenvolvedores a criar sistemas mais compreensíveis, flexíveis e mantíveis. Esses princípios são amplamente reconhecidos na comunidade de desenvolvimento de software e são um pilar do bom design orientado a objetos. Este repositório tem como objetivo fornecer uma visão abrangente dos princípios SOLID, incluindo seu contexto, benefícios, desvantagens e explicações separadas para cada princípio.</p>

<h2>Contexto Geral</h2>
<p>Os princípios SOLID foram introduzidos por Robert C. Martin, também conhecido como Tio Bob, em seu livro "Clean Code: A Handbook of Agile Software Craftsmanship". Os princípios são:

<ul>
  <li><b>Princípio da Responsabilidade Única (SRP):</b> Uma classe deve ter apenas um motivo para mudar.</li>
  <li><b>Princípio Aberto/Fechado (OCP):</b> Entidades de software devem estar abertas para extensão, mas fechadas para modificação.</li>
  <li><b>Princípio da Substituição de Liskov (LSP):</b> Subtipos devem ser substituíveis por seus tipos base.</li>
  <li><b>Princípio da Segregação de Interfaces (ISP):</b> Os clientes não devem ser forçados a depender de interfaces que não usam.</li>
  <li><b>Princípio da Inversão de Dependência (DIP):</b> Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.</li>
</ul>

<h2>Links para Explicações Separadas</h2>
<ul>
  <li><a href="./S—Single Responsiblity Principle/README.md">Princípio da Responsabilidade Única (SRP)</a></li>
    <li><a href="./O—Open-Closed Principle/README.md">Princípio Aberto/Fechado (OCP)</a></li>
    <li><a href="./L—Liskov Substitution Principle/README.md">Princípio da Substituição de Liskov (LSP)</a></li>
    <li><a href="./I—Interface Segregation Principle/README.md">Princípio da Segregação de Interfaces (ISP)</a></li>
    <li><a href="./D—Dependency Inversion Principle/README.md">Princípio da Inversão de Dependência (DIP)</a></li>
</ul>

<h2>Benefícios e Desvantagens</h2>
<h3>Prós e Contras do Uso dos Princípios SOLID</h3>
<h4>Prós</h4>
<ul>
  <li>Melhoria na Qualidade do Código: os princípios SOLID levam a um código mais legível, mantível e flexível.</li>
  <li>Refatoração Mais Fácil: As mudanças são mais fáceis de fazer porque o código é mais modular.</li>
  <li>Risco Reduzido de Bugs: O design é mais previsível, reduzindo o risco de introduzir bugs.</li>
  <li>Melhor Comunicação: os princípios SOLID fornecem uma linguagem comum para os desenvolvedores discutirem e entenderem o design.</li>
</ul>

<h4>Contras</h4>
<ul>
  <li>Custo Adicional: Implementar os princípios SOLID às vezes pode levar a uma superengenharia, especialmente em projetos simples.</li>
  <li>Curva de Aprendizado: Entender e aplicar os princípios SOLID requer um bom domínio dos conceitos de programação orientada a objetos.</li>
  <li>Potencial para Superabstração: Existe o risco de criar designs excessivamente abstratos que são difíceis de entender e manter.</li>
</ul>

<h2>Conclusão</h2>
<p>Os princípios SOLID são uma ferramenta poderosa para os desenvolvedores de software, oferecendo um framework para criar sistemas fáceis de entender, manter e estender. Embora existam possíveis desvantagens, como o risco de superengenharia ou superabstração, os benefícios de usar os princípios SOLID no design de software são significativos. Ao aderir a esses princípios, os desenvolvedores podem criar sistemas robustos, flexíveis e capazes de resistir ao teste do tempo.</p>

<p>Este repositório serve como um recurso para entender e aplicar os princípios SOLID em seus projetos. Se você é um desenvolvedor experiente ou está apenas começando sua jornada no desenvolvimento de software, esses princípios podem orientá-lo na escrita de um código melhor e mais mantível.</p>

<h2>Execute os códigos</h2>
<p>Cada princípio tem sua própria pasta com exemplos de código em TypeScript. Você pode executar o código seguindo estas etapas:</p>

```bash
# Clone o repositório
    $ git clone

# Navegue até alguma pasta de princípio (por exemplo, Princípio da Responsabilidade Única)
    $ cd S—Single\ Responsibility\ Principle

# Instale as dependências
    $ yarn

# Execute o código
    $ yarn dev

# Repita as mesmas etapas para outros princípios
    $ cd ../O—Open-Closed\ Principle
    $ cd ../L—Liskov\ Substitution\ Principle
    $ cd ../I—Interface\ Segregation\ Principle
    $ cd ../D—Dependency\ Inversion\ Principle
```
