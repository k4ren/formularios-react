import { useState } from "react"

const Cat = () => {

  const [cat, setCat] = useState({name:'Dexter', year: 5})

  const handleclick = () => {
    console.log('click')
    // setCat({...cat, year: cat.year + 1})
    setCat((prev) => ({...prev, year: cat.year +1 }))
  }

  return (
    <>
      <h1>{cat.name} - {cat.year}</h1>
      <button onClick={handleclick} className="btn btn-dark mt-1 mb-1">update year</button>
    </>
  )
}
export default Cat