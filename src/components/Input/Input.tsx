import { UseFormRegister } from 'react-hook-form'

interface Props {
  type: React.HTMLInputTypeAttribute
  name: string
  errorMessage?: any
  register: UseFormRegister<any>
  placeholder?: string
  autoComplete?: string
}

export const Input = ({ type, name, placeholder, errorMessage, register, autoComplete }: Props) => {
  return (
    <>
      <input
        type={type}
        className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-600 focus:shadow-sm'
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...register(name)}
      />
      <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errorMessage}</div>
    </>
  )
}
