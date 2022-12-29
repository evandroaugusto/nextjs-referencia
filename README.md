**Comandos:**

- Instalação: **yarn install**
- Executar em modo de desenvolvimento (com live reload): **yarn dev**
- Compilar em modo de produção: **yarn build**
- Executar versão de produção compilado (sem live reload): **yarn start**
- Aplicar verificação do lint: **yarn lint**

Obs: A verificação do lint já é aplicada durante o desenvolvimento se for utilizado o plugin "EsLint" para o VsCode.

# Estrutura de organização

O projeto está organizado seguindo a estrutura "By Feature". As "Features" estão organizadas por módulos/contextos independentes que delimitam as funcionalidades de uma área de negócio com o objetivo de implementar os conceitos de modularidade.

Segue abaixo uma breve descrição da estrutura do projeto:

**CORE:**  
Arquivos de configurações, serviços e componentes que acompanham o ciclo de vida da aplicação sendo compartilhados por todo o sistema, ex: Stores globais, configuração, etc.

**FEATURES:**  
Estrutura do projeto (módulos) que representam diferentes funcionalidades de negócio. Cada módulo "Feature" será responsável por implementar suas funcionalidades (componentes, páginas, serviços, APIs, rotas, etc.) de forma independente e desacoplada do restante da aplicação. 

**SHARED:**  
Componentes/hooks/serviços consumidos pelas "features" do sistema. Essas funcionalidades são de uso comum e não possuem conhecimento de domínio (context/módulo), ex: componentes de apresentação, hooks, etc.

# Gerenciamento de estados

O gerenciamento de estado (funcionalidade do carrinho de produtos) é realizado através do uso de um serviço "store" criado a partir da api nativa/React ContextAPI.

**STORE:**  
A Store é um serviço que compartilha estados entre os componentes da aplicação. As ações de consultas e mudanças são realizadas através de métodos fornecidos por este serviço para facilitar o gerenciamento de estado, deixando claro as ações possíveis e tornando previsível o fluxo de mudança de dados.

**STATE:**  
Um objeto ou propriedades que representam o estado da aplicação. O estado estará sempre presente em uma "Store" que será responsável por gerenciar o acesso e especificar as mudanças possíveis garantindo a imutabilidade do estado.

**_Observação:_**  
Sempre manter o estado mais próximo possível de onde for consumido. Se for exclusivo de um componente, utilizar a função "useState" ou "hooks" (se necessário) para isolar os estados consumidos pelo componente. Se for compartilhado por vários componentes ou globalmente, criar uma "Store" (ContextAPI) para realizar o compartilhamento de conteúdo entre eles.

**_Observação 2:_**
Não está sendo utilizado nenhuma biblioteca de gerenciamento de estados, somente o Context API, que é o suficiente para atender a maioria das necessidades.

# Requisições HTTP

**Axios/API:**  
A instância HTTP utilizadas no projeto são criadas na pasta "core/http". Cada módulo é responsável por implementar os seus serviços de APIs.
