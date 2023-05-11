import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from 'src/components/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { Schema, schema } from 'src/utils/rules'

type FormData = Schema

export const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })
  const handleOnSubmit = handleSubmit((data) => {
    console.log(data)
  })
  return (
    <div className='bg-[#ee4d2d]'>
      <div className="mx-auto max-w-7xl bg-[url('https://down-vn.img.susercontent.com/file/sg-11134004-7qvd5-lfuyd509f57p08')] bg-contain bg-center bg-no-repeat py-4">
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form onSubmit={handleOnSubmit} className='rounded bg-white p-10 shadow-sm'>
              <div className='text-2xl'>Đăng ký</div>
              <div className='mt-8'>
                <Input
                  type='email'
                  name='email'
                  register={register}
                  errorMessage={errors.email?.message}
                  placeholder='Email'
                />
              </div>
              <div className='mt-3'>
                <Input
                  type='password'
                  name='password'
                  register={register}
                  errorMessage={errors.password?.message}
                  placeholder='Password'
                />
              </div>
              <div className='mt-3'>
                <Input
                  type='password'
                  name='confirm_password'
                  register={register}
                  errorMessage={errors.confirm_password?.message}
                  placeholder='Confirm password'
                />
              </div>
              <div className='mt-3'>
                <button className='w-full bg-red-500 px-2 py-4 text-center text-sm uppercase text-white hover:bg-red-600'>
                  Đăng ký
                </button>
              </div>
              <div className='item-center mt-8 flex justify-center'>
                <span className='text-slate-400'>Bạn đã có tài khoản? </span>
                <Link to='/login' className='text-red-500'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
