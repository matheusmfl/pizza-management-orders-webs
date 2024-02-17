import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Link } from 'react-router-dom'

const signInForm = z.object({
  email: z.string().email(),
});

type SignInForm = z.infer<typeof signInForm>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  const handleSignIn = async (data: SignInForm) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Enviamos um link de autenticação para o seu e-mail.", {
      action: {
        label: "Re-enviar",
        onClick: () => handleSignIn(data),
      },
    });
  };

  return (
    <div>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant={'ghost'} asChild className="absolute right-8 top-8 ">
        <Link to={'/sign-up'} className="">
          Novo estabelecimento
          </Link>
        </Button>
       
        <div className="w-[350px] flex flex-col justify-center gap-6 ">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro !
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <Button disabled={isSubmitting} type="submit" className="w-full">
              Acessar o painel
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
