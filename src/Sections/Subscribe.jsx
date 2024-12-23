import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="flex justify-between max-container gap-10
    max-lg:flex-col items-center "
    id="contact-us">
      <h3 className="text-4xl leading-[68px] font-bold font-palanquin
      lg:max-w-md">
        Sign Up for&nbsp; 
        <span className="text-coral-red">Update</span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center 
      max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray
      rounded-full">
        <input 
          type="text"
          placeholder="Subscribe@nike.com"
          className="input"
        />
        <div className="flex max-sm:justify-end items-center 
        max-sm:w-full">
          <Button label="Sign up" fullWidth/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
