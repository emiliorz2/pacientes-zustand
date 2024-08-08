import { usePatientStore } from "../store/store"

export const PatientsList = () => {
  const patients = usePatientStore(state => state.patients)
  return (
    <div className='md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll'>
      {patients.length ? (
        <p className='text-center mt-5'>Si hay pacientes</p>
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
