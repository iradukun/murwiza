import { useEffect, useState } from "react";
import Head from "../components/Head";
import Navbar from "../components/Navbar";
import Testimonials from "../components/homepage/Testimonials";
import TopDestinations from "../components/homepage/TopDestinations";
import Accomodation from "../components/homepage/Accomodation";

export type  photo  = {
    url: string;
    caption: string;
}

const Homepage = () => {
    const [photos, setPhotos] = useState<photo[]>([]);
    useEffect(() => {
        let controller: AbortController = new AbortController();
        (async function () {
            /* This will be used once the backend is available */
            // let { data } = await axios.get("http://someuri.com/search?q=places", {
            //     signal: controller.signal,
            // });
            // if (data.code === "#Success") {
            //     setPhotos(data.data.photos);
            // }
            let data: photo[] = new Array(9)
                .fill({})
                .map((x: object, i: number) => {
                    return {
                        ...x,
                        caption: `picture${i}`,
                        url: `https://picsum.photos/500/500?random=${i}`,
                    };
                });
            setPhotos(data)
        })();
        return () => {
            controller.abort();
        };
    }, []);

    return (
        <div className="">
            <Navbar />
            <Head>
                <h2 className="text-3xl font-black">
                    Searching for an accomodation?
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor quae ipsum repudiandae deserunt ratione laboriosam sit
                    nam hic sunt modi.
                </p>
                <div className="Search shadow-md hover:shadow-lg max-w-[50rem] m-auto w-full border-2 border-cgreen-300 rounded-lg flex items-center translate-y-[50%] h-fit overflow-hidden bg-cgreen-300">
                    <input
                        type="text"
                        placeholder={`Try "accommodations in Kigali"`}
                        className="py-4 px-3 flex-grow outline-none text-cgreen-200"
                    />
                    <button className="h-full bg-cgreen-300 py-4 px-8">
                        Search
                    </button>
                </div>
            </Head>
            <div className="main pt-12 max-w-[1000px] w-[62.5rem] m-auto px-2 pb-20">
                <Accomodation photos={photos}/>
                <Testimonials />
                <TopDestinations photos={photos}/>
                <div className="Partners text-black mt-14">
                    <h1 className="font-bold text-2xl mb-4 text-center">Partners</h1>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
