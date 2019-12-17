const { getOnePlant, getAllPlants } = require('../../services/PlantService');

const getSinglePlant = async (_, {id}) => {
    const plant = await getOnePlant(id);
    if(!plant) throw new Error('La planta no existe');
    return plant;
};

const getPlants = async () => {
    const plant = await getAllPlants();
    return plant;
};

module.exports = {
    getSinglePlant,
    getPlants,
};

