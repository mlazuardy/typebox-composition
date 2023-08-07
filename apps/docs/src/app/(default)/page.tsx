import { Container } from "@/components/Container";
import { LoginForm } from "@/components/example/LoginForm";
import { SignupForm } from "@/components/example/SignupForm";

export default function Page() {
  return (
    <div className="py-6 lg:py-8">
      <Container>
        <div className="max-w-md mx-auto">
          <div className="space-y-4">
            <LoginForm />
            <SignupForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
