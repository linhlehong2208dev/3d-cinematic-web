import { PROPERTY } from "@/data/propertyData";
export default function PropertySections() {
  return (
    <>
      {/* <section id="overview" className="bg-zinc-950 px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="text-xs tracking-[.3em] text-amber-400">
              THE RESIDENCE
            </p>
            <h2 className="mt-4 font-display text-5xl font-light md:text-7xl">
              Architecture
              <br />
              as experience.
            </h2>
          </div>
          <p className="max-w-xl self-end text-lg leading-8 text-white/55">
            Một nền tảng trình bày bất động sản được thiết kế để biến listing
            thành một hành trình có nhịp điệu, dữ liệu và điểm chuyển đổi rõ
            ràng.
          </p>
        </div>
      </section> */}
      {/* <section id="amenities" className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[.3em] text-amber-400">AMENITIES</p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
            {PROPERTY.amenities.map((a) => (
              <article key={a.title} className="bg-zinc-950 p-8 md:p-10">
                <div className="mb-16 h-2 w-10 bg-amber-400" />
                <h3 className="text-2xl font-light">{a.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/50">
                  {a.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section> */}
      {/* <section id="specs" className="bg-zinc-950 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[.3em] text-amber-400">
            PROPERTY SPECIFICATIONS
          </p>
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-4">
            {PROPERTY.specs.map((s) => (
              <div key={s.label} className="bg-zinc-950 p-7">
                <p className="text-xs uppercase tracking-widest text-white/35">
                  {s.label}
                </p>
                <p className="mt-3 text-xl">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}
