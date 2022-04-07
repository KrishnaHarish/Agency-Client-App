require('dotenv').config()
const ClientDatabase = require('../models/ClientSchema.js');
const AgencyDatabase = require('../models/AgencySchema.js');
const jwt = require('jsonwebtoken');


const visitor = (req, res, next) => {

    const { username, email, role } = req.body
    payload = { username, email, role }
    secreatKey = process.env.SCREATKEY

    const token = jwt.sign(payload, secreatKey)

    if (token) {

        res.cookie('authToken', token);

        res.status(200).json(data = {
            error: false,
            message: 'your data saved successfully',
            token: token,
            role: role,
            name: username
        });
    } else {
        res.status(200).json(data = {
            error: true,
        });
    }
}

const agency = async (req, res, next) => {

    const agency = await AgencyDatabase.find({});
    if (agency) {
        res.status(200).json({ error: false, data: agency });
    }

}

const create = async (req, res, next) => {

    const { AgencyID, Name, Address1, Address2, State, City, Phoneno, ClientID, Email, TotalBill, Phone, } = req.body
    console.log(AgencyID, Name, Address1, Address2, State, City, Phoneno, ClientID, Email, TotalBill, Phone,);

    if (!ClientID) {
        console.log('AgencyId')

        const checkdubagency = await AgencyDatabase.findOne({ AgencyID: AgencyID })

        if (!checkdubagency) {
            const NewAgency = new AgencyDatabase({ AgencyID, Name, Address1, Address2, State, City, Phoneno });
            NewAgency.save().then(async () => { res.status(200).json({ error: false, message: "Agency Created", data: null }) });
        } else {
            res.status(200).json({ error: true, message: "Agency alerady registered", data: null })
        }

    } else {
        console.log('Client')
        const checkdubclient = await ClientDatabase.findOne({ ClientID: ClientID })
        if (!checkdubclient) {
            const NewClient = new ClientDatabase({ ClientID, AgencyID, Email, Name, TotalBill, Phone, });
            NewClient.save().then(async () => { res.status(200).json({ error: false, message: "client Created", data: null }) });
        } else {
            res.status(200).json({ error: true, message: "client alerady registered", data: null })
        }
    }

}

const getClient = async (req, res, next) => {

    const { id } = req.body
    const Agencydata = await AgencyDatabase.find({ AgencyID: id })
    const clientdata = await ClientDatabase.find({ AgencyID: id })
    const highestTotalBill = clientdata.sort((a, b) => a.TotalBill - b.TotalBill).reverse()
    if (Agencydata && highestTotalBill) {

        const data = await {
            AgencyName: Agencydata && Agencydata[0].Name,
            clientName: highestTotalBill && highestTotalBill[0].Name,
            TotalBill: highestTotalBill && highestTotalBill[0].TotalBill
        }
        res.status(200).json({
            error: false,
            message: "",
            data: data
        });
    } else {
        res.status(401).json({
            error: false,
            message: "No client found",
            data: null
        });
    }

}

const getAllClients = async (req, res, next) => {

    const allClients = await ClientDatabase.find({});
    if (allClients) {
        res.status(200).json({
            error: false,
            message: 'all clients data',
            data: allClients
        })
    } else {
        res.status(401).json({
            error: true,
            message: 'fetch failed',
            data: allClients
        })
    }

}

const updateuser = async (req, res, next) => {

    const { ClientID, AgencyID, Email, Name, TotalBill, Phone } = req.body
    const update = await ClientDatabase.updateOne({ ClientID: ClientID }, { $set: { AgencyID: AgencyID, Email: Email, Name: Name, TotalBill: TotalBill, Phone: Phone } })

    if (update) {
        res.status(200).json({
            error: false,
            message: 'client updated successfully',
            data: null
        })
    } else {
        res.status(200).json({
            error: true,
            message: 'client updated failed',
            data: null
        })
    }

}

module.exports = { create, visitor, agency, getClient, getAllClients, updateuser }