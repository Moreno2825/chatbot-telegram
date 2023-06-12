const fs = require("fs");

function loadData() {
    const data = fs.readFileSync('src/data/clinicalCase.json');
    const { clinicalCases } = JSON.parse(data);
    return clinicalCases;
}
module.exports = loadData;