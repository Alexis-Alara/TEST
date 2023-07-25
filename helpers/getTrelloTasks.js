const puppeteer = require('puppeteer');
async function getTrelloTasks() {
    const browser = await puppeteer.launch({ headless: false }); // Cambiar a 'true' si no deseas ver el navegador
    const page = await browser.newPage();
  
    try {

      await page.goto('https://trello.com/b/QvHVksDa/personal-work-goals'); 
  
      
      await page.waitForSelector('.list-cards');
  
      
      const taskNames = await page.$$eval('.list-cards .list-card-title', (tasks) => tasks.map((task) => task.textContent.trim()));
      const first5Tasks = taskNames.slice(0, 5);
      

      return first5Tasks;
    } catch (error) {
      console.error('Error: ', error);
    } finally {
      await browser.close();
    }
  }
module.exports = {
    getTrelloTasks
}