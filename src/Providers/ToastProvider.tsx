import Toast from "src/components/Toast";
import {
  ToastProvider as OriginalToastProvider,
  useToast,
} from "src/context/toast-context";

interface Props {
  children: React.ReactNode;
}

const ToastProviderWrapper = ({ children }: Props): JSX.Element => {
  const { toasts } = useToast();

  return (
    <>
      {children}
      <div className="fixed bottom-0 right-0 p-4">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </div>
    </>
  );
};

const CombinedToastProvider = ({ children }: Props) => (
  <OriginalToastProvider>
    <ToastProviderWrapper>{children}</ToastProviderWrapper>
  </OriginalToastProvider>
);

export default CombinedToastProvider;
