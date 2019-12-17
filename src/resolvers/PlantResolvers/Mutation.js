const { createPlant, updatePlant, deletePlant } = require('../../services/PlantService');

const createNewPlant = async (_, {data}) => {
    const plant = await createPlant(data);
    return plant;
};

const updateOnePlant = async (_, {id, data}) => {
    const plant = await updatePlant(id, data);
    if(!plant) throw new Error('La planta no existe');
    return plant;
};

const deleteOnePlant = async (_, {id}) => {
    const plant = await deletePlant(id);
    if(!plant) throw new Error('La planta no existe');
    return plant;
};

module.exports = {
    createNewPlant,
    updateOnePlant,
    deleteOnePlant,
};

