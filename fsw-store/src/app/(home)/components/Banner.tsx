import Image from "next/image";

interface IBanner {
  src: string;
  alt: string;
}

const Banner = ({ src, alt }: IBanner) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      className="h-auto w-full"
      sizes="100%"
    />
  );
};

export default Banner;
