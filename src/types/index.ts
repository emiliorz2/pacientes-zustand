
export type Patient = {
    id: string
    name: string
    caretaker: string
    email: string
    date: Date
    symptoms: string
    status: 'pending' | 'in-progress' | 'completed'
}

export type DraftPatient = Omit<Patient, 'id'>