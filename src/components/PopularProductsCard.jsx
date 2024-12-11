import { star } from "../assets/icons"


const PopularProductsCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img 
        src={imgURL} 
        alt={name}
        className="w-[280px] h-[280px]" 
      />
      <div className="mt-8 flex flex-wrap justify-start gap-2.5 items-center">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal
        text-slate-gray pt-4">(4.5)</p>
        <h3 className="text-2xl leading-normal font-semibold mt-2 font-palanquin">
          {name}
        </h3>
        <p className=" font-semibold font-montserrat text-coral-red
        text-2xl leading-normal">
          {price}
        </p>
      </div>
    </div>
  )
}

export default PopularProductsCard
