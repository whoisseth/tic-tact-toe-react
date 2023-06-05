/** @format */
import { IoMdRefresh } from "react-icons/io";

import Board from "@/components/Board";

export default function Home() {
  return (
    <main
      className="flex min-h-screen
    w-full items-center justify-center bg-slate-500"
    >
      <Container>
        <section className=" flex justify-between  mb-2">
          <p className="flex  text-xl font-bol gap-1">
            <span className="text-green-300">X</span>
            <span className=" text-yellow-500">O</span>
          </p>
          <Turn turn="x" />
          <ResetBtn />
        </section>
        {/*  */}
        <Board />
        {/*  */}
        <ScoreSection />
      </Container>
    </main>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-2xl  w-80 ">{children}</div>;
}

function Turn({ turn = "x" }: { turn: "x" | "o" }) {
  return (
    <button className="bg-slate-700 items-center shadow-sm rounded-md flex gap-1 px-2 text-slate-100">
      <p className="font-bold text-xl">{turn}</p>
      <p className="text-sm">Turn</p>
    </button>
  );
}

function ResetBtn() {
  return (
    <button className="bg-slate-100 text-slate-500  p-1 rounded-md shadow-sm">
      <IoMdRefresh />
    </button>
  );
}

function ScoreSection() {
  return (
    <div className=" flex justify-between">
      <p>a</p>
      <p>a</p>
      <p>a</p>
    </div>
  );
}
