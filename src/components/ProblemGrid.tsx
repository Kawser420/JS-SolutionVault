import React from "react";
import { Problem } from "../../types";
import { ProblemCard } from "./ProblemCard";
import { SkeletonCard } from "./SkeletonCard";

interface ProblemGridProps {
  problems: Problem[];
  isLoading: boolean;
}

export const ProblemGrid: React.FC<ProblemGridProps> = ({
  problems,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (problems.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-xl font-medium text-[--text-color]">
          No problems found.
        </h2>
        <p className="text-[--text-color]/70 mt-2">
          Try adjusting your search or category filter.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {problems.map((problem) => (
        <ProblemCard key={problem.title} problem={problem} />
      ))}
    </div>
  );
};
