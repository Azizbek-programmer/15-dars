// import React from 'react'

// const Contact = () => {
//   return (
//     <div>
//         <div className='container'>
//             <div>
//                 <h1>Contact Us</h1>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
//                 <div className='bg-[#F4F6]'>
//                     <div className='flex'>
//                         <div>
//                             <p>Name</p>
//                             <input className='border' type="text" placeholder='Enter your name'/>
//                             <br />
//                             <p>Subject</p>
//                             <input className='border' type="text" placeholder='Provide context'/>
//                         </div>
//                         <div>
//                             <p>Emial</p>
//                             <input className='border' type="text" placeholder='Enter your Emial'/>
//                             <br />
//                             <p>Subject</p>
//                             <input className='border' type="text" placeholder='Select Subject'/>
//                         </div>
//                     </div>
//                     <div>
//                         <p>Message</p>
//                         <input className='border' type="text"  placeholder='Write your  question here'/>
//                     </div>
//                     <button className='border'>sent message</button>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Contact



import React from 'react'

const Contact = () => {
  return (
    <div className="w-full bg-white py-20">
      <div className="container">
        <div className="max-w-36px mx-auto text-center mb-12">
          <h1 className="text-[54px] font-bold text-[#282938]">Contact Us</h1>
          <p className="mt-[16px] text-[#282938]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div className="bg-[#F4F6FC] p-[40px] rounded-[16px]">
          <div className="flex gap-8">
            
            <div className="flex-1 flex flex-col gap-[20px]">
              <div>
                <p className="mb-[8px] text-gray-700">Name</p>
                <input
                  className="w-full border border-gray-300 rounded-[8px] px-[16px] py-[8px]"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <p className="mb-2 text-[#282938]">Subject</p>
                <input
                  className="w-full border border-gray-300 rounded-[8px] px-4 py-2"
                  type="text"
                  placeholder="Provide context"
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-5">
              <div>
                <p className="mb-[8px] text-[#282938]">Email</p>
                <input
                  className="w-full border border-gray-300 rounded-[8px] px-4 py-2"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <p className="mb-[8px] text-[#282938]">Subject</p>
                <input
                  className="w-full border border-gray-300 rounded-[8px] px-4 py-2"
                  type="text"
                  placeholder="Select subject"
                />
              </div>
            </div>
          </div>
          <div className="mt-[32px]">
            <p className="mb-[8px] text-[#282938]">Message</p>
            <textarea
              className="w-full border border-gray-300 rounded-[8px] px-[16px] py-[12px] h-[128px] "
              placeholder="Write your question here"
            ></textarea>
          </div>

          <div className="mt-[32px] text-center">
            <button className="bg-[#282938] text-white px-[32px] py-[12px] rounded-full">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
