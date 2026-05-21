import { allMonuments, addMonument, updateMonument } from '../services/monuments.service.js';

export const getMons = (req, res) => {
    const monArray = allMonuments();
    return res.status(200).json(monArray);
}

export const addMon = (req, res) => {
    //read the input data from the http request body
    const mon = req.body;
    if (mon) {
        addMonument(mon);
        res.status(201).json({
            message: "Monument added successfully"
        })
    } else {
        res.status(400).json({
            message: "Missing monument"
        })
    }
}

export const updateMon = (req, res) => {
    const mon = req.body;
    if (mon) {
        const result = updateMonument(mon);
        if (result) {
            res.status(200).json({
                message: "Monument updated"
            })
        } else {
            res.status(404).json({
                message: "Monument not found"
            })
        }
    } else {
        res.status(400).json({
            message: "Missing monument"
        })
    }
}