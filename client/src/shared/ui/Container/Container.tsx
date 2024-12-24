import s from './Container.module.css';
import { ReactNode, FC } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default Container;