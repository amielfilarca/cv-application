import Header from "./components/Header";
import Basic from "./components/Basic";
import { useState } from "react";
import Output from "./components/Output";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Summary from "./components/Summary";

function App() {
  const [info, setInfo] = useState({
    basicInfo: {
      name: "",
      email: "",
      phone: "",
      location: "",
    },
    summary: {
      position: "",
      summary: "",
    },
    skills: "",
    experience: [],
    education: [],
    // basicInfo: {
    //   name: "Dwight Kurt Schrute III",
    //   email: "dschrute@schrutefarms.com",
    //   phone: "570-555-1212",
    //   location: "Honesdale, PA",
    // },
    // summary: {
    //   position: "Assistant Regional Manager",
    //   summary:
    //     "I am ready to face any challenge that might be foolish enough to face me.",
    // },
    // skills:
    //   "Willingness to do anything to close a sale and/or please higher-ups, Ability to raise and lower own cholesterol at will, Emotional feelings regenerate at twice the speed of a normal man, Expert werewolf hunter, Others too numerous to mention",
    // experience: [
    //   {
    //     company: "Duner Mifflin Paper Co., Inc., A Division of Sabre",
    //     position:
    //       "Sales Representative/Former Assistant [to the] Regional Manager",
    //     task: [
    //       "Close more sales with revenues totalling more U.S. dollars than any other employee, past, present and future (projected)",
    //       "Act as Regional Manager’s eyes, ears, and right hand, overseeing and reporting on employee conduct, productivity, and arrrival/departure times",
    //       "Institued “Schrute Bucks” reward system, immeasureably rasing office morale",
    //       "Serve as self-appointed enforcer of The Rules (Policies and Procedures Manual)",
    //     ],
    //     location: "Scranton, PA",
    //     fromDate: "2005",
    //     untilDate: "Present",
    //   },
    //   {
    //     company: "Schrute Farms",
    //     position: "General Manager (concurrent with Dunder Mifflin/Sabre role)",
    //     task: [
    //       "Manage operations at the #1 beet-related agritourism B&B destination in Northeastern PA",
    //       "Provide fine accomodation for beet enthusiasts in themed guest rooms representing “America,” “Nighttime,” and “Irrigation”",
    //       "Meet or exceed beet needs of local stores, restaurant, and roadside stands",
    //       "Facilitate recreational activities including but not limited to manure dodge ball, fresh butter statue sculpting, and beet syrup and rum making",
    //     ],
    //     location: "Honesdale, PA",
    //     fromDate: "1980",
    //     untilDate: "Present",
    //   },
    // ],
    // education: [
    //   {
    //     course: "Bacherlor’s Degree Business Administration GPA: 2.99987",
    //     school: "Scranton University",
    //     untilDate: "1992",
    //   },
    // ],
  });
  const [step, setStep] = useState(0);
  const [hide, setHide] = useState(false);
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <Basic info={info} setInfo={setInfo} nextStep={nextStep} />;
      case 1:
        return (
          <Summary
            info={info}
            setInfo={setInfo}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 2:
        return (
          <Skills
            info={info}
            setInfo={setInfo}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <Experience
            info={info}
            setInfo={setInfo}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 4:
        return (
          <Education
            info={info}
            setInfo={setInfo}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 5:
        return <Output info={info} hide={hide} setHide={setHide} />;
      default:
        break;
    }
  };

  return (
    <div>
      {!hide && <Header />}
      {getStepContent(step)}
    </div>
  );
}

export default App;
