import { Label } from "src/components/ui/label";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Icons } from "src/components/Icons";
import { Button, buttonVariants } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { useForm } from "react-hook-form";
import {
  AuthCredentialsValidator,
  TAuthCredentialsValidator,
} from "src/lib/validators/AccountCredentialValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "src/lib/utils";

const SignIn = () => {
  const isSeller = useParams();
  const navigate = useNavigate();

  const continueAsSeller = () => {
    // navigate.set("?as=seller");
  };

  const continueAsBuyer = () => {
    navigate("/sign-in");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {
    console.log({ email, password });
  };

  return (
    <div className="container relative flex flex-col pt-20 pb-20 items-center justify-center lg:px-0 animate-fade-in-up">
      <div className="mx-auto flex flex-col w-full justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Icons.rocketLogo className="h-auto w-24" />
          <h1 className="text-2xl font-bold">
            Sign in to your {isSeller ? "seller" : ""} account
          </h1>
          <Link
            className={buttonVariants({
              variant: "link",
              className: "gap-1.5",
            })}
            to="/sign-up"
          >
            Don&apos;t have an account? Sign-up
            <ArrowRight className="h-4 w-4 font-bold" />
          </Link>
        </div>
        <div className="grid gap-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <div className="grid gap-1 py-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email")}
                  className={cn({
                    "focus-visible:ring-red-500": errors.email,
                  })}
                  placeholder="your@email.com"
                  name="email"
                  autoComplete="email"
                />
                {errors?.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="grid gap-1 py2">
                <Label htmlFor="email">Password</Label>
                <Input
                  {...register("password")}
                  className={cn({
                    "focus-visible:ring-red-500": errors.password,
                  })}
                  placeholder="Password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                />
                {errors?.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <Button>Sign in</Button>
            </div>
          </form>
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                or
              </span>
            </div>
          </div>
          {isSeller ? (
            <Button
              onClick={continueAsBuyer}
              variant="secondary"
              // disabled={isLoading}
            >
              Continue as customer
            </Button>
          ) : (
            <Button
              onClick={continueAsSeller}
              variant="secondary"
              // disabled={isLoading}
            >
              Continue as seller
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
