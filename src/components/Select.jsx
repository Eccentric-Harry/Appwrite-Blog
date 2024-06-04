import React, { useId, forwardRef } from 'react';

const Select = forwardRef(function Select({
    options,
    className,
    label,
    ...props
}, ref) {
    const id = useId();

    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className=''>{label}</label>}
            <select 
                {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            >
                {options.length === 0 ? (
                    <option value=''>Select</option>
                ) : (
                    options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))
                )}
            </select>
        </div>
    );
});

export default Select;



// export default React.forwardRef(Select);