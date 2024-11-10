import AboutSection from "./aboutsec/page";
import ContactSection from "./contactsec/page";
import Footer from "./footer/page";
import HomeSection from "./homesec/page";
import Navbar from "./navbar/page";
import ProjectsSection from "./projectsec/page";
import ServiceSection from "./servicesec/page";
import SkillsSection from "./skillsec/page";

export default function Home() {
  return (
    <div>
        <Navbar />
      <HomeSection />
      <AboutSection />
      <SkillsSection/>
      <ProjectsSection />
      <ServiceSection/>
      <ContactSection />
      <Footer />
       </div>

  );
}
