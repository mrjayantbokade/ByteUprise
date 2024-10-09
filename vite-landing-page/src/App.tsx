import './App.css'
import { useState } from 'react'
// import {handleMenu} from "./lib/homePageFunctions/HandleMenu";
import { FontAwesomeIcon, Particles, Dock, DockIcon } from './lib/helpingfile'
import { BorderBeam } from './components/ui/border-beam'
// import { BeakerIcon, HomeIcon, PlusCircleIcon, XMarkIcon, ArrowRightOnRectangleIcon, UserIcon, PencilIcon, MagnifyingGlassIcon, Bars3Icon, ArrowLeftOnRectangleIcon, UserPlusIcon, MinusCircleIcon, MagnifyingGlassPlusIcon,  } from '@heroicons/react/24/outline'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import WordRotate from './components/ui/word-rotate'

const App = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}
	return (
		<>
			<div className={``}>
				<Particles
					className="absolute inset-0 -z-10 animate-fade-in bg-black "
					quantity={60}
					staticity={1000}
					color="#fff"
				/>
				<nav
					className="px-6 py-5 lg:py-3  flex bg-transparent  justify-between items-center "
					id="nav-bar"
				>
					<a
						href="/"
						id="brand-logo"
						className="flex flex-row justify-center items-center gap-2"
					>
						{/* <img className=" w-[50px] h-[40px] " src={byteUpRiseLogo} alt=""/> */}

						<span
							id="brand"
							className=" relative font-font3 font-bold text-3xl z-10  text-violet-500 "
						>
							<span
								id="brand"
								className="hidden lg:block absolute font-font3 font-bold text-3xl  text-violet-300 z-0 filter blur-[4px] "
							>
								ByteUprise
							</span>
							<span
								id="brand"
								className=" lg:hidden absolute font-font3 font-bold text-3xl  text-violet-300 z-0 filter blur-[5px] "
							>
								ByteUprise
							</span>
							ByteUprise
						</span>
					</a>

					<div
						id="navbar-options"
						className=" hidden  lg:flex   lg:gap-x-16 justify-between text-sm font-medium font-font1 text-gray-100"
					>
						<a
							href="/community"
							id="community"
							className={`text-violet-200 hover:text-white cursor-pointer`}
						>
							Gallery
						</a>
						<a
							href="/community"
							id="community"
							className={`text-violet-200 hover:text-violet-300 cursor-pointer`}
						>
							Domains
						</a>
						<a
							href="/community"
							id="community"
							className={`text-violet-200 hover:text-white cursor-pointer`}
						>
							About
						</a>
						<a
							href="/community"
							id="community"
							className={`text-violet-200 hover:text-white cursor-pointer`}
						>
							Explore Internships
						</a>
					</div>

					<a
						id="getStarted"
						href="/getStarted"
						className="hidden  lg:flex lg:flex-row md:gap-2  items-center gap-10 text-gray-300 rounded-md text-md font-medium shadow-sm border border-violet-200  font-font1  hover:border-violet-400     transition ` py-1.5 px-4"
					>
						<p>Get Started</p>
						<FontAwesomeIcon
							className="text-violet-200 text-md"
							icon="fa-solid fa-arrow-right"
						/>
					</a>

					<button
						id="mobile-menu"
						className={`lg:hidden text-gray-800 text-xl p-2 `}
						onClick={handleMenu}
					>
						{/* <FontAwesomeIcon className="text-lg" icon="fa-solid fa-bars"/> */}
					</button>

					{/*/!*incomplete functionality*!/*/}
					{/*/!*${isMenuOpen ? 'block' : 'hidden'*!/*/}
					<div
						className={`fixed   bg-transparent px-6 py-5 inset-0 z-50 ${
							isMenuOpen ? 'block' : 'hidden'
						} lg:hidden`}
					>
						<div
							id="navbar-mobile"
							className={`flex   justify-between`}
						>
							<a
								href="/"
								id="brand-logo"
								className="flex items-center gap-2"
							>
								{/* <img className=" w-[50px] h-[40px] " src={student2developer} alt=""/> */}

								<span
									id="brand"
									className="  font-font3 font-medium text-xl  text-blackboot "
								>
									Student2Developer
								</span>
							</a>
							<button
								id="mobile-menu"
								className={`lg:hidden text-gray-800 text-xl p-2 `}
								onClick={handleMenu}
							>
								<FontAwesomeIcon
									className="text-lg"
									icon="fa-solid fa-xmark"
								/>
							</button>
						</div>

						<div id="menu-options" className={`flex flex-col mt-5`}>
							<a
								href="/task"
								id="task"
								className="font-medium m-3 p-3  rounded-md hover:bg-gray-50/50   cursor-pointer"
							>
								Task
							</a>
							<a
								href="/community"
								id="community"
								className="font-medium m-3 p-3  rounded-md hover:bg-gray-50/50  cursor-pointer"
							>
								Community
							</a>
							<a
								href="/products"
								id="products"
								className="font-medium m-3 p-3  rounded-md hover:bg-gray-50/50  cursor-pointer"
							>
								Products
							</a>
							<a
								href="/login"
								id="login"
								className="font-medium m-3 p-3  rounded-md hover:bg-gray-50/50  cursor-pointer"
							>
								Login
							</a>
							<a
								href="/miniprojects"
								id="miniprojects"
								className="font-medium m-3 p-3  rounded-md hover:bg-gray-50/50  cursor-pointer"
							>
								Mini Projects
							</a>
							<a
								href="/majorprojects"
								id="majorprojects"
								className="font-medium m-3 p-3  rounded-md hover:bg-gray-50/50  cursor-pointer"
							>
								Major Projects
							</a>
							<a
								href="/Certifications"
								id="Certifications"
								className="font-medium m-3 p-3  rounded-md hover:bg-gray-50/50  cursor-pointer"
							>
								Certifications
							</a>
						</div>

						<button
							id="getStarted"
							className=" font-medium m-3 p-3 w-full mr-12  gap-2 rounded-md hover:bg-gray-50   cursor-pointer flex flex-row   items-center  text-gray-950 rounded-md text-md font-medium shadow-sm   font-font1  hover:border-fuchsia-500 transition  "
						>
							<p>Get Started</p>
							{/* <FontAwesomeIcon className="text-gray-400 text-md" icon="fa-solid fa-arrow-right"/> */}
						</button>
					</div>
				</nav>

				{/* Dock Component */}
				<Dock
					className="fixed z-50 bottom-9 left-1/2 transform -translate-x-1/2 bg-transparent pt-10 rounded-2xl flex items-center justify-center border border-white/10 opacity-90"
					magnification={100}
					distance={140}
					direction="bottom"
				>
					{/* Dock Icons */}
					<DockIcon size={10} className="mx-2">
						<a href="/">
							<FontAwesomeIcon
								className="size-10 *:text-white"
								icon="fa-solid fa-home"
							/>
						</a>
					</DockIcon>
					<DockIcon size={50} className="mx-2">
						<a href="/search">
							<FontAwesomeIcon
								className="size-10 *:text-white"
								icon="fa-solid fa-magnifying-glass"
							/>
						</a>
					</DockIcon>
					<DockIcon size={50} className="mx-2">
						<a href="/twitter">
							<FontAwesomeIcon
								className="size-10 *:text-white"
								icon="fa-brands fa-twitter"
							/>
						</a>
					</DockIcon>
					<DockIcon size={50} className="mx-2">
						<a href="/linkedin">
							<FontAwesomeIcon
								className="size-10 *:text-white"
								icon="fa-brands fa-linkedin-in"
							/>
						</a>
					</DockIcon>
					<DockIcon size={50} className="mx-2">
						<a href="/whatsapp">
							<FontAwesomeIcon
								className="size-10 *:text-white"
								icon="fa-brands fa-whatsapp"
							/>
						</a>
					</DockIcon>
					{/* Add more DockIcons as needed */}
				</Dock>

				<div className="w-[500px] h-[500px] z-0 scale-150  justify-center items-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 fixed  -bottom-64 left-1/2 transform -translate-x-1/2    blur-[101px]"></div>
			</div>

			<div className={` px-6 sm:flex sm:flex-col`}>
				{/*    <div id="hero-section" className={`  lg:px-8 pt-8*/}
				{/*sm:pt-14   h-screen   lg:justify-center lg:mx-auto lg:max-w-3xl`}>*/}
				<div
					id="hero-section"
					className={`mx-auto max-w-4xl pt-8 pb-32 sm:pt-14 sm:pb-15 sm:flex sm:flex-col sm:items-center`}
				>
					{/*<button id="task-of-the-day"*/}
					{/*        className={`group hover:-translate-y-0.5 hover:transition hover:ease-in-out hover:duration-200 shadow-sm hover:shadow-lg hover:shadow-yellow-700/10  cursor-pointer px-4 py-1 mb-8 rounded-lg border border-yellow-200 hover:border-yellow-600/40 flex flex-row gap-2 justify-center items-center bg-yellow-100/60 text-yellow-900 font-medium `}>*/}
					{/*    <div className={`h-2 w-2 rounded-full bg-yellow-400 border border-yellow-500`}></div>*/}
					{/*    <p className={`items-center`} id="task-of-the-day">*/}
					{/*        Task of the Day*/}
					{/*    </p>*/}
					{/*    <FontAwesomeIcon*/}
					{/*        className={`text-yellow-500 group-hover:text-yellow-600 group-hover:translate-x-1 group-hover:transition group-hover:ease-in-out group-hover:duration-700  text-md items-center`}*/}
					{/*        icon="fa-solid fa-arrow-right"/>*/}
					{/*</button>*/}

					<button
						id="apply-now-button"
						className={`group w-fit hover:-translate-y-0.5 hover:transition hover:ease-in hover:ease-out duration-300 shadow-sm hover:shadow-lg hover:shadow-violet-50/20 cursor-pointer px-4 py-1 mb-8 rounded-lg border border-violet-100 hover:border-violet-50/40 flex flex-row gap-2 justify-center items-center bg-gradient-to-br from-violet-500 to-fuchsia-500 text-red-900 font-medium `}
					>

						<div
							className={`h-2 w-2 rounded-full bg-violet-400 border border-violet-50`}
						></div>
						<p className={`items-center text-violet-100 items-center` } id="task-of-the-day">
							Apply Now
						</p>
						<FontAwesomeIcon
							className={`text-violet-50 group-hover:text-violet-100 group-hover:translate-x-1 group-hover:transition group-hover:ease-in group-hover:ease-out duration-700  text-md items-center`}
							icon="fa-solid fa-arrow-right"
						/>
					</button>

					<div
						id="hero-headline"
						className={`font-font1 text-5xl text-violet-50 font-semibold sm:text-center sm:text-7xl sm:mt-16 mb-8 lg:mb-18`}
					>
                        we welcome <WordRotate
							className={`text-white lg:text-8xl  pb-2 font-semibold`}
							words={['Designers', 'Analyst', 'Developers']}
						/>
					</div>
					<div
						id="hero-subheadline"
						className={` z-50 font-font2 text-xl leading-8 text-white sm:text-2xl sm:text-center `}
					>
                        						One Byte at a  time!


					</div>


				</div>
			</div>
			{/* <div>
				<div className="relative   rounded-xl">
					<h1
						className={`text-sm max-w-3/4 text-center bg-black text-white `}
					>
						<WordRotate
							className={`text-white font-semibold`}
							words={['Designers', 'Analyst', 'Developers']}
						/>
					</h1>
				</div>
			</div> */}
		</>
	)
}

export default App
