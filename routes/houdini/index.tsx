import BaseLayout from "../../components/layout.tsx"
import Content from "../../islands/content.tsx";
import Header from "../../islands/header.tsx";

export default function Home() {
  return (
    <>

        <BaseLayout>
            <Header/>
            <section className="mx-auto py-10">
                <h1 className="lg:text-8xl sm:text-5xl">Houdini</h1>
                <Content/>
            </section>


            <section id="vex-ref" className="pt-20 content_section" data-link-title="Common Vex attributes">
                <h2>Common Vex attribute and type reference</h2>
                <p className="py-4">
                    John Kunz has taken the time to to construct a handy reference guide to common Vex related types and
                    attributes you might run into.
                    It contains a number of helpful things like available global variables as well as things like Vellum
                    attributes </p>
                <a href="https://www.johnkunz.com/vex" target="_blank" rel="noreferrer">
                    Link</a>

            </section>

            <section id="cgwiki" className="pt-20 content_section" data-link-title="CGWiki">
                <h2>CGWiki</h2>
                <p className="py-4">A site by @tokeru that contains a bunch of little tutorials on different techniques
                    in Houdini.</p>
                <img src="/cgwiki.png" width="70%"/>
                <a href="https://www.tokeru.com/cgwiki/?title=Houdini" target="_blank" rel="noreferrer">
                    Link
                </a>
            </section>

            <section id="junichiro" className="pt-20 content_section" data-link-title="Junichiro Horikawa">
                <h2>Junichiro Horikawa</h2>
                <p className="py-4"> Junichiro Horikawa is a Japanese designer that produces mostly English tutorials on
                    Youtube. Primarily focused on Houdini, he does also give tutorials on other
                    topics like Blender and Grasshopepr.</p>
                <br/>
                <a href="https://www.youtube.com/@JunichiroHorikawa" target="_blank" rel="noreferrer">
                    Youtube Channel
                </a>
            </section>


        </BaseLayout>

    </>
  );
}
