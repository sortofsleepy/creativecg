import BaseLayout from "../../components/layout.tsx"
import Content from "../../islands/content.tsx";
import Link from "../../components/link.tsx";
import Header from "../../islands/header.tsx";

export default function Home() {
  return (
    <>

        <BaseLayout>
            <Header/>
            <section className="mx-auto py-10">
                <h1 className="lg:text-8xl sm:text-5xl">WebGL</h1>
                <Content/>
            </section>


            <section id="schmidt" className="pt-20 content_section" data-link-title="Karsten Schmidt">
                <h2>Karsten Schmidt</h2>
                <p>
                    Karsten Schmidt is well known in the creative coding arena and has produced a number of notable
                    works over the years. These days he focuses on creating
                    thi.ng, his main set of tools for making work that seems to largely focus on the web with some
                    smaller focuses on a few other areas.
                </p>
                <Link url="https://thi.ng/" text="thi.ng website"/>
            </section>

            <section id="spite" className="pt-20 content_section" data-link-title="@Spite">
                <h2>@spite</h2>
                <p>
                    I've learned a lot by looking at the work of Jaume Sanchez over the years. He usually is constantly
                    experimenting, doing interesting things and usually open sources a lot of
                    the work he does.
                </p>

                <Link url="https://www.clicktorelease.com/"/>
            </section>


            <section id="akella" className="pt-20 content_section" data-link-title="Taotajima.jp breakdown">
                <h2>Taotajima.jp WebGL deconstruction</h2>
                <img className="py-5" src="https://miro.medium.com/max/640/1*gMOR2bxZPIfy6FEYy3uNJg.gif"/>
                <p>


                    Here, <a href="https://www.twitter.com/akella">@akella(Yuri Artiukh)</a> does a nice breakdown on
                    one of the more interesting WebGL based
                    sites in recent years, a site for the photographer Tao Tajima. He goes a bit into how the main
                    experience of the site was created and offers
                    a nice tutorial on how to achieve the effect.
                </p>
                <Link url="https://medium.com/@akella/taotajima-jp-webgl-deconstruction-af4946e8e8ed"/>
            </section>


        </BaseLayout>

    </>
  );
}
