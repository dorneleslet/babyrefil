# 📄 Documentação de Testes - BabyRefil

## 🌐 Ambiente e Dados de Teste

### URL do Sistema
https://babyrefil.vercel.app/

- **Ambiente de Testes:** ``

### 👶 Planos Disponíveis

| Plano | Valor (por entrega) | Detalhes Principais |
| --- | --- | --- |
| Plano Essencial | R$ 119,90 | 2 pacotes de fralda premium, 4 pacotes de lenço umedecido, 1 pomada |
| Plano Conforto (Popular) | R$ 219,90 | 4 pacotes de fralda premium, 6 lenços hipoalergênico, 2 pomadas premium, mimos |
| Plano Completo | R$ 319,90 | 6 pacotes de fralda ultra macia, 8 lenços hipoalergênico, 3 pomadas premium, kit cuidados, brinde, frete grátis |

### 📍 Massa de Dados: Endereço de Entrega

| Campo | Valor |
| --- | --- |
| CEP | 04534-011 |
| Logradouro | Rua Joaquim Floriano |
| Número | 1000 |
| Complemento | 17o andar |
| Bairro | Itaim Bibi |
| Cidade | São Paulo |
| Estado | SP |

### 💳 Massa de Dados: Cartões de Crédito

| Cenário | Bandeira | Número | CVV | Validade |
| --- | --- | --- | --- | --- |
| Válido (Sucesso) | Visa | 4242424242424242 | 182 | (Qualquer data futura) |
| Inválido (Saldo Insuf.) | Mastercard | 5555555555554444 | 182 | (Qualquer data futura) |

---

## 🧪 Casos de Teste: Fluxo de Adesão

### CT001: Adesão de Assinatura com Sucesso (Fluxo Completo)

### Objetivo

Validar o fluxo de adesão bem-sucedido, desde a seleção do plano até a confirmação do pagamento.

### Pré-condições

1. Usuário possui os dados do cartão Válido (Visa).
2. Usuário possui dados pessoais e de endereço válidos.

| Passo | Ação | Resultado Esperado |
| --- | --- | --- |
| 1 | O usuário deve clicar no botão "Assinar Agora". | O usuário é direcionado para a etapa de seleção de plano. Deve exibir os planos Plano Essencial, Plano Conforto e Plano Completo. |
| 2 | O usuário deve selecionar um plano disponível (ex: "Essencial") e clicar no botão "Avançar". | O usuário é direcionado para a etapa de seleção de frequência. |
| 3 | O usuário deve selecionar uma frequência (ex: "Mensal") e clicar no botão "Avançar". | O usuário é direcionado para a etapa de dados pessoais. |
| 4 | O usuário deve preencher todos os campos obrigatórios de dados pessoais e endereço com informações válidas da e clicar no botão "Avançar". | O usuário é direcionado para a etapa de pagamento. |
| 5 | O usuário deve preencher todos os campos de pagamento com os dados do cartão Válido (Visa) da massa de dados e clicar no botão "Finalizar Assinatura". | O pagamento é processado com sucesso. |
4. O usuário é redirecionado para a página de confirmação de assinatura.
5. A página de confirmação exibe o plano escolhido, a frequência, e a data estimada de entrega.

---

### CT002: Adesão com Falha de Pagamento (Saldo Insuficiente)

### Objetivo

Validar o tratamento de erro do sistema quando um pagamento é recusado por saldo insuficiente.

### Pré-condições

1. Usuário possui os dados do cartão Inválido (Saldo Insuf.).
2. Usuário possui dados pessoais e de endereço válidos.

| Passo | Ação | Resultado Esperado |
| --- | --- | --- |
| 1 | O usuário clica no botão "Assinar Agora". | O usuário é direcionado para a etapa de seleção de plano. Deve exibir os planos Essencial, Conforto e Completo. |
| 2 | O usuário seleciona um plano disponível (ex: "Essencial") e clica no botão "Avançar". | O usuário é direcionado para a etapa de seleção de frequência de entrega. |
| 3 | O usuário seleciona uma frequência de entrega (ex: "Mensal") e clica no botão "Avançar". | O usuário é direcionado para a etapa de dados pessoais. |
| 4 | O usuário preenche todos os campos obrigatórios de dados pessoais e endereço com informações válidas e clica no botão "Avançar". | O usuário é direcionado para a etapa de pagamento. |
| 5 | O usuário preenche todos os campos de pagamento com os dados do cartão Inválido (Saldo Insuf.) da massa de dados e clica no botão "Finalizar Assinatura". | Aparece uma mensagem de erro **Pagamento Recusado** |
3. O usuário permanece na tela de pagamento e não é possível avançar com o plano de assinatura sem um cartão válido.” 

