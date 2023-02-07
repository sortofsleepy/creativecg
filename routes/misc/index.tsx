import BaseLayout from "../../components/layout.tsx"
import Link from "../../components/link.tsx"
import Content from "../../islands/content.tsx";
import Header from "../../islands/header.tsx";

export default function Home() {
  return (
    <>

        <BaseLayout>
            <Header/>
            <section className="mx-auto py-10">
                <h1 className="lg:text-8xl sm:text-5xl">Misc</h1>
                <Content/>
            </section>



            <section id="dustin" className="pt-20 content_section" data-link-title="Quick RenderDoc Tutotial">
                <h2>Quick RenderDoc Tutorial </h2>
                <p>
                    Dustin H Land wrote up a brief tutorial on how to step through RenderDoc when it comes to Vulkan.
                </p>
                <Link url="https://www.fasterthan.life/blog/2017/7/11/i-am-graphics-and-so-can-you-part-2-intuition"/>
            </section>


            <section id="death-stranding" className="pt-20 content_section" data-link-title="Breakdown of Death Stranding VFX">
                <h2>A Brief Breakdown of some of the VFX behind Death Stranding </h2>
                <p>
                    <Link url="https://twitter.com/_mamoniem" text="@_mamoniem"/> does a pretty interesting breakdown about some of the techniques used in Death Stranding.
                </p>
                <img class="py-5" src="https://mamoniem.com/wp-content/uploads/2022/11/ds_snow_mirroredRT_demonstration.jpg"/>
                <Link url="https://mamoniem.com/behind-the-pretty-frames-death-stranding/"/>
            </section>


        </BaseLayout>

    </>
  );
}
