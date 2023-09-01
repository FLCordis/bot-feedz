require('dotenv').config();
const puppeteer = require('puppeteer');

console.log("Carregando o bot para o Feedz! 🤖");


(async function robo(){
    //Executa o navegador e abre uma página nova | {headless: false} dentro do 'launch' para ver o navegador abrindo
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //Carrega a página e preenche os dados
    await page.goto("https://app.feedz.com.br/");
    await page.type('[name="login_email"]', process.env.UNSPLASH_EMAIL);
    await page.type('[name="login_password"]', process.env.UNSPLASH_PASSWORD);
    
    await page.screenshot({path: 'login.png'});

    //Ele espera a navegação terminar de carregar e clica no botão
    await Promise.all([
        page.waitForNavigation(),
        page.click('#enter-login')
    ]);

    //Espera a página carregar
    await page.waitForNavigation();

    //Ele seleciona o botão e seleciona o "mood4" que é seu humor diário
    await page.waitForSelector('img[src="/assets/images/mood-4.png"]');
    await page.click('img[src="/assets/images/mood-4.png"]');

    //Ele seleciona o botão de enviar e clica, tirando uma screenshot depois pra ver se foi tudo certo
    await page.waitForSelector('#fdz-btn-send-mood');
    await page.click('#fdz-btn-send-mood');

    await page.screenshot({path: 'status.png'});
    await browser.close();
})();