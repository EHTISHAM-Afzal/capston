import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "../components/smallComp/Spinner";
import { Link, useNavigate } from "react-router-dom";

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
          <Card className=" w-64 mx-auto max-w-md p-6 rounded-xl shadow-lg bg-white dark:bg-zinc-900">
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
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Full Stack Developer at {user.website ? user.website : "XYZ"}{" "}
                  Corp.
                </p>
              </div>
              <div className="flex space-x-4">
                <Link to="#">
                  <svg
                    className=" h-6 w-6 text-zinc-600 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-100"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link href="#">
                  <svg
                    className=" h-6 w-6 text-zinc-600 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-100"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect height="12" width="4" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
                <Link href="#">
                  <svg
                    className=" h-6 w-6 text-zinc-600 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-100"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
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
            className="w-64 mt-4 shadow-lg bg-white dark:bg-zinc-900"
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
