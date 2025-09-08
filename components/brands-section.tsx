import Image from "next/image";

export function BrandsSection() {
  return (
    <section id="brands" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Shop Trusted Brands
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We partner with the best in the industry to bring you high-quality
              and reliable solutions.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 items-center justify-center gap-6 py-12 sm:grid-cols-3 lg:grid-cols-6">
          <div className="flex justify-center">
            <Image
              src="/placeholder-logo.svg"
              alt="Brand Logo 1"
              width={120}
              height={60}
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/placeholder-logo.svg"
              alt="Brand Logo 2"
              width={120}
              height={60}
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/placeholder-logo.svg"
              alt="Brand Logo 3"
              width={120}
              height={60}
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/placeholder-logo.svg"
              alt="Brand Logo 4"
              width={120}
              height={60}
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/placeholder-logo.svg"
              alt="Brand Logo 5"
              width={120}
              height={60}
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
          <div className="flex justify-center">
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
