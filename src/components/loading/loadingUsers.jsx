import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingUsers = () => {
  return Array(12)
    .fill({})
    .map((i) => {
      return (
        <>
          <div
            key={i}
            className="col-lg-2 col-md-3 col-sm-4 col-12 text-center p-3"
          >
            <Skeleton
              className="mb-4"
              circle={true}
              height={100}
              width={100}
            ></Skeleton>
            <Skeleton className="mb-2"></Skeleton>
            <Skeleton className="mb-2"></Skeleton>
            <Skeleton className="mb-2"></Skeleton>
          </div>
        </>
      );
    });
};

export default LoadingUsers;
