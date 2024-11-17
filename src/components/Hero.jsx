import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4]

const Hero = () => {
  return (
    <section className='grid grid-cols-1 items-center lg:grid-cols-2 gap-24' >
      <div >
        <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl'>We're changing the way people shop</h1>
        <p className='leading-8  max-w-xl text-lg mt-8 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem suscipit, voluptatem fugiat soluta nesciunt nobis. Non asperiores enim ipsa aspernatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quisquam totam perspiciatis saepe pariatur, voluptate rerum autem est possimus alias id mollitia quibusdam a quod ratione facilis aliquid amet perferendis.</p>
        <div className="mt-14">
          <Link to="/products" className=' btn btn-primary '>Our Products</Link>
        </div>
      </div>
      <div className="hidden lg:grid">
          <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
 
   {carouselImages.map((img,index)=>{
    return <div  key={img}  className="carousel-item">
      <img src={img} className="rounded-box h-full w-80 object-cover" />
    </div>
   })}
  
</div>
      </div>
    </section>
  )
}

export default Hero