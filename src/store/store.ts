import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { DraftPatient, Patient } from "../types";
import { v4 as uuidv4 } from 'uuid'

type PatienteState = {
    patients: Patient[]
    activeId: Patient['id']
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getPatientById: (id: Patient['id']) => void
    updatePatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient): Patient => {
    return { ...patient, id: uuidv4() }
}

export const usePatientStore = create<PatienteState>()(
    devtools(
     persist(   (set) => ({
        patients: [],
        activeId: '',
        addPatient: (data) => {
            const newPatiente = createPatient(data)
            set((state) => ({
                patients: [...state.patients, newPatiente]
            }))
        },
        deletePatient: (id) => {
            set((state) => ({
                patients: state.patients.filter((patient) => patient.id !== id)
            }))
        },
        getPatientById: (id) => {
            set(() => ({
                activeId: id
            }))
        },
        updatePatient: (data) => {
            set((state) => ({
                patients: state.patients.map(patient => patient.id === state.activeId ? { ...data, id: state.activeId } : patient),
                activeId: ''
            }))
        }
    }),
    {
        name: 'patients-storage'
    })
))