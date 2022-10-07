import { useState } from 'react';

const base = new URL(window.location).origin;
let setRoute;

export function Router({ children: routes }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  // TODO: is this okay?
  setRoute = setCurrentPath;

  window.onpopstate = (_) => {
    setCurrentPath(window.location.pathname);
  };

  return routes.find((r) => r.props.path === currentPath).props.component;
}

export function Route({ path, component }) {
  return component;
}

export function useRouter() {
  // TODO: validate if path starts with slash
  return {
    push: (path) => {
      history.pushState(path, '', base + path);
      setRoute(path);
    },
  };
}
