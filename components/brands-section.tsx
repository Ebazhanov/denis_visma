"use client";

import { useLanguage } from "@/contexts/language-context";
import Image from "next/image";

export function BrandsSection() {
  const { t } = useLanguage();
  return (
    <section id="brands" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="flex flex-col items-center mx-auto max-w-5xl px-4 md:px-6">
        <div className="w-full text-center space-y-2 mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            {t.brandsTitle}
          </h2>
          <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t.brandsSubtitle}
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center justify-items-center gap-6 py-12">
          <div className="flex justify-center min-h-[60px]">
            <Image
              src="/placeholder-logo.svg"
              alt="Brand Logo 1"
              width={120}
              height={60}
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
          <div className="flex justify-center min-h-[60px]">
            <Image
              src="/placeholder-logo.svg"
              alt="Brand Logo 2"
              width={120}
              height={60}
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
          <div className="flex justify-center min-h-[60px]">
            <Image
              src="/placeholder-logo.svg"
              alt="Brand Logo 3"
              width={120}
              height={60}
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
          <div className="flex justify-center min-h-[60px]">
            <Image
              src="/placeholder-logo.svg"
              alt="Brand Logo 4"
              width={120}
              height={60}
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
          <div className="flex justify-center min-h-[60px]">
            <Image
              src="/placeholder-logo.svg"
              alt="Brand Logo 5"
              width={120}
              height={60}
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
          <div className="flex justify-center min-h-[60px]">
            <Image
              src="/placeholder-logo.svg"
              alt="Brand Logo 6"
              width={120}
              height={60}
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
