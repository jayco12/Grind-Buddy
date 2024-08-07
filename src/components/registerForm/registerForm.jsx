"use client";

import { register } from "@/lib/action";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Username" name="username" required />
      <input type="email" placeholder="Email" name="email" required />
      <input type="password" placeholder="Password" name="password" required />
      <input type="password" placeholder="Password Again" name="passwordRepeat" required />
      <input type="text" placeholder="Availability" name="availability" required />
      <input type="text" placeholder="Interests" name="interests" required />
      <input type="text" placeholder="Major" name="major" required />
      <input type="text" placeholder="Shared Courses" name="shared_courses" required />
      <input type="text" placeholder="Study Preferences" name="study_preferences" required />
      <input type="text" placeholder="Year of Study" name="year_of_study" required />
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;