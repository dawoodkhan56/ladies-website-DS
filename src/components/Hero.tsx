// import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className=" bg-black py-3">
      <div className="container mx-auto space-y-2 md:space-y-5 text-center">
        <h1 className="text-2xl sm:text-4xl font-semibold  hover:text-red-700 text-white">Welcome to our store Dawood Khan Sain SD!</h1>
        <p className="text-lg sm:text-lg md:text-2xl lg:text-4xl font-bold  hover:text-red-700 text-white">We are thrilled to have you here and are committed to providing you with an exceptional shopping experience, offering high-quality products and excellent customer service tailored just for you.</p>
        <button className="bg-red-700 hover:text-black text-white font-bold text-lg py-3 px-5 rounded">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
