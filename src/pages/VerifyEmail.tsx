import { useParams } from "react-router-dom";
import { Icons } from "src/components/Icons";
import VerifyEmail from "src/components/VerifyEmail";

const VerifyEmailPage = () => {
  const searchParams = useParams();
  const { token } = searchParams;
  const toEmail = "cmatteo@gmail.com";

  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0 animate-fade-in-up mb-20">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        {token && typeof token === "string" ? (
          <div className="grid gap-6">
            <VerifyEmail token={token} />
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <Icons.mailBoxLogo className="h-auto w-[15rem] mb-5" />
            <h3 className="font-semibold text-2xl">Check your email</h3>
            {toEmail ? (
              <p className="text-muted-foreground text-center">
                We&apos;ve sent a verification link to{" "}
                <span className="font-semibold">{toEmail}.</span>
              </p>
            ) : (
              <p>We&apos;ve sent a verification link to your email.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmailPage;
