import { photo } from "../../pages/Homepage";

interface props{
    photos: photo[]
}

const TopDestinations = ({photos = []}: Partial<props>) => {
    return (
        <div className="TopDestinations text-black mt-14">
            <h1 className="font-bold text-2xl mb-4">Top Destinations</h1>
            <div className="grid grid-cols-3 gap-4">
                {photos.map((photo: photo, i: number) => {
                    return (
                        <div className="relative">
                            <img
                                src={photo.url}
                                alt={photo.caption}
                                className="h-48 w-[20rem] object-cover"
                            />
                            <div className="absolute bottom-0 left-0 h-full w-full flex flex-col justify-end z-[2] bg-[#0000005c] p-3">
                                <span className="text-white font-bold block">{`John Doe`}</span>
                                <span className="text-white font-bold block">{`Easy Description`}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TopDestinations;
