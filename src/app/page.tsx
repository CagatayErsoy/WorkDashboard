import Container from "./components/UI/Container";
import AboutCoding from "./sections/AboutCoding";
import CalenderLook from "./sections/CalenderLook";
import CodingExercise from "./sections/CodingExercise";
import CoverLetterConverter from "./sections/CoverLetterConverter";
import Focus from "./sections/Focus";
import GeneralProgress from "./sections/GeneralProgress";
import InspirationHub from "./sections/InspirationHub";
import JobSearch from "./sections/JobSearch";
import Notes from "./sections/Notes";
import ProjectTasks from "./sections/ProjectTasks";
import PythonHub from "./sections/PythonHub";
import WorkoutProgress from "./sections/WorkoutProgress";

export default function Home() {
  return (
    <div className="flex col w-full">
      <main className="grid grid-cols-2  gap-4 w-full">
        <Container title="Today's Focus">
          <Focus></Focus>
        </Container>
        <Container title="General Progress">
          <GeneralProgress></GeneralProgress>
        </Container>
        <Container title="Today's Calender">
          <CalenderLook></CalenderLook>
        </Container>
        <Container title="Random Coding Fact">
          <AboutCoding></AboutCoding>
        </Container>
        <Container title="Project Tasks">
          <ProjectTasks></ProjectTasks>
        </Container>
        <Container title="Job Search">
          <JobSearch></JobSearch>
        </Container>
        <Container title="Coding Exercise">
          <CodingExercise></CodingExercise>
        </Container>
        <Container title="Python Hub">
          <PythonHub></PythonHub>
        </Container>
        <Container title="Workout Progress">
          <WorkoutProgress></WorkoutProgress>
        </Container>
        <Container title="Inspiration Hub">
          <InspirationHub></InspirationHub>
        </Container>
        <Container title="Cover Letter Converter">
          <CoverLetterConverter></CoverLetterConverter>
        </Container>
        <Container title="Notes">
          <Notes></Notes>
        </Container>
      </main>
    </div>
  );
}
