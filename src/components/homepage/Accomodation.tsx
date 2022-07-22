import { photo } from "../../pages/Homepage";

interface props{
    photos: photo[]
}


const Accomodation = ({photos = []}: Partial<props>) => {
    return (
        <>
            <div className="Accomodations mb-3">
                <h2 className="text-black text-2xl font-black mb-2">
                    Accommodations
                </h2>
                {["Place one", "Place two"].map(
                    (place: string, index: number) => {
                        return (
                            <div className="photos mb-5">
                                <div className="flex flex-row items-center justify-between gap-3">
                                    {photos
                                        .slice(index + 1, index + 4)
                                        .reverse()
                                        .map((x: Partial<photo>, i: number) => {
                                            return (
                                                <img
                                                    key={i}
                                                    src={x.url}
                                                    alt={x.caption || "a photo"}
                                                    className="h-48 w-[33%] object-cover cursor-pointer rounded-sm"
                                                />
                                            );
                                        })}
                                </div>

                                <h3 className="text-lg font-bold text-[#8A8A8A]">
                                    {place}
                                </h3>
                                <p className="text-[#8A8A8A] text-sm -mt-1">
                                    Nbr of interests
                                </p>
                            </div>
                        );
                    }
                )}
            </div>
            <div className="SearchByMaterial">
                <h2 className="text-black text-2xl font-black mb-2">
                    Search by material
                </h2>
                {["Place three"].map((place: string, index: number) => {
                    return (
                        <div className="photos mb-5">
                            <div className="flex flex-row items-center justify-between gap-3">
                                {photos
                                    .slice(index + 1, index + 4)
                                    .reverse()
                                    .map((x: Partial<photo>, i: number) => {
                                        return (
                                            <img
                                                key={i}
                                                src={x.url}
                                                alt={x.caption || "a photo"}
                                                className="h-48 w-[33%] object-cover cursor-pointer rounded-sm"
                                            />
                                        );
                                    })}
                            </div>

                            <h3 className="text-lg font-bold text-[#8A8A8A]">
                                {place}
                            </h3>
                            <p className="text-[#8A8A8A] text-sm -mt-1">
                                Nbr of interests
                            </p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Accomodation;
