import { useState } from "react"

export default function Card({ item }) {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className="card">
            <div>
                <button onClick={() => setIsVisible(!isVisible)}
                    style={{ backgroundColor: isVisible ? "rgb(255, 193, 7)" : "rgb(13, 110, 253)", color: isVisible ? "black" : "white" }}>  {item.title} </button>
            </div>
            {isVisible &&
                <div>
                    {item.description}
                </div>

            }

        </div>
    )
}