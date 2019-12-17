const { Plant } = require('../models');

const createPlant = (data) => Plant.create(data);

const getOnePlant = (id) => Plant.findById({_id:id, is_active:true});

const getAllPlants = () => Plant.find({is_active:true});

const deletePlant = (id) => Plant.findByIdAndUpdate({
    _id:id,
    is_active:true
}, {
    is_active:false
});

const updatePlant = (id, data) => Plant.findByIdAndUpdate({
    _id:id,
    is_active:true
}, {
    ...data
}, {
    new: true
});

module.exports = {
    createPlant,
    getOnePlant,
    getAllPlants,
    deletePlant,
    updatePlant,
};

