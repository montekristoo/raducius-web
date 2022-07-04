import React from "react";
import data from "../components/TutorialPaper/dataTutorials";
import TutorialPaper from "../components/TutorialPaper/TutorialPaper";

export default function Tutorials() {
  const tutoriale = data.map((item) => {
    return <TutorialPaper key={item.id} {...item} />;
  });

  return (
    <>
      <div className="flex flex-col h-auto">{tutoriale}</div>
    </>
  );
}
