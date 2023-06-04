import Laptop from '../assets/Laptop.jpg'

function Analytics() {
  return ( 
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="Laptop" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBORAD</p>
          <h1 className='md:text-4xl xm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe doloremque ratione obcaecati, qui ipsa a iusto, dignissimos mollitia consequuntur, voluptatem perspiciatis non amet animi odit temporibus sequi assumenda veritatis laborum.</p>
          <button className='bg-black w-[200px] rounded-md font-medium  my-6 md:mx-0 mx-auto py-3 text-[#00df9a]'>Get Started</button>
          
        </div>
      </div>
    </div>
   );
}

export default Analytics;