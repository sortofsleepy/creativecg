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
                <h1 className="lg:text-8xl sm:text-5xl">Misc</h1>
                <Content/>
            </section>


            <section id="wgpu" className="pt-20 content_section" data-link-title="wgpu">
                <h2>wgpu</h2>
                <p>
                    wgpu is a Rust based framework for working with WebGPU. One of the nicest features about this is
                    that it can compile
                    to WASM as well for browser functionality.
                </p>
                <Link url="https://github.com/gfx-rs/wgpu" text="wgpu github page"/>
            </section>


            <section id="hexops-mach" className="pt-20 content_section" data-link-title="Hexops - Mach">
                <h2>Hexops - Mach </h2>
                <p className="pb-4">
                    Mach is a Zig based framework for working with WebGPU
                </p>
                <img width="50%"
                       src="https://user-images.githubusercontent.com/3173176/173177664-2ac9e90b-9429-4b09-aaf9-b80b53fee49f.gif"/>
                <Link url="https://github.com/hexops/mach"/>
            </section>


        </BaseLayout>

    </>
  );
}
