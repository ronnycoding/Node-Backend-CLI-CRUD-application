const yargs = require('yargs')
    .command('create', 'Create a new task', {
        description: {
            demand: true,
            alias: 'd',
            'desc': 'Task description'
        }
    })
    .command('update', 'Update existing task', {
        id: {
            demand: true,
            alias: 'i',
            'desc': 'Task id'
        },
        description: {
            demand: false,
            alias: 'd',
            'desc': 'Task description'
        },
        completed: {
            demand: false,
            alias: 'c',
            default: true,
            desc: 'Mark as completed an existing task'
        }
    })
    .command('list', 'Tasks list', {
        init: {
            demand: false,
            alias: 'i',
            default: 1
        },
        end: {
            demand: false,
            alias: 'end',
            default: null
        }
    })
    .command('delete', 'Delete a Task', {
        id: {
            demand: true,
            alias: 'i'
        }
    })
    .help()
    .argv;

module.exports = {
    yargs
}