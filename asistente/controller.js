import { ObjectId } from "mongodb";

import client from "../common/db.js";
import Asistente from "./asistente.js";

const database = client.db("concertcion");
const collection = database.collection("asistentes");

export const handleInsertAsistenteRequest = async (req, res) => {
    try {

        const asistente = {
            idEvento: new ObjectId(req.body.idEvento),
            nombre: req.body.nombre,
            edad: req.body.edad
        };

        const result = await collection.insertOne(asistente);

        res.json(result);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
};

export const handleGetAsistentesRequest = async (req, res) => {

    try {

        const asistentes = await collection.find({}).toArray();

        res.json(asistentes);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};

export const handleGetAsistentesByEventoIdRequest = async (req, res) => {

    try {

        const idEvento = new ObjectId(req.params.id);

        const asistentes = await collection.find({
            idEvento: idEvento
        }).toArray();

        res.json(asistentes);

    } catch (error) {

        res.status(400).json({
            error: "Id mal formado"
        });

    }

};