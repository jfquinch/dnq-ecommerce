import Layout from "../../Components/Layout/layout"
import { useForm } from "react-hook-form"
import Button from "../../Components/Button"

function LoginForm() {

    return (
      <Layout>
        <div className='flex w-full min-h-screen'>
          <div className='w-1/2 h-screen flex flex-col justify-center px-8 bg-gray-200'>
            <img src='https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='login' className='w-full h-full object-cover rounded-2xl mt-24 mb-8' />
          </div>
          <form className='w-1/2 h-screen flex flex-col gap-8 justify-center pl-8 rounded-s bg-gray-200'>
            <p className='font-bold text-5xl'>
              Ingresa tus credenciales
            </p>
            <input
              type='email'
              placeholder='Email'
              className='w-2/4 h-10 py-2 px-4 rounded-2xl'
            />
            <input
              type='password'
              placeholder='Password'
              className='w-2/4 h-10 py-2 px-4 rounded-2xl'
            />
            <Button text='Login' type='submit' />
          </form>
        </div>
      </Layout>
    )
  }
  
export default LoginForm
