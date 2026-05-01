import { useState } from "react"
import languages from "../../data/languages"
import Button from "./Button"
import Card from "./Card"

export default function CardContainer() {
  const [selectedLang, setSelectedLang] = useState(languages[0])

  return (
    <>
      <h1>Learn web development</h1>

      <div className="container">
        {languages.map((item) => (
          <Button
            key={item.id}
            item={item}
            isActive={selectedLang.id === item.id}
            onClick={() => setSelectedLang(item)}
          />
        ))}
        
      </div>

      <Card item={selectedLang} />
    </>
  )
}