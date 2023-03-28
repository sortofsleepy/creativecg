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

            <section id="sdf-polygon-generator" className="pt-20 content_section"
                     data-link-title="SDF Polygon Generator">
                <h2>SDF Polygon Generator</h2>
                <p>
                    User <Link url="https://www.shadertoy.com/user/fenix" text="@fenix"/> created a user friendly SDF shape generator.  You can manipulate the points
                    and even get a read out of vertex positions to use.
                </p>
                <img className="py-5"
                     src="https://pbs.twimg.com/media/Fo1v9CjWYAAhyeP?format=jpg&name=small"/>
                <Link url="https://www.shadertoy.com/view/dtBSDw"/>
            </section>

            <section id="dreamworks-moonray" className="pt-20 content_section"
                     data-link-title="Dreamworks Moonray Renderer">
                <h2>Dreamworks Moonray Renderer is open-sourced. </h2>
                <p>
                    Dreamworks recently open-sourced their  <Link url="https://openmoonray.org/" text="Moonray"/> renderer which has been used in production work like
                    "How to Train Your Dragon". After a cursory glance, it seems like the way to use it is via a command line tool, not sure if it can be integrated into other
                    things as-is.
                </p>
                <img className="py-5"
                     src="https://openmoonray.org/images/paper.png"/>
                <Link url="https://openmoonray.org/"/>
            </section>

            <section id="weta-water" className="pt-20 content_section"
                     data-link-title="Avatar 2 water">
                <h2>A Behind-the-Scenes Look at Avatar 2's Water Technology </h2>
                <p>
                    Digital visual effects company Wētā Digital – now part of the Unity family – has recently shared a comprehensive blog post showcasing the tools and solutions they developed for James Cameron's Academy Award-winning Avatar: The Way of Water.
                </p>
                <img className="py-5"
                     src="https://cdn.80.lv/api/upload/content/65/images/640eb420eef10/widen_920x0.jpeg"/>
                <Link url="https://80.lv/articles/a-behind-the-scenes-look-at-avatar-2-s-water-technology/?es_id=ba217a7897"/>
            </section>
        </BaseLayout>

    </>
  );
}
