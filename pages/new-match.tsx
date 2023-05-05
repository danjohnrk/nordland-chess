import { MatchRegister } from "@/src/components/MatchRegister/MatchRegister";
import PageTemplate from "@/src/components/PageTemplate/PageTemplate";

const NewMatch = () => {
  return (
    <PageTemplate title="Ny Match">
      <MatchRegister />
    </PageTemplate>
  );
};

export default NewMatch;
