import React from 'react'

export const AddPanicForm = () => {
    return (
        <form>
            <div class="form-group">
                <label htmlFor=""> Panic Type </label>
                <input
                    type="text"
                    name="panic_type"
                    placeholder="e.g Robbery"
                    className="form-control"
                    value=""
                />
            </div>
            <div className="form-group">
                <label htmlFor=""> Details </label>
                <textarea
                    type="text"
                    name="email"
                    placeholder="Describe your panic"
                    class="form-control"
                    value=""
                />
            </div>
            <div className="form-group">
                <button type="submit" className="button button__primary">
                    {' '}
                    Send Panic
                </button>
            </div>
        </form>
    )
}
