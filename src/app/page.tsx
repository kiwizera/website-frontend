import { baseURL} from "@/app/resources/config";
import { home, person } from "@/app/resources/content";
import { Meta } from "@/modules";
import Container from "@/components/Container";
import { Section } from "@/components/Section";

import { Button } from "@/components/Button";
import { SocialIcons } from "@/components/SocialIcons";
import { Slider } from "@/components/Slider";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
  });
}

export default function Home() {
  return (
  <>
    <Container>
      <Section>
        <h1 className="text-6xl font-bold">{home.headline}</h1>
        <p className="text-gray-400 text-2xl font-medium my-5">{home.subheadline}</p>
        <div className="flex items-center gap-3">
          <Button href="/about" text={`About - ${person.name}`} avatar />
          <Button href="/assets/cv-joao-nz.pdf" text="Download CV" />
        </div>
        <SocialIcons className="mt-5" />
      </Section>
    </Container>

    <Container classNames="px-10">
      <Section>
        <Slider />
      </Section>
    </Container>
  </>
  );
}
