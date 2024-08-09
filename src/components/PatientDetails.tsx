import { toast } from "react-toastify"
import { usePatientStore } from "../store/store"
import { Patient } from "../types"
import { PatientDetailItem } from "./PatientDetailItem"

type PatientDetailsProps = {
    patient: Patient
}

export const PatientDetails = ({ patient }: PatientDetailsProps) => {

    const deletePatient = usePatientStore(state => state.deletePatient)
    const getPatientById = usePatientStore(state => state.getPatientById)
    
    const handleClick = () => {
        deletePatient(patient.id)
        toast.error('Paciente eliminado correctamente')
    }
    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">

            <PatientDetailItem label="Id" data={patient.id} />
            <PatientDetailItem label="Nombre" data={patient.name} />
            <PatientDetailItem label="Propietario" data={patient.caretaker} />
            <PatientDetailItem label="Email" data={patient.email} />
            <PatientDetailItem label="Fecha" data={patient.date.toString()} />
            <PatientDetailItem label="Sintomas" data={patient.symptoms} />

            <div className="flex flex-col md:flex-row gap-3 justify-between mt-5">
                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg py-2 px-10"
                    onClick={() => getPatientById(patient.id)}
                    >
                    Editar
                </button>

                <button
                    type="button"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg py-2 px-10"
                    onClick={handleClick}
                    >
                    Eliminar
                </button>

            </div>

        </div>
    )
}
