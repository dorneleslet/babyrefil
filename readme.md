# Automação E2E - BabyRefil (Playwright)

Este é um site de clube de assinatura de fraldas e artigos para bebê, apresentando planos e informações de como funciona.
Projeto de automação end-to-end utilizando Playwright para aperfeiçoar meus conhecimentos em automação de testes, além de reforçar habilidades importantes para QA, como validação de dados, atenção aos detalhes.

## Cobertura de Testes
- Fluxo completo de assinatura (E2E)
- Validação de campos obrigatórios
- Validação de formatos (email, telefone, CEP, CPF)
- Tratamento de erro em pagamento recusado
- Cenários positivos e negativos

## Tecnologias Utilizadas
- Testes Automatizados: Playwright + JavaScript  

## Aprendizados
Durante o desenvolvimento deste projeto, pude reforçar conhecimentos em:
- Criação de casos de teste 
- Integração frontend/backend  
- Experiência do usuário
- Criação e validação de regras de negócio  
- Manipulação e organização de dados  
- Testes práticos de interface e usabilidade  
- Identificação de cenários de erro e entradas inválidas  
- Atenção a detalhes em formulários e fluxos do sistema  

## Como executar o projeto

1. Clonar o repositório:
git clone git@github.com:dorneleslet/babyrefil.git

2. Instalar dependências:
npm init playwright@latest

3. Executar os testes:
npx playwright test

4. Abrir relatório:
npx playwright show-report