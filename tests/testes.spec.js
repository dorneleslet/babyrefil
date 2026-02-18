// @ts-check
import { test, expect } from '@playwright/test';

test('Teste adesão de assinatura com sucesso', async ({ page }) => {
  await page.goto('https://babyrefil.vercel.app/')
  await page.getByRole('button', { name: 'Assinar Agora' }).click()
  await page.getByRole('button', { name: 'Plano Selecionado' }).click()
  //await page.locator('[id="mensal"]').click()
  await page.getByRole('button', { name: 'Avançar' }).click()
  await page.locator('[name="fullName"]').fill('Joana Maria da Costa')
  await page.locator('[name="email"]').fill('jomaria@email.com')
  await page.locator('[name="phone"]').fill('62991234567')
  await page.locator('[name="babyName"]').fill('Joaquim Mauricio')


  // await page.locator('[data-test="username"]').fill('standard_user')
  // await page.locator('[data-test="password"]').fill('secret_sauce')
  // await page.locator('[data-test="login-button"]').click()
  // await expect(page).toHaveTitle(/Swag Labs/)
})