import { useState, useEffect } from 'react'

export const useForm = () => {
    const [values, setValue] = useState({
        email: '',
        password: '',
        panic_type: '',
        details: '',
    })

    // const [errors, setError] = useState({})

    const onInputChange = e => {
        const { name, value } = e.target
        setValue({
            ...values,
            [name]: value,
        })
    }

    return { onInputChange, values }
}
