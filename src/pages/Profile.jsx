import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "../components/smallComp/Spinner";
import { Link, useNavigate } from "react-router-dom";
import { LucideGithub, LucideLinkedin, LucideTwitter } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { logout } = useAuth0();
  if (!isAuthenticated) {
    navigate("/login"); //redirect to login page if not authenticated.
  }

  // console.log(user)

  return (
    <div className="grids-section-width flex flex-col justify-center items-center min-h-[63vh]">
      {isLoading ? (
        <Spinner />
      ) : isAuthenticated ? (
        <>
          <Card className=" w-64 mx-auto max-w-md py-6 px-2 rounded-xl shadow-lg dark:shadow-white/10 bg-white dark:bg-zinc-900">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="h-24 w-24">
                <AvatarImage alt={user.name} src={user.picture} />
                <AvatarFallback>
                  {user.name.substring(0, 2).toLocaleUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h2 className="font-bold font-markazi-text text-4xl tracking-wide">
                  {user.name.substring(0, 10)}
                </h2>
                <h3 className="text-gray-400 hover:text-gray-500 transition-all duration-200">
                  {user.email}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 w-full">
                  Full Stack Developer at {user.website ? user.website : "XYZ"}{" "}
                  Corp.
                </p>
              </div>
              <div className="flex space-x-4">
                <Link to="#">
                  <LucideTwitter />
                </Link>
                <Link href="#">
                  <LucideLinkedin />
                </Link>
                <Link href="#">
                  <LucideGithub />
                </Link>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Joined in {new Date(user.updated_at).toLocaleDateString()}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {user.address ? user.address : "Based in San Francisco, CA"}
                </p>
              </div>
            </div>
          </Card>
          <Button
            variant="outline"
            className="w-64 mt-4 shadow-lg bg-white dark:bg-zinc-900 dark:shadow-white/10"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </Button>
        </>
      ) : null}
    </div>
  );
};

export default Profile;
