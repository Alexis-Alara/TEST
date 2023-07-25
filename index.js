const { getTrelloTasks } = require('./helpers/getTrelloTasks')
const { loginToTodoist } = require('./helpers/loginToTodoist')

const email = 'test@gmail.com';
const password = 'password123';

async function main() {
    const tasks = await getTrelloTasks();
    console.log('Todo List:');
    console.log(tasks);
    loginToTodoist(email, password, tasks);  
  }

main();