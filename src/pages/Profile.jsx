import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "../components/smallComp/Spinner";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate() 
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { logout } = useAuth0();
  if (!isAuthenticated) {
    navigate("/login")  //redirect to login page if not authenticated.  
  }

  return (
    <div className="grids-section-width flex flex-col justify-center items-center min-h-[63vh]">
      {isLoading ? (
        Spinner
      ) : isAuthenticated ? (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ) : null}
      <Button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </Button>
    </div>
  );
};

export default Profile;
