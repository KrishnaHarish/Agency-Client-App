const mongoose = require("mongoose");


const ClientSchema = new mongoose.Schema({

    ClientID: { type: "string" },
    AgencyID: { type: "string" },
    Name: { type: "string" },
    Email: { type: "string" },
    Phone: { type: "string" },
    TotalBill: { type: "string" }


});


const ClientDatabase = mongoose.model("ClientDatabase", ClientSchema);

module.exports = ClientDatabase;
