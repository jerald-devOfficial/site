const Onboarding = () => (
  <section
    className='w-full max-w-3xl mx-auto flex flex-col items-center gap-6 py-8'
    id='onboarding'
  >
    <h2 className='text-2xl font-bold mb-2'>Get Started in 3 Easy Steps</h2>
    <ol className='flex flex-col sm:flex-row gap-4 w-full justify-center'>
      <li className='flex-1 bg-white rounded-2xl shadow p-6 flex flex-col items-center'>
        <span className='text-3xl mb-2'>1️⃣</span>
        <span className='font-semibold'>Enter your location or email</span>
      </li>
      <li className='flex-1 bg-white rounded-2xl shadow p-6 flex flex-col items-center'>
        <span className='text-3xl mb-2'>2️⃣</span>
        <span className='font-semibold'>Browse local demo listings</span>
      </li>
      <li className='flex-1 bg-white rounded-2xl shadow p-6 flex flex-col items-center'>
        <span className='text-3xl mb-2'>3️⃣</span>
        <span className='font-semibold'>Sign up or download the app</span>
      </li>
    </ol>
    {/* Demo listings placeholder */}
    <div className='w-full flex flex-wrap gap-4 justify-center mt-4'>
      <div className='w-40 h-32 bg-[#F5A623]/20 rounded-xl flex items-center justify-center text-[#F5A623]'>
        Demo Listing
      </div>
      <div className='w-40 h-32 bg-[#0ea5e9]/10 rounded-xl flex items-center justify-center text-[#0ea5e9]'>
        Demo Listing
      </div>
    </div>
  </section>
)

export default Onboarding
