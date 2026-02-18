# 📄 Documentação de Testes - BabyRefil

## 🌐 Ambiente e Dados de Teste

### URL do Sistema
https://babyrefil.vercel.app/

- **Ambiente de Testes:** ``

### Planos Disponíveis

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
| --- | --- | --- |
| Válido (Sucesso) | Visa | 4242424242424242 | 182 | (Qualquer data futura) |
| Inválido (Saldo Insuf.) | Mastercard | 5555555555554444 | 182 | (Qualquer data futura) |

---

## 🧪 Casos de Teste: Fluxo de Adesão

---

### CT001: Adesão de Assinatura com Sucesso (Fluxo Completo)

### Objetivo

Validar o fluxo de adesão bem-sucedido, desde a seleção do plano até a confirmação do pagamento.

### Pré-condições

1. Usuário possui os dados do cartão Válido (Visa).
2. Usuário possui dados pessoais e de endereço válidos.

| Passo | Ação | Resultado Esperado |
| --- | --- | --- |
| 1 | Clicar no botão "Assinar Agora". | O usuário é direcionado para a etapa de seleção de plano. Deve exibir os planos Plano Essencial, Plano Conforto e Plano Completo. |
| 2 | Selecionar um plano disponível (ex: "Essencial") e avançar. | O usuário é direcionado para a etapa de seleção de recorrência. |
| 3 | Selecionar uma recorrência (ex: "Mensal") e avançar. | O preço é atualizado conforme a seleção. O usuário é direcionado para a etapa de dados pessoais. |
| 4 | Preencher todos os campos obrigatórios de dados pessoais e endereço com informações válidas da e avançar. | O usuário é direcionado para a etapa de pagamento. |
| 5 | Preencher todos os campos de pagamento com os dados do cartão Válido (Visa) da massa de dados. | - |
| 6 | Submeter o formulário de pagamento (clicar em "Confirmar Pagamento"). | 
3. O pagamento é processado com sucesso.
4. O usuário é redirecionado para a página de confirmação de assinatura.
5. A página de confirmação exibe o resumo do plano e a data estimada de entrega.
6. Deve ser exibido o numero do pedido no formato BR1761410590280. |

---

### CT002: Adesão com Falha de Pagamento (Saldo Insuficiente)

### Objetivo

Validar o tratamento de erro do sistema quando um pagamento é recusado por saldo insuficiente.

### Pré-condições

1. Usuário possui os dados do cartão Inválido (Saldo Insuf.).
2. Usuário possui dados pessoais e de endereço válidos.

| Passo | Ação | Resultado Esperado |
| --- | --- | --- |
| 1 | Clicar no botão "Assinar Agora". | O usuário é direcionado para a etapa de seleção de plano. Deve exibir os planos Essencial, Conforto e Completo. |
| 2 | Selecionar um plano disponível (ex: "Essencial") e avançar. | O usuário é direcionado para a etapa de seleção de recorrência. |
| 3 | Selecionar uma recorrência (ex: "Mensal") e avançar. | O preço é atualizado conforme a seleção. O usuário é direcionado para a etapa de dados pessoais. |
| 4 | Preencher todos os campos obrigatórios de dados pessoais e endereço com informações válidas e avançar. | O usuário é direcionado para a etapa de pagamento. |
| 5 | Preencher todos os campos de pagamento com os dados do cartão Inválido (Saldo Insuf.) da massa de dados. | - |
| 6 | Submeter o formulário de pagamento (clicar em "Confirmar Pagamento"). | 
3. O pagamento é recusado.
4. O usuário permanece na tela de pagamento.
5. Deve ser exibida a seguinte notificação: ”Transação não autorizada. Entre em contato com o emissor do cartão.” 

---

### CT003: Adesão com Falta de Dados Válidos

### Objetivo

Validar o tratamento de erro do sistema quando o usuário não preenche os dados pessoais válidos.

### Pré-condições

1. Usuário possui os dados do cartão Inválido (Saldo Insuf.).
2. Usuário possui dados pessoais e de endereço válidos.

| Passo | Ação | Resultado Esperado |
| --- | --- | --- |
| 1 | Clicar no botão "Assinar Agora". | O usuário é direcionado para a etapa de seleção de plano. Deve exibir os planos Essencial, Conforto e Completo. |
| 2 | Selecionar um plano disponível (ex: "Essencial") e avançar. | O usuário é direcionado para a etapa de seleção de recorrência. |
| 3 | Selecionar uma recorrência (ex: "Mensal") e avançar. | O preço é atualizado conforme a seleção. O usuário é direcionado para a etapa de dados pessoais. |
| 4 | O usuário não preenche os dados válidos. | Deve ser exibida uma mensagem de erro. |
3. O usuário permanece na tela de dados e não pode avançar para a próxima etapa.

---

