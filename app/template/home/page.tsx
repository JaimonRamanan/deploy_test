import Image from "next/image";
import Products from "./Products";
import Categories from "./Categories";


export default function Home() {
  return (
    <div className="">
      <Image
        src={"/bg_image.jpg"}
        width={500}
        height={0}
        style={{ height: "auto", width: "100%" }}
        alt={""}
      />
      <Categories />
      <Products />

    </div>
  );
}


