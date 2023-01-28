import BaseLayout from "../../components/layout.tsx"
import Content from "../../islands/content.tsx";

export default function Home() {
  return (
    <>

        <BaseLayout>
            <section className="mx-auto py-10">
                <h1 className="lg:text-8xl sm:text-5xl">Misc</h1>
                <Content/>
            </section>


            <section id="willems" className="pt-20 content_section" data-link-title="Sascha Willems">
                <h2>Sascha Willems Vulkan Samples</h2>
                <a href="https://github.com/SaschaWillems/Vulkan" target="_blank" rel="noreferrer">
                    Sascha Willems maintains a list of various Vulkan examples using C++.
                </a>
            </section>

            <section id="ash-vulkan" className="pt-20 content_section" data-link-title="Ash, A Rust based framework">
                <h2>Ash - A Rust Based Vulkan Framework</h2>
                <a href="https://github.com/SaschaWillems/Vulkan" target="_blank" rel="noreferrer">
                    Ash is a Rust based "framework"
                </a>
                <p>It's extremely low level and more of a light wrapper around the Vulkan SDK.</p>
                <div className="version">
                    <a href="https://github.com/ash-rs/ash" rel="noreferrer">
                        <img src="https://img.shields.io/crates/v/ash.svg" alt="version badge"/>
                    </a>
                </div>
            </section>

            <section id="vulkan-guide" className="pt-20 content_section" data-link-title="Vulkan Guide">
                <h2>Vulkan Guide</h2>
                <a href="https://vkguide.dev/" target="_blank" rel="noreferrer">
                    An alternate Vulkan beginner tutorial.
                </a>
            </section>


        </BaseLayout>

    </>
  );
}
