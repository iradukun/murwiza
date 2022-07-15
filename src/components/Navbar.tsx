import { Link } from "react-router-dom"

const Navbar  = () =>  {
  return (
    <div className="text-white bg-cgreen-200">
        <div className="Left">
            <Link to={'/'}>Logo</Link>
            <div className="links flex items-center">
                <Link to={'/accomodation'}>Accomodations</Link>
                <Link to={'/restaurants'}>Restaurants</Link>
                <Link to={'/transport'}>Transport</Link>
            </div>
        </div>
        <div className="Right">

        </div>

    </div>
  )
}

export default Navbar