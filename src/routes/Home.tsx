import Header from "../components/Header";

const Home = () : JSX.Element => {
    return (
        <div>
            <Header/>
            <main className="w-full h-screen bg-yellow-300 flex justify-center items-center flex-col font-mono">
                <p className="2xl:text-9xl sm:text-7xl font-bold tracking-widest 2xl:m-4 sm:m-8">Welcome to CatHub</p>
                <p className="2xl:text-7xl sm:text-5xl font-bold tracking-wide 2xl:m-4 sm:m-8">Your Ultimate Feline Haven</p>
                <p className="2xl:w-[40%] sm:w-[55%] 2xl:leading-relaxed sm:leading-loose 2xl:text-3xl sm:text-4xl text-center 2xl:m-4 sm:m-8">Are you a devoted cat lover, searching for the perfect online sanctuary to indulge in your passion for all things feline? Look no further! CatHub is here to whisk you away into a world where cats reign supreme and cat enthusiasts unite.</p>
            </main>
            <main className="w-full h-screen bg-yellow-300 flex justify-center items-center flex-col font-mono">
                <div className="w-3/4 h-2/3 bg-white rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60">
                    <div className="w-1/2 h-full float-left flex items-center justify-center">
                        <img src="src/assets/hello.jpg" className="object-contain"/>
                    </div>
                    <div className="w-1/2 h-full relative float-left flex justify-center flex-col pl-[5%] pr-[5%]">
                        <p className="text-3xl font-bold absolute top-[10%] right-[25%]">Create Custom Cat Image</p>
                        <p className="text-justify text-3xl ml-[-0.25rem] mt-2 mb-2">Text: </p>
                        <input type="text" value="hello" className="w-full bg-transparent border-b-black border-b-4 pointer-events-none text-2xl"/>
                        <p className="text-justify text-3xl ml-[-0.25rem] mt-6 mb-2">Tags: </p>
                        <input type="text" value="None" className="w-full bg-transparent border-b-black border-b-4 pointer-events-none text-2xl"/>
                        <button className="w-1/2 h-[4rem] bg-yellow-300 self-center mb-[-10%] mt-12 rounded-full text-2xl" disabled>Generate Image</button>
                    </div>
                </div>
            </main>
            <footer className="w-full h-20 bg-yellow-400 flex justify-center items-center">
                    <p className="text-2xl font-bold">CatHub&copy; 2023</p>
            </footer>
        </div>
    )
};

export default Home;