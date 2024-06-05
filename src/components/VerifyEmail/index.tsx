import { Loader2 } from "lucide-react";
import { Icons } from "../Icons";
import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";

interface IVerifyEmailProps {
  token: string;
}

const VerifyEmail = ({ token }: IVerifyEmailProps) => {
  console.log(token);
  const isError = true;
  const isLoading = false;
  const data = {
    success: false,
  };

  if (isError) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Icons.notFoundLogo className="h-auto w-[15rem] mb-2" />
        <h3 className="font-semibold text-xl">There was a problem</h3>
        <p className="text-muted-foreground text-sm">
          This token is not valid or might be expired. Please try again.
        </p>
      </div>
    );
  }

  if (data?.success) {
    return (
      <div className="flex flex-col h-full items-center justify-center">
        <div className="relative mb-4 h-60 w-60 text-muted-foreground">
          <img
            src="/email-send.png"
            alt="the email was sent"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <h3 className="font-semibold text-2xl">You&apos;re all set!</h3>
        <p className="text-muted-foreground text-center mt-1">
          Thank you for verifying your email
        </p>
        <Link className={buttonVariants({ className: "mt-4" })} to="/sign-in">
          Sign in
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="animate-spin h-8 w-8 text-zinc-300" />
        <h3 className="font-semibold text-xl">Verifying...</h3>
        <p className="text-muted-foreground text-sm">
          This won&apos;t take long.
        </p>
      </div>
    );
  }
};

export default VerifyEmail;
