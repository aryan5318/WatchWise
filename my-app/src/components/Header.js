import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userslice";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Correct way to get the current route
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // ✅ User is logged in -> Store in Redux
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse")
      } else {
        // ✅ User is logged out -> Remove from Redux
        dispatch(removeUser());

        // ✅ If the user is on "/signup", stay there. Otherwise, go to "/"
        if (location.pathname !== "/signup" && location.pathname!=="/next") {
          navigate("/");
        }
      }
    });

    return () => unsubscribe();
  }, []); // ✅ Depend on `location.pathname` to prevent unnecessary re-renders

  return (
    <div className="absolute z-10">
      <img
        className="w-48 mt-2 ml-36"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
    </div>
  );
};

export default Header;
