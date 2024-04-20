import UserCard from "@/components/card/user";
const Landing = () => {
  return (
    <main className="relative">
      <div className="py-24 flex flex-col w-full">
        <div className="flex gap-4 h-full w-full">
          <div className="w-96 h-96 border border-black lg:sticky absolute top-4 bg-blue-500">
            ca
          </div>
          <div className="w-full h-full grid grid-cols-2 gap-4">
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
