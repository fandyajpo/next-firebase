// DRAWER
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { ScrollArea } from "@/components/ui/scroll-area";

import Block from "@/own-components/layout/block";

const ProfileCard = () => {
  return (
    <Drawer fixed direction="bottom">
      <div className="p-4">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <Block className="w-24 h-24 rounded-full flex-none bg-black" />
            <div className="pt-2">
              <p className="font-semibold text-md ">
                Fandy Ahmad Januar Pratama
              </p>
              <p className="text-sm font-light ">fandyglitch3@gmail.com</p>
            </div>
          </div>
          <Block className="w-8 h-8 bg-white border rounded flex justify-center items-center">
            <DrawerTrigger>...</DrawerTrigger>
          </Block>
        </div>

        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </div>
    </Drawer>
  );
};

export default ProfileCard;
