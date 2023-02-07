import BaseLayout from "../../components/layout.tsx"
import Content from "../../islands/content.tsx";
import Link from "../../components/link.tsx";
import Header from "../../islands/header.tsx";

export default function Home() {
  return (
    <>

        <BaseLayout>
            <Header/>
            <section className="mx-auto py-10 content_section">
                <h1 className="lg:text-8xl sm:text-5xl">Unreal Engine</h1>
                <div className="py-10">
                    <Content/>
                </div>
            </section>

            <section id="mikumiku" className="pt-20 content_section" data-link-title="MikuMiku">
                <h2>Importing MikuMiku Dance models</h2>
                <p className="py-4">

                    Turns out it's possible to take MikuMiku dance models and bring them into Unreal Engine for some
                    shenanagins.
                    @TheHoodieGuy02 put up a mostly complete guide a little over a year ago which is mostly complete,
                    but needed some
                    minor tweaks so I took a stab at trying things out.
                </p>

                <img src="https://preview.redd.it/7o17rymyshba1.png?width=2238&format=png&auto=webp&v=enabled&s=3b14d65d1e6aa3b622a0dfe5d1aa68e0a1a6f3b4"/>
                <Link url="https://gitlab.com/sortofsleepy/mikumikuue5/"
                      text="I have a repo setup with some sample assets"/>
                <br/>
                <Link
                    url="https://www.deviantart.com/thehoodieguy02/journal/How-to-make-Unreal-Engine-4-your-new-MMD-Pt-2-892643542"
                    text="Link to @TheHoodieGuy02's guide"/>

            </section>

            <section id={"meta-sounds"} className="pt-20 content_section" data-link-title="Unreal Engine Meta Sounds">
                <h2>Unreal Engine MetaSounds Tutorial on CDM</h2>

                <p className="py-4">
                    <Link url="https://twitter.com/mattspendlove" text="Peter Kirn"/> has a tutorial on <Link url="https://cdm.link/2023/02/learn-modular-metasounds-in-unreal-free/" text="cdm.link"/> about Unreal Engine's
                    MetaSounds system.
                </p>
                <img src="https://cdm.link/app/uploads/2023/02/unreal-metasounds-1024x576.jpeg" alt="unreal engine patch system"/>
            </section>

        </BaseLayout>

    </>
  );
}
