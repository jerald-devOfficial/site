const TrustSafety = () => (
  <section
    className='w-full max-w-4xl mx-auto flex flex-col items-center gap-6 py-8'
    id='trust-safety'
  >
    <h2 className='text-2xl font-bold mb-2'>Why Trust Us?</h2>
    <div className='flex flex-wrap gap-6 justify-center items-center'>
      <div className='flex flex-col items-center'>
        <span className='text-2xl'>✅</span>
        <span className='font-semibold'>User Verification</span>
      </div>
      <div className='flex flex-col items-center'>
        <span className='text-2xl'>🔒</span>
        <span className='font-semibold'>Secure Chat & Meetups</span>
      </div>
      <div className='flex flex-col items-center'>
        <span className='text-2xl'>🎉</span>
        <span className='font-semibold'>10,000+ Safe Trades</span>
      </div>
    </div>
    <blockquote className='bg-white rounded-xl shadow p-6 mt-4 text-center max-w-xl mx-auto'>
      <span className='italic text-[#555]'>
        &quot;Traded my old grill for a coffee machine – all within 3
        blocks!&quot;
      </span>
      <span className='block mt-2 font-semibold'>– Sarah, Austin, TX</span>
    </blockquote>
  </section>
)

export default TrustSafety
