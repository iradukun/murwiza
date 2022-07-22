import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
    return (
        <div className="text-white bg-cgreen-200 ">
            <div className="max-w-[62.5rem] w-full m-auto flex items-center justify-between gap-4 pt-5 pb-4">
                <div className="Left">
                    <Link to={"/"} className="text-3xl font-bold">
                        Logo
                    </Link>
                    <div className="links flex items-center gap-2">
                        <Link to={"/accomodation"} className="">
                            Accomodations
                        </Link>
                        <Link to={"/restaurants"}>Restaurants</Link>
                        <Link to={"/transport"}>Transport</Link>
                    </div>
                </div>
                <div className="Right flex flex-row items-center gap-2">
                    <div className="country rounded-full h-10 w-10 bg-cgreen-300 border border-white"></div>

                    <Link to={"/assets"}>
                        <Button
                            outlined={true}
                            filled={false}
                            color="red-200"
                            background="cgreen-200"
                            rounded={true}>
                            List your asset
                        </Button>
                    </Link>
                    <Link to={"/assets"}>
                        <Button
                            outlined={true}
                            filled={false}
                            color="red-200"
                            background="cgreen-200"
                            rounded={true}>
                            Register
                        </Button>
                    </Link>
                    <Link to={"/assets"}>
                        <Button
                            outlined={true}
                            filled={false}
                            color="red-200"
                            background="cgreen-200"
                            rounded={true}>
                            Login
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
