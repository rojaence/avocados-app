import Skeleton from "../components/Skeleton/Skeleton";
import { SkeletonProps } from "../components/Skeleton/Skeleton.model";

export const generateSkeletons = (
  count: number,
  props: Partial<SkeletonProps> = {}
) => {
  const skeletons = [];
  for (let i = 0; i < count; i++) {
    skeletons.push(<Skeleton key={i} {...props} />);
  }
  return skeletons;
};
