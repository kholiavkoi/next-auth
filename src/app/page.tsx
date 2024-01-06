import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();
  console.log(userId);
  if (userId) {
    redirect("/dashboard");
  }
  return (
    <main className="">
      <h1>Next.js Auth</h1>
    </main>
  );
}
