const mongoose = require('mongoose');

const clarDatabase = () => {
    return new Promise ( resolver => {
        let count = 0;
        const max = Object.keys(mongoose.connect.collections).length;

        for (const key in mongoose.connection.collections) {
            mongoose.connection.collections[key].remove(function() {
                count++;
                if(count === max) resolver();
            });
        }
    });
};


module.exports = async function sepUpTest(){
    await clarDatabase();
};