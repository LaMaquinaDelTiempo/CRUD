"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putPersona = exports.postPersona = exports.deletePersona = exports.getPersona = exports.getPersonas = void 0;
const getPersonas = (req, res) => {
    res.json({
        msg: "getPersonas",
    });
};
exports.getPersonas = getPersonas;
const getPersona = (req, res) => {
    console.log(req.params.id);
    const { id } = req.params;
    res.json({
        msg: "getPersona",
        id: id
    });
};
exports.getPersona = getPersona;
const deletePersona = (req, res) => {
    console.log(req.params.id);
    const { id } = req.params;
    res.json({
        msg: "deletePersona",
        id: id
    });
};
exports.deletePersona = deletePersona;
const postPersona = (req, res) => {
    console.log(req.body);
    const { body } = req;
    res.json({
        msg: "postPersona",
        body: body
    });
};
exports.postPersona = postPersona;
const putPersona = (req, res) => {
    console.log(req.body);
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: "putPersona",
        body: body,
        id: id,
    });
};
exports.putPersona = putPersona;
