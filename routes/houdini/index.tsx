import BaseLayout from "../../components/layout.tsx"
import Content from "../../islands/content.tsx";
import Header from "../../islands/header.tsx";
import Link from "../../components/link.tsx"

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

            <section id="vertex-anim-textures" className="pt-20 content_section" data-link-title="Vertex Animation Textures for the web">
                <h2>Vertex Animation Textures for the web</h2>
                <p className="py-4">
                    <Link url="https://twitter.com/mike_lyndon/status/1613204223361159168" text="Mike Lyndon"/> has gotten vertex animation textures working
                    in Three.js
                </p>
                <img class="py-4" src="https://pbs.twimg.com/ext_tw_video_thumb/1613202414475280386/pu/img/GbppFw1jMIPOho8X.jpg" alt="video poster of things working"/>
                <Link url="https://twitter.com/mike_lyndon/status/1613204223361159168"/>
            </section>
        </BaseLayout>

    </>
  );
}
