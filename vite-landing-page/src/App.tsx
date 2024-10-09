import './App.css'
import { useState } from 'react'
// import {handleMenu} from "./lib/homePageFunctions/HandleMenu";
import { FontAwesomeIcon, Particles, Dock, DockIcon } from './lib/helpingfile'

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
							className="  font-font3 font-bold text-2xl  text-violet-600"
						>
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
							Internships
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
							className=" font-medium m-3 p-3 w-full mr-12  gap-2 rounded-md hover:bg-gray-50   cursor-pointer flex flex-row   items-center  text-gray-950 rounded-md text-md font-medium shadow-sm   font-font1  hover:border-gray-400 transition  "
						>
							<p>Get Started</p>
							{/* <FontAwesomeIcon className="text-gray-400 text-md" icon="fa-solid fa-arrow-right"/> */}
						</button>
					</div>
				</nav>

				{/* Dock Component */}
				<Dock
					className="fixed z-50 bottom-9 left-1/2 transform -translate-x-1/2 bg-transparent pt-10 rounded-2xl flex items-center justify-center border border-gray-400/10"
					magnification={100}
					distance={140}
					direction="bottom"
				>
					{/* Dock Icons */}
					<DockIcon size={10} className="mx-2">
						<a href="/home">
							<FontAwesomeIcon
								icon="fa-solid fa-home"
								className="text-white text-2xl opacity-60"
							/>
						</a>
					</DockIcon>
					<DockIcon size={50} className="mx-2">
						<a href="/gallery">
							<FontAwesomeIcon
								icon="fa-solid fa-user"
								className="text-white text-2xl opacity-60"
							/>
						</a>
					</DockIcon>
					<DockIcon size={50} className="mx-2">
						<a href="/domains">
							<FontAwesomeIcon
								icon="fa-solid fa-user"
								className="text-white text-2xl opacity-60"
							/>
						</a>
					</DockIcon>
					<DockIcon size={50} className="mx-2">
						<a href="/about">
							<FontAwesomeIcon
								icon="fa-solid fa-user"
								className="text-white text-2xl opacity-60"
							/>
						</a>
					</DockIcon>
					<DockIcon size={50} className="mx-2">
						<a href="/internships">
							<FontAwesomeIcon
								icon="fa-solid fa-cloud-arrow-down"
								className="text-white text-2xl opacity-60"
							/>
						</a>
					</DockIcon>
					{/* Add more DockIcons as needed */}
				</Dock>

				<div className="w-[500px] h-[500px] z-0 scale-50 justify-center items-center rounded-full bg-violet-600 fixed  -bottom-64 left-1/2 transform -translate-x-1/2    blur-[101px]"></div>
			</div>

			<div className="w-full h-32 flex justify-center items-center">
				<div className="text-white max-w-2xl  text-center">
					hello again
				</div>
			</div>
		</>
	)
}

export default App
