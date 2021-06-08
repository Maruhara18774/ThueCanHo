

import React, { useState, useEffect } from 'react'

export default function SelectRole() {
    const initialValue = [
        {
            id: 0, value: "Choose Role"
        }
    ]
    const stateValue = [
        {
            id: 1, value: "Admin"
        },
        {
            id: 2, value: "Customer"
        },
        {
            id: 3, value: "Partner"
        }
    ]

    const [selectRole, setRole] = useState(initialValue)
    useEffect(() => {
        setRole(stateValue)
    }, [])

    return (
        <div>
            <div className="form-group">
                <label>Role</label>
                <select className="form-control form-control-lg">
                    {selectRole.map((val, index) => (
                        <option key={val.id}>{val.value}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
