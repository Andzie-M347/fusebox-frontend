import React from 'react'

export const PanicBox = ({ panic_type, details, user, date, id }) => {
    return (
        <figure className="panic" key={id}>
            <div className="panic__header">
                <h4> {panic_type} </h4>
                <small>{user}</small>
            </div>
            <div className="panic__content">
                <p> {details} </p>
            </div>

            <div className="panic__footer">
                <div className="panic__footer--left"></div>
                <div className="panic__footer--right">
                    <button className="badge">{date}</button>
                </div>
            </div>
        </figure>
    )
}
