

export default function Contact() {
  return (
    <div className="min-h-screen bg-green-300 flex items-center justify-center">
        
      <div className="max-w-md mx-auto  mt-10 p-6 bg-orange-100  rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-black">Contact Us</h2>
        <form action="#" method="POST" className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full mt-1 px-3 py-2 border border-orange-400 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
  
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full mt-1 px-3 py-2 border border-orange-400 rounded-md focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
  
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-black">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full mt-1 px-3 py-2 border border-orange-400 rounded-md focus:ring-orange-500 focus:border-orange-500"
            ></textarea>
          </div>
  
          <button
            type="submit"
            className="w-full px-4 py-2 bg-orange-500 rounded-2xl border-orange-400-md hover:bg-orange-600  text-white focus:ring-2 focus:ring-black"
          >
            Send Message
          </button>
        </form>
      </div>


  </div> );
}
