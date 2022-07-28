import React from 'react';
import Person from '../../assets/background/paul-s-chun.jpg'
function Testimonials() {
	return (
		<div>
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row  ">

					<div className='flex flex-col'>
						{/*profile start */}
						<div className='flex flex-col  lg:flex-row lg:items-center lg:gap-5'>
							<img src={Person} className='p-5 lg:rounded-full' alt="" />
							<div className='text-center '>
								<h1 className=' text-lg font-bold'>
									Paul S. Chun
								</h1>
								<p className='text-gray-600'>
									CTO of Rivalfox GmbH
								</p>
							</div>
						</div>
						{/*profile end */}
					
							<h2 className='text-justify p-5'>The Rivalfox had the pleasure to work with Rexoit in building out core portions of our product, and the results really couldn’t have been better. Rexoit supercharged our productivity by providing us with three team members whose technological expertise was surpassed only by their enthusiasm. Many times they found better solutions than were given to them, and with that alongside their excellent ability to communicate, they made our product better, faster, which resulted in customers becoming happier sooner. Rexoit provided us with engineering expertise, enthusiasm, and great people that were focused on creating quality features quickly.</h2>
					

					</div>
					<div className='flex flex-col'>
						{/*profile start */}
						<div className='flex flex-col  lg:flex-row lg:items-center lg:gap-5'>
							<img src={Person} className='p-5 lg:rounded-full' alt="" />
							<div className='text-center '>
								<h1 className=' text-lg font-bold'>
									Paul S. Chun
								</h1>
								<p className='text-gray-600'>
									CTO of Rivalfox GmbH
								</p>
							</div>
						</div>
						{/*profile end */}

						<h2 className='text-justify p-5'>The Rivalfox had the pleasure to work with Rexoit in building out core portions of our product.by providing us with three team members whose technological expertise was surpassed only by their enthusiasm. Many times they found better solutions than were given to them, and with that alongside their excellent ability to communicate, they made our product better, faster, which resulted in customers becoming happier sooner. Rexoit provided us with engineering expertise, enthusiasm, and great people that were focused on creating quality features quickly.</h2>


					</div>

					<div className='flex flex-col'>
						{/*profile start */}
						<div className='flex flex-col  lg:flex-row lg:items-center lg:gap-5'>
							<img src={Person} className='p-5 lg:rounded-full' alt="" />
							<div className='text-center '>
								<h1 className=' text-lg font-bold'>
									Paul S. Chun
								</h1>
								<p className='text-gray-600'>
									CTO of Rivalfox GmbH
								</p>
							</div>
						</div>
						{/*profile end */}

						<h2 className='text-justify p-5'>The Rivalfox had the pleasure to work with Rexoit in building out core portions of our product, and the results really couldn’t have been better. Rexoit supercharged our productivity by providing us with three team members whose technological expertise was surpassed only by their enthusiasm. Many times they found better solutions than were given to them, and with that alongside their excellent ability to communicate, they made our product better, faster, which resulted in customers becoming happier sooner. Rexoit provided us with engineering expertise, enthusiasm, and great people that were focused on creating quality features quickly.</h2>


					</div>
						
					
				</div>

			</div>
		</div>
	);
}

export default Testimonials;
