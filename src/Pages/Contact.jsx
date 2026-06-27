import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className='h-20 bg-[#161B22] flex justify-center items-center rounded-lg mt-5 mb-5'>
        <h1 className='text-7xl font-black font-morganite text-white'>Contact</h1>
      </div>

      <div className='bg-[#D5FF3F] p-1 md:flex justify-around md:p-5 rounded-lg mb-5'>
        <div className='1/2 text-black'>
          <h1 className='text-5xl font-bold'>Get In Touch</h1>
          <p className='py-2'>if you are interested in my work or want <br />
            to provide feedback about this website, I <br />
            am open to exchanding ideas.

          </p>
        </div>

        <form className='w-full sm:w-96 md:w-96 lg:w-96 flex flex-col gap-1'>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" className='bg-white rounded-lg'/>

          <label htmlFor="mail">Email</label>
          <input type="email" name="mail" id="mail" className='bg-white rounded-lg'/>

          <label htmlFor="msg">Message</label>
          <textarea name="msg" id="msg" className='bg-white rounded-lg'></textarea>
          <button type='submit' className='bg-black text-[#D5FF3F]  rounded-lg mt-3 px-2 py-2'>Send</button>
        </form>
      </div>
    </div>
  )
}
