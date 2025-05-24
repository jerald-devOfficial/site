const BlogFaq = () => (
  <section
    className='w-full max-w-4xl mx-auto flex flex-col gap-8 py-10'
    id='blog'
  >
    <h2 className='text-2xl font-bold mb-4 text-center'>Resources & FAQ</h2>
    {/* Articles placeholder */}
    <div className='flex flex-col gap-4'>
      <div className='bg-white rounded-xl shadow p-6'>
        <h3 className='font-semibold mb-1'>
          5 Creative Barter Ideas for Spring Cleaning
        </h3>
        <p className='text-[#555] text-sm'>
          How to turn clutter into value with smart trades.
        </p>
      </div>
      <div className='bg-white rounded-xl shadow p-6'>
        <h3 className='font-semibold mb-1'>
          How to Win Auctions Without Overbidding
        </h3>
        <p className='text-[#555] text-sm'>
          Tips for getting the best deals in your neighborhood.
        </p>
      </div>
      <div className='bg-white rounded-xl shadow p-6'>
        <h3 className='font-semibold mb-1'>
          Success Story: How I Furnished My Apartment via Hyper-Local Trades
        </h3>
        <p className='text-[#555] text-sm'>
          A real user&apos;s journey to a fully furnished home.
        </p>
      </div>
    </div>
    {/* FAQ placeholder */}
    <div className='mt-6'>
      <h3 className='font-semibold mb-2'>FAQ</h3>
      <ul className='list-disc list-inside text-[#555] text-sm'>
        <li>How does TindaMo work?</li>
        <li>Is it safe to meet up?</li>
        <li>What can I trade or bid on?</li>
      </ul>
    </div>
  </section>
)

export default BlogFaq
