import { redirect } from "next/navigation";

export default function NotFound() {
  redirect("/");
  return (
    <div>
      <h1>Not Found</h1>
    </div>
  );
}
