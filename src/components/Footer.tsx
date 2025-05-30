import { person } from "@/app/resources/content";

import Container from "@/components/Container";
import { SocialIcons } from "@/components/SocialIcons";


export const Footer = () => {
    const CURRENT_YEAR = new Date().getFullYear();

    return (
        <footer className="mt-20 pb-4 relative bottom-0">
            <Container classNames="flex justify-between items-center">
                <div>
                    <p className="text-gray-400">© {CURRENT_YEAR} / <a href={`mailto:${person.email}`} className="text-white duration-250 hover:opacity-50">{person.name}</a></p>
                </div>
                <SocialIcons />
            </Container>
        </footer>
    )
}