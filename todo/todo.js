const fs = require('fs');

const readFilePromise = require('fs-readfile-promise');

const create = async(description) => {
    let todo = {
        description,
        completed: false,
        date_time: new Date().toUTCString()
    };


    let dataStoraged = await list();

    todo.id = dataStoraged.length + 1;

    dataStoraged.push(todo);

    let data = JSON.stringify(dataStoraged);

    fs.writeFile('db/data.json', data, 'utf8', (err) => {

        if (err) throw new Error('Problem saving data', err);

        console.log(`your task: "${ todo.description }" has been created.`);
    })

}

const list = async() => {

    let dataStoraged = await readFilePromise('db/data.json', 'utf8');

    if (!dataStoraged) {
        dataStoraged = [];
    } else {
        dataStoraged = JSON.parse(dataStoraged);
    }

    return dataStoraged;
}

const update = async(id, description = null, completed = null) => {
    let dataStoraged = await list();

    let index = dataStoraged.findIndex(task => task.id === id);

    if (index >= 0) {

        if (description !== null) {
            dataStoraged[index].description = description;
        }

        if (completed !== null) {
            dataStoraged[index].completed = parseInt(completed);
        }

        let data = JSON.stringify(dataStoraged);

        fs.writeFile('db/data.json', data, 'utf8', (err) => {

            if (err) throw new Error('Problem updating data', err);

            console.log(`your task: "${ id }" has been updated.`);
        })
    } else {
        console.log(`Task id ${index} not found`);
    }

}

const remove = async(id) => {
    let dataStoraged = await list();

    let index = dataStoraged.findIndex(task => task.id === id);

    if (index >= 0) {

        let dataProcessed = dataStoraged.filter((item) => {
            if (item.id !== id) {
                return item;
            }
        });

        let data = JSON.stringify(dataProcessed);

        fs.writeFile('db/data.json', data, 'utf8', (err) => {

            if (err) throw new Error('Problem deleting data', err);

            if (dataProcessed.length !== dataStoraged.length) {
                console.log(`your task: "${ id }" has been deleted.`);
            } else {
                console.log(`your task: "${ id }" has not been deleted.`);
            }

        })
    } else {
        console.log(`your task: "${ id }" is not found.`);
    }
}

module.exports = {
    create,
    list,
    update,
    remove
}