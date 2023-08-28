import { useState, useEffect } from "react"
import Header from "../components/Header";
import CatImgContainer from "../components/CatImgContainer";

interface CatList {
    id: string;
    tags: string[];
}

const Gallery = () : JSX.Element => {
    const [catList, setCatList] = useState<CatList[]>([]);
    const [page, setPage] = useState<number>(5);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://cataas.com/api/cats?limit=${page}`);
            const data = await response.json();
            const dataToSet = data.map((cat: any) => ({
                id: cat._id,
                tags: cat.tags
            }));
            setCatList(dataToSet)
            setIsLoading(false);
        } catch(error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [page]);

    useEffect(() => {

        const checkPosition = () => {
            if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight-1) {
                setPage((prev) => prev+5);
            }
        }

        window.addEventListener("scroll" ,  checkPosition);

        return () => window.removeEventListener("scroll", checkPosition);
    }, []);
    
    if(isLoading) {
        return (
            <>
                <Header/>
                <div className="bg-yellow-300 p-8 min-h-[88.4vh] flex items-center justify-center">
                    <p className="text-4xl font-mono font-bold">Loading...</p>
                </div>
            </>
        )
    }

    return (
        <>
            <Header/>
            <div className="bg-yellow-300 grid 2xl:grid-cols-3 2xl:gap-4 sm:grid-cols-2 sm:gap-6 p-8">
            {
                catList.map( cat => (
                    <CatImgContainer id={cat.id} tags={cat.tags}/>
                ))
            }
            </div>
        </>
    )
}

export default Gallery;