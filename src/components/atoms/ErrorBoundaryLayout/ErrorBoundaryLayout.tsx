import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { Outlet } from "react-router-dom";

function fallbackRender({ error }: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

export function ErrorBoundaryLayout() {
  return (
    <ErrorBoundary FallbackComponent={fallbackRender}>
      <Outlet />
    </ErrorBoundary>
  );
}
