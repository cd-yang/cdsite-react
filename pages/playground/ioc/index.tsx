import React from 'react';
import type { Container, interfaces } from 'inversify';

const InversifyContext = React.createContext<{ container?: Container }>({});

type Props = {
  container: Container;
};

/** wrap React Context api */
export const Provider: React.FC<Props> = (props) => {
  return (
    <InversifyContext.Provider value={{ container: props.container }}>
      {props.children}
    </InversifyContext.Provider>
  );
};

/**
 * get instance by interface identifier
 * react hook
 */
export function useInjection<T>(identifier: interfaces.ServiceIdentifier<T>) {
  const { container } = React.useContext(InversifyContext);
  if (!container) {
    throw new Error();
  }
  return container.get<T>(identifier);
}
