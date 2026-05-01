import { useState } from "react"

export default function Card({ item }) {
    

    return (
        <div className="card">

            <div>
                {item.description}
            </div>

        </div>
    )
}