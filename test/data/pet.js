import Chance from "chance";
const chance = new Chance();

export default {
    id: chance.integer({min: 999, max: 99999}),
    name: chance.name(),
    status: "available",
    photoUrls: [],
    tags: []
};