"use client"

import Home from "./components/Home";
import LoadingScreen from "./components/Home/loadingScreen";
export default function HomePage() {

  return (
    <>
      <LoadingScreen />
      <Home />
    </>
  );
}