export default function ReviewDetail({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  return (
    <h1>
      {" "}
      review {params.reviewId} for product {params.productId}
    </h1>
  );
}
