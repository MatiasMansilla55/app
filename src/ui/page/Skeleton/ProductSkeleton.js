import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Skeleton.css";

export const SkeletonCard = () => {
  return (
    <div className="skeletoncard">
      <Skeleton height={150} width={150} />
      <Skeleton count={5} width={450} />
    </div>
  );
};

export const ProductLoader = () => {
  return (
    <section className="products-container-skeleton">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </section>
  );
};