---

### CT003: Adesão com Falta de Dados Pessoais Válidos

### Objetivo

Validar o tratamento de erro do sistema quando o usuário não preenche os dados pessoais válidos.

### Pré-condições

1. Usuário possui os dados pessoais válidos. 

| Passo | Ação | Resultado Esperado |
| --- | --- | --- |
| 1 | O usuário clica no botão "Assinar Agora". | O usuário é direcionado para a etapa de seleção de plano. Deve exibir os planos Essencial, Conforto e Completo. |
| 2 | O usuário deve selecionar um plano disponível (ex: "Essencial") e clicar no botão "Selecionar Plano". | O usuário é direcionado para a etapa de seleção de frequência de entrega. |
| 3 | O usuário deve selecionar a frequência da entrega (ex: "Mensal") e clicar no botão "Avançar". | O usuário é direcionado para a etapa de dados pessoais. |
| 4 | O usuário não preenche os dados válidos. | É exibido as mensagens de erro abaixo de todos os campos. |
2. O usuário permanece na tela de dados e não pode avançar para a próxima etapa.

---

### CT004: Adesão com Dados Incorretos

### Objetivo

Validar o tratamento de erro do sistema quando o usuário não preenche os dados pessoais corretamente.

### Pré-condições

1. Usuário possui dados pessoais e de endereço incorretos.

| Passo | Ação | Resultado Esperado |
| --- | --- | --- |
| 1 | O usuário deve clicar no botão "Assinar Agora". | O usuário é direcionado para a etapa de seleção de plano. Deve exibir os planos Essencial, Conforto e Completo. |
| 2 | O usuário deve selecionar um plano disponível (ex: "Essencial") e clicar no botão "Selecionar Plano". | O usuário é direcionado para a etapa de seleção de frequência da entrega. |
| 3 | O usuário deve selecionar uma frequência de entrega (ex: "Mensal") e clicar no botão "Avançar". | O usuário é direcionado para a etapa de dados pessoais. |
| 4 | O usuário preenche o campo "Nome Completo" com o valor "Maria". | - |
| 5 | O usuário preenche o campo "E-mail" com o valor "maria". | Aparece uma mensagem de erro **Inclua um "@" no endereço de email.** |
| 6 | O usuário preenche o campo "Telefone" com o valor "1234". | Aparece uma mensagem de erro **Telefone inválido.** |
| 7 | O usuário preenche o campo "Nome do Bebê" com o valor "João". | - |
| 8 | O usuário seleciona no campo "Idade do Bebê" qualquer opção. | - |
| 9 | O usuário preenche o campo "CEP" com o valor "732". | Aparece uma mensagem de erro **CEP inválido.** |
2. O usuário permanece na tela enquanto não preencher os campos corretamente, só após preencher com os dados corretos é direcionado para a página de pagamentos.

---

### CT005: Adesão com Falta de Dados de Pagamento

### Objetivo

Validar o tratamento de erro do sistema quando o usuário não preenche os dados de pagamento.

### Pré-condições

1. Usuário não possui dados para pagamento.

| Passo | Ação | Resultado Esperado |
| --- | --- | --- |
| 1 | O usuário deve clicar no botão "Assinar Agora". | O usuário é direcionado para a etapa de seleção de plano. Deve exibir os planos Essencial, Conforto e Completo. |
| 2 | O usuário deve selecionar um plano disponível (ex: "Essencial") e clicar no botão "Selecionar Plano". | O usuário é direcionado para a etapa de seleção de frequência da entrega. |
| 3 | O usuário deve selecionar uma frequência de entrega (ex: "Mensal") e clicar no botão "Avançar". | O usuário é direcionado para a etapa de dados pessoais. |
| 4 | O usuário deve preencher todos os campos obrigatórios de dados pessoais e endereço com informações válidas e avançar. | O usuário é direcionado para a etapa de pagamento. |
| 5 | O usuário não preenche o campo "Número do cartão". | Aparece uma mensagem de erro **Número do cartão inválido.** |
| 6 | O usuário não preenche o campo "Nome no Cartão". | Aparece uma mensagem de erro **Nome no cartão é obrigatório.** |
| 7 | O usuário não preenche o campo "Validade". | Aparece uma mensagem de erro **Validade inválida (MM/AA).** |
| 8 | O usuário não preenche o campo "CVV". | Aparece uma mensagem de erro **CVV inválido.** |
| 9 | O usuário não preenche o campo "CPF do Titular". | Aparece uma mensagem de erro **CPF inválido.** |
2. O usuário permanece na tela enquanto não preencher os campos com os dados corretos.

---