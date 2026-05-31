import { StudentSignupForm } from "@/components/auth/StudentSignupForm";
import { TutorSignupForm } from "@/components/auth/TutorSignupForm";


interface Props {
  params: {
    role: string;
  };
}


export default function SignupPage({ params }: Props) {
  return params.role === "student" ? <StudentSignupForm /> : <TutorSignupForm />;
}

