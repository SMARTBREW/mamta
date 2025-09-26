import React from 'react';
import { cn } from '@/lib/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'animate-pulse rounded-md bg-gray-200',
          className
        )}
        {...props}
      />
    );
  }
);
Skeleton.displayName = 'Skeleton';

export const HeroSkeleton = () => (
  <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gray-100">
    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
    <div className="absolute bottom-24 left-6 sm:left-8 lg:left-12 z-10">
      <div className="w-80 sm:w-96 aspect-square rounded-xl p-6 sm:p-8 flex flex-col justify-end">
        <Skeleton className="h-4 w-32 mb-2" />
        <Skeleton className="h-12 w-64" />
      </div>
    </div>
  </section>
);

export const CardSkeleton = () => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg p-6">
    <Skeleton className="h-48 w-full mb-4" />
    <Skeleton className="h-6 w-3/4 mb-2" />
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-2/3" />
  </div>
);

export const StatsSkeleton = () => (
  <div className="flex flex-wrap gap-6">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center shadow-sm bg-gray-100">
        <Skeleton className="h-8 w-16 mb-2" />
        <Skeleton className="h-4 w-20" />
      </div>
    ))}
  </div>
);

export { Skeleton };
