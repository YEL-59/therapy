import React from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import AboutBlogimg from "../../assets/background/rexoit-about-image.png";
import Div2img from "../../assets/background/therapypreview.png"
import LogoBig from '../../assets/logo/logobig.png'
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import StarIcon from '@mui/icons-material/Star';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Img1 from '../../assets/background/Neuropedia-1-e1638035373984.png'
import Img2 from '../../assets/background/logo-stretched-wide-e1638035459893.png'
import Img3 from '../../assets/background/ftf-e1638035426166.png'
import Img4 from '../../assets/background/fs_logo_300px.png'
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import Bg2 from '../../assets/background/bg2.png'
import Optimiz from '../../assets/background/Optimized-OWINKS1-1024x853.jpg'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
function Home() {

	const Service = [
		{
			id: 1,
			ServiceImg: require('../../assets/service/Scheduling-1.gif'),
			ServiceTitle: 'Scheduling',
			ServiceBody: 'Schedule your meetings with one or several therapists without the fear of conflicts, rates, as well as CPT codes. Organizes your appointments while you can access it from anywhere, anytime',


		},
		{
			id: 2,
			ServiceImg: require('../../assets/service/Scheduling-1.gif'),
			ServiceTitle: 'Scheduling',
			ServiceBody: 'Schedule your meetings with one or several therapists without the fear of conflicts, rates, as well as CPT codes. Organizes your appointments while you can access it from anywhere, anytime',


		},
		{
			id: 3,
			ServiceImg: require('../../assets/service/Scheduling-1.gif'),
			ServiceTitle: 'Scheduling',
			ServiceBody: 'Schedule your meetings with one or several therapists without the fear of conflicts, rates, as well as CPT codes. Organizes your appointments while you can access it from anywhere, anytime',


		},
		{
			id: 4,
			ServiceImg: require('../../assets/service/Scheduling-1.gif'),
			ServiceTitle: 'Scheduling',
			ServiceBody: 'Schedule your meetings with one or several therapists without the fear of conflicts, rates, as well as CPT codes. Organizes your appointments while you can access it from anywhere, anytime',


		},
		{
			id: 5,
			ServiceImg: require('../../assets/service/Scheduling-1.gif'),
			ServiceTitle: 'Scheduling',
			ServiceBody: 'Schedule your meetings with one or several therapists without the fear of conflicts, rates, as well as CPT codes. Organizes your appointments while you can access it from anywhere, anytime',


		},
		{
			id: 6,
			ServiceImg: require('../../assets/service/Scheduling-1.gif'),
			ServiceTitle: 'Scheduling',
			ServiceBody: 'Schedule your meetings with one or several therapists without the fear of conflicts, rates, as well as CPT codes. Organizes your appointments while you can access it from anywhere, anytime',


		},
		{
			id: 7,
			ServiceImg: require('../../assets/service/Scheduling-1.gif'),
			ServiceTitle: 'Scheduling',
			ServiceBody: 'Schedule your meetings with one or several therapists without the fear of conflicts, rates, as well as CPT codes. Organizes your appointments while you can access it from anywhere, anytime',


		},
		{
			id: 8,
			ServiceImg: require('../../assets/service/Scheduling-1.gif'),
			ServiceTitle: 'Scheduling',
			ServiceBody: 'Schedule your meetings with one or several therapists without the fear of conflicts, rates, as well as CPT codes. Organizes your appointments while you can access it from anywhere, anytime',


		},

		{
			id: 9,
			ServiceImg: require('../../assets/service/Scheduling-1.gif'),
			ServiceTitle: 'Scheduling',
			ServiceBody: 'Schedule your meetings with one or several therapists without the fear of conflicts, rates, as well as CPT codes. Organizes your appointments while you can access it from anywhere, anytime',


		}






	]

	return <div className='container mx-auto'>

	

		<div class=" flex justify-evenly gap-5  flex-col  lg:flex-row mt-14  lg:mt-28">
			<div className="max-w-lg   p-4 lg:p-0 lg:text-start">
				<h1 class="text-2xl lg:text-4xl font-bold text-center  lg:text-start  mb-5">
					Practice Management Software</h1>


				<h2 className='text-lg lg:text-2xl font-semibold  mb-5'>For Your Therapy Practice</h2>
				<p className='text-sm lg:text-lg'>Focus on what really matters, your clients. Problems solved with just a click!</p>
				<div class="flex justify-center lg:justify-start space-x-2 mt-5">
					<button
						type="button"
						class="inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-sm leading-tight uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
					>
						<ArrowCircleRightIcon />	Book For 30 Minute Of Demo
					</button>
				</div>
			</div>

			<div className='relative w-full pb-[56.25%] h-0'>
				<iframe className='absolute top-0 left-0 w-[70%] h-full lg:h-[40%] mr-[15%] ml-[15%]' width="560" height="315" src="https://www.youtube.com/embed/LMMF9Ka_bLQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</div>

		<div className="flex flex-col lg:flex-row justify-center items-center  lg:mt-[-20%]">
			<div>
				<img src={Div2img} alt="" />
			</div>
			<div className='p-2 text-justify lg:p-0'>
				<p className='text-lg lg:text-2xl font-bold px-3 border-l-8 border-red-500 mb-5'>Get Started In 15 Minutes</p>
				<p className='mb-2 max-w-lg text-sm'>We are doing everything we can to make the platform easy to use. You will be fully on board and start working closer together with your families in less than 15 minutes.</p>

				<p className='max-w-lg text-sm'>No need for extensive training or courses. Works smoothly with your existing business and applications.</p>
			</div>



		</div>

		<div className='flex flex-col justify-center items-center gap-8 rounded bg-blue-900 bg-opacity-70 p-8 mx-2 mt-14 lg:p-0 lg:mx-20'>
			<div className='mt-10'>
				<img src={LogoBig} alt="" />
			</div>

			<h1 className='text-3xl font-semibold text-white text-center'>The Practice Management Platform For</h1>
			<h1 className='text-sm lg:text-4xl font-extrabold text-red-700 mb-10'>Individuals Who Care</h1>

		</div>


		<div className='lg:mx-20 mt-14'>
			{/**1st part start */}
			<div className='flex flex-col lg:flex-row lg:justify-between p-2 lg:p-0'>
				<p className='text-lg lg:text-2xl font-bold px-3 border-l-8 border-red-500 mb-5'>What We Offer</p>
				<div class="flex justify-start lg:justify-start space-x-2 ">
					<button
						type="button"
						class="inline-block rounded px-4 py-2 bg-orange-600 text-white font-medium text-sm leading-tight uppercase  shadow-md"
					>
						<ArrowCircleRightIcon />	View Our Features
					</button>
				</div>
			</div>
			{/**1st part end */}
			<div className="flex flex-col lg:flex-row p-2 lg:p-0 gap-11 mt-14">

				<div className=' border-2 px-16 py-10 rounded-lg '>

					<div className='h-20 w-20 mx-auto mb-2 border-2 border-orange-600 hover:border-blue-600 flex justify-center items-center hover:scale-y-50 ease-in-out'>
						<ImageSearchIcon fontSize='large' />
					</div>
					<h1 className='text-lg lg:text-2xl font-bold lg:font-medium text-blue-900 text-opacity-70'>FREE FOR 30 DAYS</h1>


				</div>
				<div className=' border-2 px-16 rounded-lg bg-blue-900 bg-opacity-70 py-10'>

					<div className='h-20 w-20 mx-auto mb-2 border-2 border-orange-600 hover:border-blue-600 flex justify-center items-center hover:scale-y-50 ease-in-out'>
						<ImageSearchIcon fontSize='large' />
					</div>
					<h1 className='text-2xl font-medium text-white'>24/7 SUPPORT</h1>


				</div>
				<div className=' border-2 px-16 rounded-lg  py-10'>

					<div className='h-20 w-20 mx-auto mb-2 border-2 border-orange-600 hover:border-blue-600 flex justify-center items-center hover:scale-y-50 ease-in-out'>
						<ImageSearchIcon fontSize='large' />
					</div>
					<h1 className='text-sm text-center lg:text-2xl font-bold lg:font-medium text-blue-900 text-opacity-70'>DISCOUNT OFFERED</h1>


				</div>





			</div>


		</div>

		<h1 className='text-2xl font-bold text-center  text-blue-900 text-opacity-70 mt-14'>Therapy PMS Simplifies Data Collection</h1>
		<hr className='h-[5px] mx-auto w-28 bg-red-700 lg:mt-5 ' />


		<div class=" flex justify-evenly gap-5  flex-col  lg:flex-row mt-14  lg:mt-28 lg:mx-20">
			<div className="flex flex-col gap-2 p-2 lg:p-0">
				<div className='border-4 rounded-t-2xl rounded-b-2xl lg:rounded-full p-4'>
					<div className="flex flex-col lg:flex-row gap-5">
						<div className='h-12 w-12  mx-auto flex justify-center items-center rounded-full bg-orange-600 p-5'>
							<ImageSearchIcon fontSize='large' />

						</div>
						<p className='text-xs lg:text-sm'>Data collection and analysis are crucial components of any ethical, quality, evidence-based practice.</p>

					</div>




				</div>
				<div className='border-4 rounded-t-2xl rounded-b-2xl lg:rounded-full p-4'>
					<div className="flex flex-col lg:flex-row gap-5">
						<div className='h-12 w-12  mx-auto flex justify-center items-center rounded-full bg-orange-600 p-5'>
							<ImageSearchIcon fontSize='large' />

						</div>
						<p className='text-xs lg:text-sm'>Data collection and analysis are crucial components of any ethical, quality, evidence-based practice.</p>

					</div>




				</div>
				<div className='border-4 rounded-t-2xl rounded-b-2xl lg:rounded-full p-4'>
					<div className="flex flex-col lg:flex-row gap-5">
						<div className='h-12 w-12  mx-auto flex justify-center items-center rounded-full bg-orange-600 p-5'>
							<ImageSearchIcon fontSize='large' />

						</div>
						<p className='text-xs lg:text-sm'>Data collection and analysis are crucial components of any ethical, quality, evidence-based practice.</p>

					</div>




				</div>

			</div>

			<div className='relative w-full pb-[56.25%] h-0'>
				<iframe className='absolute top-0 left-0 w-[70%] h-full lg:h-[40%] mr-[15%] ml-[15%]' width="560" height="315" src="https://www.youtube.com/embed/LMMF9Ka_bLQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</div>

		<div className=' border-2  border-l-8 border-r-8 border-red-600 h-full w-full rounded-bl-3xl rounded-br-3xl bg-blue-900 bg-opacity-70 mt-14 lg:mt-[-20%] '>
			<div className="text-center mt-14 mb-6">	<StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
			<h2 className='text-2xl font-semibold text-white text-center mb-6'>This means better therapy for your clients and better business for you.</h2>
			<p className='text-center text-white'><ThumbUpIcon />    Complete and consistent solution to assist you dealing with your practice, convey advanced treatment, and acquire new clients easily.</p>
			<div class="flex justify-center  space-x-2 mt-5 mb-10">
				<button
					type="button"
					class="inline-block px-6 py-2.5 rounded bg-orange-600 text-white font-medium text-sm leading-tight uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
				>
					<ArrowCircleRightIcon /> Connect Us For More Detail
				</button>
			</div>
		</div>

		<div className="flex flex-col lg:flex-row justify-evenly items-center gap-5 mt-14 p-2 lg:p-0">
			<div className='max-w-lg'>
				<p className='text-lg lg:text-2xl font-bold px-3 border-l-8 border-red-500 mb-5'>What You Can Accomplish With Therapy PMS</p>
				<p className='text-sm'>Therapy PMS gives every one of the tools you want to make your training effective. Utilize our basic, natural connection point to follow everything from arrangements to installments.</p>
				<div class="flex justify-center lg:justify-start space-x-2 mt-5">
					<button
						type="button"
						class="inline-block px-6 py-2.5 bg-orange-700 rounded text-white font-medium text-sm leading-tight uppercase  shadow-md"
					>
						<ArrowCircleRightIcon />	Learn More
					</button>
				</div>


			</div>
			<div>
				<div className="flex flex-col lg:flex-row  gap-5 mb-5 p-2 lg:p-0">
					<div className='border rounded-tr-3xl rounded-bl-3xl bg-blue-900 bg-opacity-70 px-20 py-10 p-5'>
						<div className='h-14 w-14 rounded-full bg-red-600 flex justify-center items-center hover:bg-white'>
							<ImageSearchIcon fontSize='large' />
						</div>
						<h1>Live Chat</h1>
					</div>
					<div className='border rounded-tl-3xl rounded-br-3xl bg-blue-900 bg-opacity-70 px-20 py-10 p-5'>
						<div className='h-14 w-14 rounded-full bg-red-600 flex justify-center items-center hover:bg-white'>
							<ImageSearchIcon fontSize='large' />
						</div>
						<h1>Live Chat</h1>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row gap-5 p-2 lg:p-0">
					<div className='border rounded-tl-3xl rounded-br-3xl bg-blue-900 bg-opacity-70 px-20 py-10 p-5'>
						<div className='h-14 w-14 rounded-full bg-red-600 flex justify-center items-center hover:bg-white'>
							<ImageSearchIcon fontSize='large' />
						</div>
						<h1>Live Chat</h1>
					</div>
					<div className='border rounded-tr-3xl rounded-bl-3xl bg-blue-900 bg-opacity-70 px-20 py-10 p-5'>
						<div className='h-14 w-14 rounded-full bg-red-600 flex justify-center items-center hover:bg-white'>
							<ImageSearchIcon fontSize='large' />
						</div>
						<h1>Live Chat</h1>
					</div>
				</div>
			</div>
		</div>



		<h1 className='text-2xl font-bold text-center  text-blue-900 text-opacity-70 mt-14'>Our Top Feature</h1>
		<hr className='h-[5px] mx-auto w-28 bg-red-700 lg:mt-5 lg:mb-5' />
		<p className='text-center mx-auto text-sm max-w-2xl'>TherapyPMS integrates your scheduling, billing, and reporting so that you save your precious time and help your bottom line. This is how it works:</p>

		<div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6  gap-2 mt-12 lg:mx-20 p-2 lg:p-0">
			{Service.map((x) => (
				<div className='border border-b-4 border-blue-900 border-opacity-70 rounded-lg p-2' key={x.id}>
					<div className='flex justify-center items-center'>
						<img src={x.ServiceImg} alt="" />
					</div>
					<h1 className='text-2xl font-bold text-center  text-blue-900 text-opacity-70 '>{x.ServiceTitle}</h1>
					<hr className='h-[5px] mx-auto w-28 bg-red-700 lg:mt-5 lg:mb-5' />
					<p className='text-justify'>{x.ServiceBody}</p>
				</div>
			))}


		</div>

		<div className='lg:mx-20 mt-14 p-2 lg:p-0 '>
			<p className='text-lg lg:text-2xl font-bold px-3 border-l-8 border-red-500 mb-5  text-blue-900 text-opacity-70'>Our Valuable Clients</p>


			<div className="flex flex-col lg:flex-row gap-5 p-2 ">
				<div className='border-2 p-4 py-10 flex justify-center items-center hover:bg-red-500'>
					<img src={Img1} alt="" />

				</div>
				<div className='border-2 p-4 py-10  hover:bg-red-500'>
					<img src={Img2} alt="" />

				</div>
				<div className='border-2 p-4 py-10  hover:bg-red-500'>
					<img src={Img3} alt="" />

				</div>
				<div className='border-2 p-4 py-10 flex justify-center items-center  hover:bg-red-500'>
					<img src={Img4} alt="" />

				</div>
			</div>
		</div>




		<div className='flex flex-col lg:flex-row justify-around bg-blue-900 bg-opacity-70 p-5 py-20 border-l-4 border-red-700 mt-24 mb-24 lg:mx-20  '>
			<div className='max-w-xl'>
				<h1 className='lg:text-2xl text-white font-bold mb-2'>
					Get Everything You Need</h1>
				<p className='text-white text-sm'>We have everything you need to run an efficient, profitable practice. We help you generate repeat business, increase customer conversions, and grow financially.</p>



			</div>
			<div>
				<div class="flex justify-center lg:justify-start space-x-2 mt-5">
					<button
						type="button"
						class="inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-sm leading-tight uppercase  shadow-md"
					>
						<ArrowCircleRightIcon />	Request For A Free Demo
					</button>
				</div>
			</div>
		</div>



		<div className='lg:mx-20 mt-14 p-2 lg:p-0 '>
			<p className='text-lg lg:text-2xl font-bold px-3 border-l-8 border-red-500 mb-5  text-blue-900 text-opacity-70'>Why Choose Therapy PMS</p>


			<div className="flex flex-col lg:flex-row gap-5 p-2 ">
				<div className='border-2 p-4 py-10 flex flex-col  justify-center items-center rounded'>
					<AlarmOnIcon sx={{ fontSize: 47 }} />

					<div className='text-center mt-3'><h1 className='text-xl font-bold text-blue-900 text-opacity-70 mb-2'>More Time Practicing</h1>
						<p className='text-sm'>Easily manage your business so you can spend more time with clients.</p>
					</div>


				</div>

				<div className='border-2 p-4 py-10 flex flex-col  justify-center items-center rounded'>
					<AlarmOnIcon sx={{ fontSize: 47 }} />

					<div className='text-center mt-3'><h1 className='text-xl font-bold text-blue-900 text-opacity-70 mb-2'>More Time Practicing</h1>
						<p className='text-sm'>Easily manage your business so you can spend more time with clients.</p>
					</div>


				</div>
				<div className='border-2 p-4 py-10 flex flex-col  justify-center items-center rounded'>
					<AlarmOnIcon sx={{ fontSize: 47 }} />

					<div className='text-center mt-3'><h1 className='text-xl font-bold text-blue-900 text-opacity-70 mb-2'>More Time Practicing</h1>
						<p className='text-sm'>Easily manage your business so you can spend more time with clients.</p>
					</div>


				</div>

			</div>
		</div>

		<div class=" flex justify-between gap-5  flex-col  lg:flex-row mt-14  lg:mt-28 lg:mx-20">
			<div className="max-w-lg   p-4 lg:p-0 lg:text-start">
				<div className='max-w-lg'>
					<p className='text-lg lg:text-2xl font-bold px-3 border-l-8 border-red-500 mb-5'>Try Therapy PMS Free For 30 Days</p>
					<p className='text-sm'>Start your trial. Invite your team. Join the thousands of care professionals using Therapy PMS to run their practice every day.</p>
					<div class="flex justify-center lg:justify-start space-x-2 mt-5">
						<button
							type="button"
							class="inline-block px-6 py-2.5 bg-orange-700 rounded text-white font-medium text-sm leading-tight uppercase  shadow-md"
						>
							<ArrowCircleRightIcon />	Contact Us
						</button>
					</div>


				</div>
			</div>

			<div className='relative w-full pb-[56.25%] h-0'>
				<iframe className='absolute top-0 left-0 w-[70%] h-full lg:h-[40%] mr-[15%] ml-[15%]' src="https://www.youtube.com/embed/LMMF9Ka_bLQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</div>

		<div className='mt-[-15%] lg:mt-[-20%]'>
			<h1 className='text-lg lg:text-2xl font-bold text-center  text-blue-900 text-opacity-70 mt-24 lg:mt-14'>Enhance Your Client Experience</h1>
			<hr className='h-[5px] mx-auto w-28 bg-red-700  mt-2 lg:mt-5 mb-2 lg:mb-5' />
			<p className='text-center mx-auto text-sm '>Create a welcoming client experience through online booking, secure messaging and online intake forms.
			</p>
		</div>
		<div class=" flex justify-evenly gap-5  flex-col  lg:flex-row mt-14  lg:mt-28 lg:mx-20">
			<div  className='w-full'>
				<img src={Optimiz} className='h-96 w-auto' alt="" />
			</div>

			<div className="flex flex-col gap-2 p-2 lg:p-0 w-full">

				<div className='border-2  p-4 shadow-lg rounded'>
					<div className="flex justify-between lg:flex-row ">
						<div >
							<ImageSearchIcon sx={{ fontSize: 40 }} />

						</div>
						<p className='text-xs lg:text-sm rounded-full flex items-center  px-6 bg-orange-600 text-white'>Data</p>

					</div>

					<h1 className='text-sm mt-4 font-medium text-blue-900 text-opacity-70'>Select Feature</h1>


				</div>
				<div className='border-2  p-4 shadow-lg rounded'>
					<div className="flex justify-between lg:flex-row ">
						<div >
							<ImageSearchIcon sx={{ fontSize: 40 }} />

						</div>
						<p className='text-xs lg:text-sm rounded-full flex items-center  px-6 bg-orange-600 text-white'>Data</p>

					</div>

					<h1 className='text-sm mt-4 font-medium text-blue-900 text-opacity-70'>Select Feature</h1>


				</div>
				<div className='border-2  p-4 shadow-lg rounded'>
					<div className="flex justify-between lg:flex-row ">
						<div >
							<ImageSearchIcon sx={{ fontSize: 40 }} />

						</div>
						<p className='text-xs lg:text-sm rounded-full flex items-center  px-6 bg-orange-600 text-white'>Data</p>

					</div>

					<h1 className='text-sm mt-4 font-medium text-blue-900 text-opacity-70'>Pay a balance with credit card using Stripe</h1>


				</div>

			</div>


		</div>

		{/**<div className='flex flex-col gap-5 mt-14'>


				<img src={Optimiz} className='h-96 w-96' alt="" />

			<div>
				<div className="border p-5">
					<div className="flex lg:gap-[400px] mb-2 ">
						<MailOutlineIcon sx={{ fontSize: 40 }} />
						<button className='border text-sm  rounded-full p-2   bg-red-500'>client portal</button>
					</div>
					<h1 className='text-xl font-medium text-blue-900 text-opacity-70'>Secure Messaging</h1>
				</div>





			</div>

		</div> */}

		<h1 className='text-lg lg:text-2xl font-bold text-center  text-blue-900 text-opacity-70 mt-24 lg:mt-14'>Get In Touch With Us</h1>
		<hr className='h-[5px] mx-auto w-28 bg-red-700  mt-2 lg:mt-5 mb-2 lg:mb-5' />
		<div className="flex flex-col lg:flex-row gap-5">

			<div className='w-full'>
				<img src={Bg2} alt="" />
			</div>
			<div className='border rounded-lg shadow-2xl p-5 w-full'>
				<div className="  ">
					<form>

						{/*-- Email input-- */}
						<div className="mb-6 ">
							<label htmlFor="">Name*</label>
							<input
								type="text"
								className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
								id="exampleFormControlInput2"
								placeholder="Username"
							/>
						</div>
						<div className="mb-6 ">
							<label htmlFor="">Email*</label>
							<input
								type="text"
								className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
								id="exampleFormControlInput2"
								placeholder="Username"
							/>
						</div>
						<div className="mb-6 ">
							<label htmlFor="">Company Name</label>
							<input
								type="text"
								className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
								id="exampleFormControlInput2"
								placeholder="Username"
							/>
						</div>
						<div className="mb-6 ">
							<label htmlFor="">Website Url</label>
							<input
								type="text"
								className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
								id="exampleFormControlInput2"
								placeholder="Username"
							/>
						</div>
						<div className="mb-6 ">
							<label htmlFor="">Phone*</label>
							<input
								type="text"
								className="form-control block w-full px-4 py-2 text-lg  text-gray-700 bg-white bg-clip-padding border border-gray-700  rounded-lg focus:outline-none"
								id="exampleFormControlInput2"
								placeholder="Username"
							/>
						</div>
						<div className="mb-6 ">
							<label htmlFor="">Common Message</label>
							<textarea
								class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
								id="exampleFormControlTextarea1"
								rows="3"
								placeholder="Your message"
							></textarea>
						</div>


						{/* Submit button */}
						<div className="flex  justify-center mb-6">
							<button
								type="button"
								className="inline-block px-9 py-2 w-full bg-orange-700 text-white font-medium   rounded shadow-md "
							>
								SUBMIT
							</button>
						</div>

						{/* 2 column grid layout for inline styling */}

					</form>
				</div>
			</div>


		</div>









	</div>;

}

export default Home;
