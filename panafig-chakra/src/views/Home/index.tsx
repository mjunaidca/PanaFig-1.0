

import Months6 from "./6Months";
import ConfidenceFuture from "./ConfidenceFuture";
import Head1 from "./Head1";
import Instructors from "./Instructors";
import NutshellProgram from "./NutshellProgram";
import Outcome from "./Outcome";
import Q1Q3Details from "./Q1Q3Details";
import SpecialTrackDetails from "./SpecialTrackDetails";
import SpecialTracks from "./SpecialTracksHead";

export default function Home() {
  return (
    <div>
      <Head1 />
      <Outcome />
      <Instructors />
      <Months6 />
      <Q1Q3Details />
      <SpecialTracks />
      <SpecialTrackDetails />
      <ConfidenceFuture />
      <NutshellProgram />
    </div>
  )
}
