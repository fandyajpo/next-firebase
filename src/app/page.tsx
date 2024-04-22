import UserCard from "@/own-components/card/user";
const Landing = () => {
  return (
    <main className="relative">
      <div className="py-24 flex flex-col w-full">
        <div className="flex gap-4 h-full w-full">
          <div className="w-96 h-96 rounded hidden lg:block lg:sticky absolute top-28 bg-blue-500">
            ca
          </div>
          <div className="w-full h-full grid lg:grid-cols-2 gap-1">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
