import Link from "next/link";
export default function products() {
  const productID = 100;
  return (
    <>
      <h1>product list</h1>
      <h2>
        <Link href={"products/1"}>product 1</Link>
      </h2>
      <h2>
        <Link href={"products/2"}>product 2</Link>
      </h2>
      <h2>
        <Link href={"products/3"} replace>
          product 3
        </Link>
      </h2>
      <h2>
        <Link href={`products/${productID}`}> products{productID} </Link>
      </h2>
      <Link href={`/`}> Home</Link>
    </>
  );
}
