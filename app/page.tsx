"use client";

import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative flex h-dvh w-full flex-col overflow-hidden">
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center overflow-hidden px-8">
        <section className="z-20 flex flex-col items-center justify-center gap-[16px] sm:gap-6">
          <Image src="/coffee-dark.png" alt="logo" width={400} height={400} />
          <p className="text-center font-normal leading-7 font-[family-name:var(--font-montecarlo)] sm:w-[466px] sm:text-[18px] lg:text-4xl">
            Pagi yang cerah, harapan baru
          </p>
          <div className="flex flex-col mt-5 items-center justify-center gap-6 sm:flex-row">
            <Button
              className="h-10 w-[163px] font-[family-name:var(--font-quicksand)] bg-black text-white dark:bg-white dark:text-black px-[16px] py-[10px] text-small font-medium leading-5"
              radius="full"
            >
              Mulai
            </Button>
            <Button
              className="h-10 w-[163px] font-[family-name:var(--font-quicksand)] border-1 border-default-100 px-[16px] py-[10px] text-small font-medium leading-5"
              endContent={
                <span className="pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-default-100">
                  <Icon
                    className="text-default-500 [&>path]:stroke-[1.5]"
                    icon="solar:arrow-right-linear"
                    width={16}
                  />
                </span>
              }
              radius="full"
              variant="bordered"
            >
              Tamu
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
