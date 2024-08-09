import { usePatientStore } from "../store/store"
import { PatientDetails } from "./PatientDetails"

export const PatientsList = () => {
  const patients = usePatientStore(state => state.patients)
  return (
    <div className='md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll'>
      {patients.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>Pacientes</h2>
          <p className='text-xl mt-5 text-center mb-10'>
            Administra a tus {''}
            <span className='text-indigo-600 font-bold'>pacientes y citas</span>
          </p>

          {patients.map((patient) => (
            <PatientDetails
              key={patient.id}
              patient={patient}
          
            />
          ))}

            
        </>

      ) : (
        <>
          <h2 className="font-black text-3xl text-center"></h2>
          <p className="text-xl mt-5 text-center mb-10">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
          </p>
        </>
      )}

    </div>
  )
}
