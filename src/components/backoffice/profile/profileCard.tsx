import Block from "@/components/layout/block";

const ProfileCard = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <Block className="w-24 h-24 rounded-full flex-none bg-black" />
          <div className="pt-2">
            <p className="font-semibold text-md ">Fandy Ahmad Januar Pratama</p>
            <p className="text-sm font-light ">fandyglitch3@gmail.com</p>
          </div>
        </div>
        <Block className="w-8 h-8 bg-white border rounded flex justify-center items-center">
          ...
        </Block>
      </div>
    </div>
  );
};

export default ProfileCard;
