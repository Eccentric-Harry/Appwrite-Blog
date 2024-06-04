import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    type = 'text',
    label,
    className = '',
    ...props
}, ref ) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && (
                <label
                    className='block mb-1 text-sm font-semibold text-gray-200'
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                className={`block w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring focus:border-indigo-500 ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input
