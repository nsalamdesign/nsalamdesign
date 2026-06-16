import Container from "./Container";

export default function BrandStatement() {
  return (
    <section className="py-24 border-t border-white/10">
      
      <Container>
        
        <div className="grid md:grid-cols-2 gap-16">
          
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/40 mb-6">
              Philosophy
            </p>

            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
              Strong brands are not decoration.
            </h2>
          </div>

          <div>
            <p className="text-white/60 leading-relaxed text-lg">
              Every visual identity should communicate positioning,
              perception, and trust. A logo is not just a symbol —
              it is the visual entry point of a brand.
            </p>

            <p className="text-white/60 leading-relaxed text-lg mt-6">
              My focus is creating strategic visual systems that help
              businesses appear premium, recognizable, and memorable
              in competitive markets.
            </p>
          </div>

        </div>

      </Container>

    </section>
  );
}