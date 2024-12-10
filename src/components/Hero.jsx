import Avatar from "./Avatar";
import { useEffect, useState } from "react";

function Hero() {
  const [username, setUsername] = useState("User  "); // Default username

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setUsername(email);
    }
  }, []);
  return (
    <section className="w-full px-16 mt-12">
      <div className="flex items-center justify-center">
        <div className="mr-auto">
          <h1 className="text-black text-6xl font-bold">
            Good Morning, {username}!
          </h1>
          <p className="text-black text-2xl mt-3">
            Check all your incoming and outgoing transactions here
          </p>
        </div>
        <Avatar />
      </div>
    </section>
  );
}

export default Hero;
