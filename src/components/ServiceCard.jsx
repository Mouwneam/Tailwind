

const ServiceCard = ({imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px]  
    rounded-[20px] shadow-3xl px-10 py-16 max-w-[500px]">
      <div className="flex w-11 h-11 justify-center items-center bg-coral-red
      rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin font-bold text-3xl leading-normal">
        {label}
      </h3>
      <p className="mt-3 text-slate-gray leading-normal text-lg font-montserrat break-words">
        {subtext}
      </p>
    </div>
  )
}

export default ServiceCard
