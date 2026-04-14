import { Layout } from "@/components/layout/Layout";

const images = [
  { src: "/images/globiculum/hero.png", alt: "Globiculum Hero", contained: false },
  { src: "/images/globiculum/challenge.png", alt: "The Challenge Families Face", contained: false },
  { src: "/images/globiculum/roadmap.png", alt: "Roadmap", contained: false },
  { src: "/images/globiculum/difference.png", alt: "The Globiculum Difference", contained: false },
  { src: "/images/globiculum/traditional-vs.png", alt: "Traditional vs Globiculum", contained: false },
  { src: "/images/globiculum/report.png", alt: "Transition Readiness Report", contained: true },
];

const GlobiculumPreview = () => {
  return (
    <Layout>
      <section className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-2">
          <p className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider text-center">
            Preview of Globiculum
          </p>
        </div>
        <div
          className="w-full max-w-5xl mx-auto"
          style={{ pointerEvents: "none", userSelect: "none" }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              loading={i === 0 ? "eager" : "lazy"}
              draggable={false}
              className={`h-auto block mx-auto ${img.contained ? "w-auto max-w-md sm:max-w-lg md:max-w-xl" : "w-full"}`}
              style={{
                borderBottom:
                  i < images.length - 1
                    ? "1px solid rgba(0,0,0,0.06)"
                    : "none",
              }}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default GlobiculumPreview;
