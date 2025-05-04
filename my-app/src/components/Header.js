import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userslice";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NewAIIcon from "./NewAiIcon";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse")
      } else {
        // User is logged out -> Remove from Redux
        dispatch(removeUser());

        //  If the user is on "/signup", stay there. Otherwise, go to "/"
        if (location.pathname !== "/signup" && location.pathname!=="/next") {
          navigate("/");
        }
      }
    });

    return () => unsubscribe();
  }, []); // ✅ Depend on `location.pathname` to prevent unnecessary re-renders

  return (
    <div className="absolute z-10 flex">
     <NewAIIcon className='  ml-5  mt-2'/>
          <h2 className='text-white font-bold ml-1 mt-5'>WatchWise</h2>
    </div>
  );
};

export default Header;
