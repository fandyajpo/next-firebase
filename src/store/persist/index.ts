import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BearValue {
  count: number;
  user: number;
}

interface BearState extends BearValue {
  dispatch: (args: Partial<BearValue>) => void;
}

const initial = {
  count: 0,
  user: 0,
};

export const usePersistStore = create<BearState>()(
  persist(
    (set) => ({
      ...initial,
      dispatch: (by: Partial<BearValue>) => set(by),
    }),
    {
      name: "checkout",
      skipHydration: true,
    }
  )
);
