import { useForm } from '@/hooks/useForm'
import axios from '@/lib/axios'
import React from 'react'
import { useSelector } from 'react-redux'

export const AddPanicForm = ({ lat, lng }) => {
    const { user } = useSelector(state => state.user)

    const { onInputChange, values } = useForm()

    const handlePanic = async e => {
        e.preventDefault()
        await axios
            .post(`/api/send-panic/${user.id}`, {
                latitude: lat,
                longitude: lng,
                panic_type: values.panic_type,
                details: values.details,
            })
            .then(response => {
                console.log(response.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor=""> Panic Type </label>
                <input
                    type="text"
                    name="panic_type"
                    placeholder="e.g Robbery"
                    className="form-control"
                    value={values.panic_type}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor=""> Details </label>
                <textarea
                    type="text"
                    name="details"
                    placeholder="Describe your panic"
                    className="form-control"
                    value={values.details}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <button
                    type="submit"
                    className="button button__primary"
                    onClick={handlePanic}>
                    Send Panic
                </button>
            </div>
        </form>
    )
}
