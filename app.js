const argv = require('./config/yargs').yargs;
const colors = require('colors');
const { create, list, update, remove } = require('./todo/todo');

const command = argv._[0];

switch (command) {
    case 'create':
        create(argv.description);
        break;
    case 'update':
        update(argv.id, argv.description, argv.completed);
        break;
    case 'delete':
        remove(argv.id);
        break;
    case 'list':
        console.log('============================================='.green);
        console.log('================Tasks List==================='.green);
        console.log('============================================='.green);
        list().then((tasks) => {
            for (let task in tasks) {
                console.log(`id: ${tasks[task].id}`);
                console.log(tasks[task].description);
                console.log(`completed: ${tasks[task].completed }`);
                console.log(`created date: ${tasks[task].date_time} `);
                console.log('============================================='.green);
            }
        });
        break;
    default:
        console.log(`command ${ command } not found!`);

}