"use client"
import ListItem from "@/components/Listitem";
import AddItem from "../components/Additem";


export default function Home() {
  return (
  <div className="h-screen flex flex-col justify-center items-center gap-3">
    <h1>Next.js firebase firestore</h1>
    <AddItem/>
    <ListItem />
  </div>
  );
}