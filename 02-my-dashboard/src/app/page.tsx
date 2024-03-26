import { redirect } from "next/navigation";

redirect

export default function HomePage() {

  redirect('/dashboard/counter');

}
