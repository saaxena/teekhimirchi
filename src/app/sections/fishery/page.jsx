import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "TeekhiMirchi | Fishery",
  description: "TeekhiMirchi fishery page.",
};

const page = () => {
  return (
    <SectionPage
      section="fishery"
      subtitle="Dive in and enjoy our fresh seafood."
      imgLink="/images/sections/fishery.webp"
    />
  );
};

export default page;
