import React from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'

const Login = () => {
  return (
    <AuthLayout>
      <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Que bueno que haz vuelto</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Porfavor, ingrese sus datos para ingresar
        </p>
      </div>
    </AuthLayout>
  )
}

export default Login