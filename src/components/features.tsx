const Features = () => (
  <section
    className='w-full max-w-5xl mx-auto flex flex-col gap-10 py-10'
    id='features'
  >
    <h2 className='text-2xl font-bold mb-4 text-center'>How It Works</h2>
    <div className='flex flex-col md:flex-row gap-8'>
      {/* Geo-Mapping */}
      <div className='flex-1 bg-white rounded-2xl shadow p-6 flex flex-col items-center'>
        <span className='text-3xl mb-2'>📍</span>
        <h3 className='font-semibold text-lg mb-1'>Geo-Mapping</h3>
        <p className='text-[#555] text-center mb-2'>
          See real-time availability of items/services near you.
        </p>
        <div className='w-full h-20 bg-[#0ea5e9]/10 rounded-lg mb-2 flex items-center justify-center'>
          Map Demo
        </div>
        <span className='text-xs text-[#555]'>
          Need a ladder ASAP? Find one 0.2 miles away!
        </span>
      </div>
      {/* Barter System */}
      <div className='flex-1 bg-white rounded-2xl shadow p-6 flex flex-col items-center'>
        <span className='text-3xl mb-2'>🔄</span>
        <h3 className='font-semibold text-lg mb-1'>Barter System</h3>
        <p className='text-[#555] text-center mb-2'>
          Trade what you have for what you need – no money needed.
        </p>
        <ol className='flex gap-2 text-xs text-[#555] mb-2'>
          <li>List</li>
          <li>→ Propose/Accept</li>
          <li>→ Swap</li>
        </ol>
        <div className='w-full h-10 bg-[#27ae60]/10 rounded-lg flex items-center justify-center'>
          Success Stories
        </div>
      </div>
      {/* Bidding Hub */}
      <div className='flex-1 bg-white rounded-2xl shadow p-6 flex flex-col items-center'>
        <span className='text-3xl mb-2'>⚡</span>
        <h3 className='font-semibold text-lg mb-1'>Bidding Hub</h3>
        <p className='text-[#555] text-center mb-2'>
          Win local deals – bid before time runs out!
        </p>
        <div className='w-full h-10 bg-[#F5A623]/10 rounded-lg flex items-center justify-center'>
          Auction Preview
        </div>
        <span className='text-xs text-[#555]'>
          Live auction, countdown timers
        </span>
      </div>
    </div>
  </section>
)

export default Features
