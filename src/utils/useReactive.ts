import * as React from "react";
import { Signal, useSignal } from "use-signals";

export function useComputed<T>(
  computation: () => T,
  deps: React.DependencyList = []
): T {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const computed = React.useMemo(() => new Signal.Computed(computation), deps);

  const value = useSignal(computed);

  return value;
}
