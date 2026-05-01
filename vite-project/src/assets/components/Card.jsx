import { useState } from "react"

export default function Card({ item }) {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className="card">


            <div>
                {item.description}
            </div>



        </div>
    )
}