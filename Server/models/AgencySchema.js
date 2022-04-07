const mongoose = require("mongoose");


const AgencySchema = new mongoose.Schema({

    AgencyID: { type: "string" },
    Name: { type: "string" },
    Address1: { type: "string" },
    Address2: { type: "string" },
    State: { type: "string" },
    City: { type: "string" },
    Phone: { type: "string" },

});


const AgencyDatabase = mongoose.model("AgencyDatabase", AgencySchema);

module.exports = AgencyDatabase;
