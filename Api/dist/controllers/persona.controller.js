"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPersona = exports.getPersonas = void 0;
const getPersonas = (req, res) => {
    res.json({
        msg: "getPersonas",
    });
};
exports.getPersonas = getPersonas;
const getPersona = (req, res) => {
    console.log(req.params.id);
    res.json({
        msg: "getPersona",
        id: req.params.id
    });
};
exports.getPersona = getPersona;
