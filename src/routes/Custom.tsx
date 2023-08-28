import Header from "../components/Header"
import { useState} from "react"

const Custom = () : JSX.Element => {
    const [imgText, setImgText] = useState<String>("");
    const [imgTags, setImgTags] = useState<String>("");
    const [imgId, setImgId] = useState<String>("");
    const [showCustomImg, setShowCustomImg] = useState<boolean>(false);
    const [imgUrl, setImgUrl] = useState<String>("");

    const handleClick = () => {
        setShowCustomImg(true)
        handleChangeUrl()
    }

    const handleChangeUrl = () => {
        setImgUrl(`https://cataas.com/cat${imgId !== "" ? "/" + imgId : ""}${(imgTags !== "" && imgId === "") ? "/" + imgTags : '' }${imgText !== "" ? '/says/' + imgText : ''}?size=${Math.floor(Math.random()*400)}`);
    }
    return (
            <div className="w-full h-[100vh] bg-yellow-300">
                <Header/>    
                <div className="w-full h-[80%] flex justify-center items-center">
                    <div className="w-3/4 h-3/4 bg-white rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 p-[2%]">
                        <div className="w-1/2 h-full flex justify-center items-center float-left">
                            {
                                showCustomImg ? <img src={`${imgUrl}`} className="w-[100%] h-[100%] object-contain"/> : <div className="w-[100%] h-[100%] border-2 border-black"/>
                            }
                        </div>
                        <div className="w-1/2 h-full relative float-left flex justify-center flex-col pl-[5%] pr-[5%]">
                            <p className="text-3xl font-bold absolute top-[0%] right-[20%]">Create Custom Cat Image</p>
                            <p className="text-justify text-3xl ml-[-0.25rem] mt-2 mb-2">Text: </p>
                            <input type="text" value={`${imgText}`} onChange={(e) => setImgText(e.target.value)} placeholder="hello" className="w-full bg-transparent border-b-black border-b-4 text-2xl focus:outline-none"/>
                            <p className="text-justify text-3xl ml-[-0.25rem] mt-6 mb-2">Tag: </p>
                            <input type="text" value={`${imgTags}`} onChange={(e) => setImgTags(e.target.value)} placeholder="cute" className="w-full bg-transparent border-b-black border-b-4 text-2xl focus:outline-none"/>
                            <p className="text-justify text-3xl ml-[-0.25rem] mt-6 mb-2">ID: </p>
                            <input type="text" value={`${imgId}`} onChange={(e) => setImgId(e.target.value)} placeholder="Example ID" className="w-full bg-transparent border-b-black border-b-4 text-2xl focus:outline-none"/>
                            <button className="w-1/2 h-[4rem] bg-yellow-300 self-center mb-[-10%] mt-12 rounded-xl text-2xl border-b-[6px] border-yellow-300 border-b-yellow-200 active:border-b-[0px]" onClick={handleClick}>Generate Image</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Custom