import Screen from "@/components/layout/screen";
import UserCard from "@/components/card/user";
import Test from "@/components/test";
const Landing = () => {
  return (
    <main>
      <div className="py-24 flex flex-col">
        <Screen>
          <div className="flex gap-4 h-full">
            <div className="w-96 h-96 border border-black sticky top-4">ca</div>
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
        </Screen>
      </div>
    </main>
  );
};

export default Landing;
