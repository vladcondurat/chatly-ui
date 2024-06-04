import StoreProvider from './store-provider';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = (props: ProvidersProps): JSX.Element => {
  const { children } = props;

  return <StoreProvider>{children}</StoreProvider>;
};

export default Providers;
