import { use, useState } from "react"
import Card from "./Card"
import languages from "../../data/languages"

export default function CardContainer({item}) {
const [IsOn,SetIsOn] = useState (false)

    return (
        <>
            <h1> Learn web development</h1>
            <div className="ContainerCard">
                {languages.map((item)=>(
                      <Card key={item.id} item={item}/>
                ))}
            </div>
        </>
    )
}