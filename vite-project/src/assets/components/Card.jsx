import { useState } from "react"

export default function Card({ item }) {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className="card">
            <button onClick={() => setIsVisible(!isVisible)}
                style={{ backgroundColor: isVisible ? "rgb(255, 193, 7)" : "rgb(13, 110, 253)" }}>  {item.title} </button>

            {isVisible &&
                <p>
                    {item.description}
                </p>

            }

        </div>
    )
}