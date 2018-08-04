const description = {
    demand: false,
    alias: 'd',
    desc: 'Task description'
}

const id = {
    demand: true,
    alias: 'i',
    desc: 'Task id'
}

const completed = {
    demand: false,
    alias: 'c',
    default: true,
    desc: 'Mark as completed an existing task'
}

const init = {
    demand: false,
    alias: 'i',
    default: 1
}

const end = {
    demand: false,
    alias: 'end',
    default: null
}

const yargs = require('yargs')
    .command('create', 'Create a new task', {
        description
    })
    .command('update', 'Update existing task', {
        id,
        description,
        completed
    })
    .command('delete', 'Delete a Task', {
        id
    })
    .command('list', 'Tasks list', {
        init,
        end
    })
    .help()
    .argv;

module.exports = {
    yargs
}