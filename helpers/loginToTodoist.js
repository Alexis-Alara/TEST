const puppeteer = require('puppeteer');
const { addTaskToTodoist } = require('./addTaskToTodoist')
async function loginToTodoist(email, password, tasks) {
    const browser = await puppeteer.launch({
      headless: false, 
      });
    
    const page = await browser.newPage();
  
    try {
      await page.goto('https://todoist.com/users/showlogin');
  
      
      await page.waitForNavigation();
      await page.type('input[type="email"]', email); 
      await page.type('input[type="password"]', password); 
      await page.click('button[type="submit"]');
  
      
      await page.waitForNavigation();
  
      
      const isLoggedIn = await page.evaluate(() => {
        return document.querySelector('.top_bar__sync_button') !== null;
      });
  
      if (isLoggedIn) {
        console.log('Logged');
        addTaskToTodoist(tasks);
        
      } else {
        console.log('Credentials error');
      }
  
    } catch (error) {
      console.error('Failed login', error);
    } finally {
      await browser.close(); 
    }
  }

module.exports = {
    loginToTodoist
}