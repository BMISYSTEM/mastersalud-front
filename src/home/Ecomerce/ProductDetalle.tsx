import { useParams } from "react-router-dom"

export const ProductDetalle = () => {
    const {id} = useParams()
    console.log(id)
  return (
    <section className="w-full flex flex-col md:flex-row gap-2">
        <div className="w-full h-full p-2">

        </div>
        <div>

        </div>
    </section>
  )
}
