// @ts-check
import { test, expect } from '@playwright/test';

test('HappyTest - Teste adesão de assinatura com sucesso', async ({ page }) => {
  await page.goto('https://babyrefil.vercel.app/')
  await page.getByRole('button', { name: 'Assinar Agora' }).click();
  //Selecionar um plano
  await page.getByRole('button', { name: 'Selecionar Plano' }).first().click();
  //Selecionar um período
  await page.getByText('Quinzenal').click();
  await page.getByRole('button', { name: 'Avançar' }).click();
  //Preencher os dados pessoais
  await page.locator('[name="fullName"]').fill('Joana Maria da Costa');
  await page.locator('[name="email"]').fill('jomaria@email.com');
  await page.locator('[name="phone"]').fill('62991234567');
  //Preencher dados do bebê
  await page.locator('[name="babyName"]').fill('Joaquim Mauricio');
  await page.getByRole('combobox', { name: 'Idade do Bebê' }).click();
  await page.getByLabel('6-9 meses').getByText('6-9 meses').click();
  //Preencher dados de entrega
  await page.locator('[name="cep"]').fill('04534-011');
  await page.getByRole('button', { name: 'Buscar' }).click();
  await page.waitForTimeout(1000);
  await page.locator('[name="number"]').fill('1000');
  await page.locator('[name="complement"]').fill('17º andar');
  await page.getByRole('button', { name: 'Avançar' }).click();
  //Preencher dados de pagamento
  await page.locator('[name="cardNumber"]').fill('4242424242424242'); // dados de cartão válido
  await page.locator('[name="cardName"]').fill('Joana Maria da Costa');
  await page.locator('[name="cardExpiry"]').fill('10/29');
  await page.locator('[name="cardCvv"]').fill('182');
  await page.locator('[name="cpf"]').fill('12332178900');
  await page.getByRole('button', { name: 'Finalizar Assinatura' }).click();
  //Fim do teste
  await expect(page.locator('text=Assinatura confirmada!')).toBeVisible();

})

test('UnhappyTest - Teste adesão de assinatura com cartão inválido', async ({ page }) => {
  await page.goto('https://babyrefil.vercel.app/')
  await page.getByRole('button', { name: 'Assinar Agora' }).click();
  //Selecionar um plano
  await page.getByRole('button', { name: 'Selecionar Plano' }).first().click();
  //Selecionar um período
  await page.getByText('Mensal').click();
  await page.getByRole('button', { name: 'Avançar' }).click();
  //Preencher os dados pessoais
  await page.locator('[name="fullName"]').fill('Sara Ferreira da Silva');
  await page.locator('[name="email"]').fill('sarinha@email.com');
  await page.locator('[name="phone"]').fill('64998541265');
  //Preencher dados do bebê
  await page.locator('[name="babyName"]').fill('Marco Andrade');
  await page.getByRole('combobox', { name: 'Idade do Bebê' }).click();
  await page.getByLabel('18-24 meses').getByText('18-24 meses').click();
  //Preencher dados de entrega
  await page.locator('[name="cep"]').fill('95084-225');
  await page.getByRole('button', { name: 'Buscar' }).click();
  await page.waitForTimeout(1000);
  await page.locator('[name="number"]').fill('75');
  await page.locator('[name="complement"]').fill('Bloco F, Apto 1002, 10º andar');
  await page.getByRole('button', { name: 'Avançar' }).click();
  //Preencher dados de pagamento
  await page.locator('[name="cardNumber"]').fill('5555555555554444'); // dados de cartão inválido
  await page.locator('[name="cardName"]').fill('Sara Ferreira');
  await page.locator('[name="cardExpiry"]').fill('03/28');
  await page.locator('[name="cardCvv"]').fill('182');
  await page.locator('[name="cpf"]').fill('90123456789');
  await page.getByRole('button', { name: 'Finalizar Assinatura' }).click();
  //Fim do teste
  await expect(page.locator('text=Pagamento Recusado').first()).toBeVisible();

})

test('Validar mensagens de erro', async ({ page }) => {
  await page.goto('https://babyrefil.vercel.app/')
  await page.getByRole('button', { name: 'Assinar Agora' }).click();
  //Selecionar um plano
  await page.getByRole('button', { name: 'Selecionar Plano' }).first().click();
  //Selecionar um período
  await page.getByText('Mensal').click();
  await page.getByRole('button', { name: 'Avançar' }).click();
  //Não preencher os dados pessoais
  await page.getByRole('button', { name: 'Avançar' }).click();
  //Fim do teste
  await expect(page.locator('text=Nome completo é obrigatório.')).toBeVisible();
  await expect(page.locator('text=E-mail inválido.')).toBeVisible();
  await expect(page.locator('text=Telefone inválido.')).toBeVisible();
  await expect(page.locator('text=Nome do bebê é obrigatório.')).toBeVisible();
  await expect(page.locator('text=Idade do bebê é obrigatória.')).toBeVisible();
  await expect(page.locator('text=CEP inválido.')).toBeVisible();
  await expect(page.locator('text=Endereço é obrigatório.')).toBeVisible();
  await expect(page.locator('text=Número é obrigatório.')).toBeVisible();
  await expect(page.locator('text=Bairro é obrigatório.')).toBeVisible();
  await expect(page.locator('text=Cidade é obrigatória.')).toBeVisible();
  await expect(page.locator('text=Estado é obrigatório.')).toBeVisible();

})