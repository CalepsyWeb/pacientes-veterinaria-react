import mascotas from '../assets/img/mascotasViolet.jpg'
function Header(){

    return(
    <div className=" bg-scroll bg-cover bg-right bg-no-repeat bg-blend-overlay bg-indigo-800" style={{ backgroundImage: `url('${mascotas}')` }}  >
        
        <h1 className="py-12 px-4 md:py-32 md:px-1 font-black text-4xl md:text-5xl text-center text-indigo-50 md:w-2/3 mx-auto ">
         Seguimiento pacientes Veterinaria    </h1>
        
     
    </div>
    )
}
export default Header;