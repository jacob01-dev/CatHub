import { FC } from "react";
import { useState } from "react";

interface CatProps{
    id: string;
    tags: string[];
}

const CatImgContainer: FC<CatProps> = ({ id, tags }) : JSX.Element => {    
    const [showImageInfo, setShowImageInfo] = useState<boolean>(false);

    return (
        <div className="relative">
            <img src={`https://cataas.com/cat/${id}`} className="w-full h-auto" onMouseEnter={() => setShowImageInfo(true)} onMouseLeave={() => setShowImageInfo(false)}/>
            {
                showImageInfo&& (
                    <div className="w-full min-h-[5%] p-[1%] absolute top-0 bg-yellow-200 flex items-center overflow-hidden" onMouseEnter={() => setShowImageInfo(true)} onMouseLeave={() => setShowImageInfo(false)}>
                        <span className="left">Tags: </span>
                            <span className="left break-words w-2/3">
                                {
                                    tags.map( tag => (
                                        <span className="">{`${tag} `}</span>
                                    ))
                                }
                            </span>
                            <span className="w-1/2 flex justify-center items-center">ID: {id}</span>
                    </div>
                )
            }
        </div>
    )
};

export default CatImgContainer;