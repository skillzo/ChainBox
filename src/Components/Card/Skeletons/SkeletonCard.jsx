import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import "./skeleton.css";

export const SCoinCard = () => {
  return (
    <Stack spacing={2}>
      <Skeleton variant="rounded" height={50} />
      <Skeleton variant="rounded" height={50} />
      <Skeleton variant="rounded" height={50} />
      <Skeleton variant="rounded" height={50} />
      <Skeleton variant="rounded" height={50} />
      <Skeleton variant="rounded" height={50} />
      <Skeleton variant="rounded" height={50} />
      <Skeleton variant="rounded" height={50} />
      <Skeleton variant="rounded" height={50} />
      <Skeleton variant="rounded" height={50} />
    </Stack>
  );
};

export function TextSkeleton() {
  return (
    <div className="image-skeleton">
      <Stack spacing={1.5}>
        <Skeleton variant="rectangular" height={50} />
        <Skeleton variant="text" height={40} />
        <Skeleton variant="text" height={40} />
        <Skeleton variant="text" height={40} />
        <Skeleton variant="text" height={40} />
        <Skeleton variant="text" height={40} />
        <Skeleton variant="text" height={40} />
        <Skeleton variant="text" height={40} />
        <Skeleton variant="text" height={40} />
      </Stack>
    </div>
  );
}
export function ImageSkeleton() {
  return (
    <Stack spacing={2}>
      <Skeleton variant="rectangular" animation="wave" height={400} />
    </Stack>
  );
}

export const SBasicCard = () => {
  return (
    <Stack spacing={2}>
      <Skeleton variant="rounded" height={40} />
      <Skeleton variant="rounded" height={40} />
      <Skeleton variant="rounded" height={40} />
      <Skeleton variant="rounded" height={40} />
    </Stack>
  );
};
