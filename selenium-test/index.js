const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

(async function santigoAutomationTest() {
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options())
    .build();

  try {
    // Abrir aplicação local
    await driver.get("http://127.0.0.1:5500/");
    await driver.sleep(1000);

    // Clicar no link Login
    await driver.findElement(By.linkText("Entrar")).click();
    console.log("➡️ Clicou em Login");

    // Preencher email e password
    await driver.findElement(By.id("email")).sendKeys("joao.silva@mail.com");
    await driver.findElement(By.id("password")).sendKeys("qpalskzmg");
    await driver.sleep(1000);

    // Submeter formulário
    await driver.findElement(By.css("button[type='submit']")).click();
    console.log("✅ Login efetuado com sucesso");
    await driver.sleep(1000);

    // Esperar que link "Rotas" apareça e clicar

    await driver.findElement(By.linkText("Caminhos")).click();
    console.log("➡️ Acedeu à página de Rotas");
    await driver.sleep(1000);

    // Esperar e clicar no link para detalhes da primeira rota
 
    await driver.findElement(By.css(".btn-primary")).click();
    console.log("➡️ Abriu detalhes da primeira rota");
    await driver.sleep(1000);

    // Voltar para a página anterior
    await driver.navigate().back();
    console.log("↩️ Voltou à página anterior");


    // Aceder à página de perfil 
    await driver.findElement(By.linkText("João Silva")).click();
    console.log("➡️ Acedeu à página de Perfil");
    await driver.sleep(1000);

    // Fazer logout

    await driver.findElement(By.id("logout-btn")).click();
    console.log("✅ Logout efetuado com sucesso");


    // Esperar um pouco para visualizar antes de fechar
    await driver.sleep(2000);
  } catch (error) {
    console.error("❌ Erro no teste:", error);
  } finally {
        await driver.quit();
  }
})();
