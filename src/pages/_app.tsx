import { tw } from '@/utils/tailwindMerge';

type AppProps<T extends React.ElementType> = Component<T>;

export default function App({
  children,
  className,
  ...restProps
}: AppProps<'div'>) {
  return (
    <div className={tw('pt-8', className)} {...restProps}>
      {children}
    </div>
  );
}