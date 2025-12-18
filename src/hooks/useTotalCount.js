import { useCallback } from "react";

export function useTotalCount(list) {
  const getCount = useCallback(() => list.length, [list]);
  return getCount;
}