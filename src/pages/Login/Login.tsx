import { yupResolver } from '@hookform/resolvers/yup'
import { omit } from 'lodash'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import authApi from 'src/apis/auth.api'
import Input from 'src/components/Input'
import { ResponseApi } from 'src/types/utils.type'
import { Schema, schema } from 'src/utils/rules'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'

type FormData = Pick<Schema, 'email' | 'password'>
const loginSchema = schema.pick(['email', 'password'])

export const Login = () => {
  const {
    register,
    setError,
    formState: { errors },
    handleSubmit
  } = useForm<FormData>({ resolver: yupResolver(loginSchema) })
  const login = useMutation({ mutationFn: (body: FormData) => authApi.login(body) })
  const handleOnSubmit = handleSubmit((data) => {
    login.mutate(data, {
      onSuccess: (data) => {
        console.log(data)
        toast.success('Login successfully!')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ResponseApi<FormData>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof FormData, {
                message: formError[key as keyof FormData],
                type: 'server'
              })
            })
          }
        }
      }
    })
  })
  return (
    <div className='bg-[#ee4d2d]'>
      <div className="mx-auto max-w-7xl bg-[url('https://down-vn.img.susercontent.com/file/sg-11134004-7qvd5-lfuyd509f57p08')] bg-contain bg-center bg-no-repeat py-4">
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form onSubmit={handleOnSubmit} className='rounded bg-white p-10 shadow-sm' noValidate>
              <div className='text-2xl'>Đăng nhập</div>
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
                <button className='w-full bg-red-500 px-2 py-4 text-center text-sm uppercase text-white hover:bg-red-600'>
                  Đăng nhập
                </button>
              </div>
              <div className='item-center mt-8 flex justify-center'>
                <span className='text-slate-400'>Bạn mới biết đến Shopee? </span>
                <Link to='/register' className='text-red-500'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
