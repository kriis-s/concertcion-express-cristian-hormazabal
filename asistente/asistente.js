import { ObjectId } from "mongodb";

const Asistente = {
    _id: ObjectId,
    idEvento: ObjectId,
    nombre: String,
    edad: Array
};

export default Asistente;