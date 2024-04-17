"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/shadcn/button";

interface IProductImages {
  imgUrls: string[];
  productName: string;
}

const ProductImages = ({ imgUrls, productName }: IProductImages) => {
  const [currentImg, setCurrentImg] = useState(imgUrls[0]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex h-[300px] items-center justify-center rounded-lg bg-accent lg:h-[400px]">
        <Image
          src={currentImg}
          alt={productName}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[90%] w-auto max-w-[90%]"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="grid grid-cols-4 gap-4 md:grid-cols-[80px_80px_80px_80px]">
        {imgUrls.map((imgUrl) => (
          <Button
            key={imgUrl}
            variant={"outline"}
            className={`flex h-[80px] items-center justify-center rounded-lg bg-accent p-0 ${imgUrl === currentImg && "border-2 border-primary"}`}
            onClick={() => setCurrentImg(imgUrl)}
          >
            <Image
              src={imgUrl}
              alt={productName}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto max-h-[90%] w-auto max-w-[90%]"
              style={{ objectFit: "contain" }}
            />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
