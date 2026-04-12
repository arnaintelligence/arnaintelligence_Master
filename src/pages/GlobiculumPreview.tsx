const images = [
  { src: "/images/globiculum/hero.png", alt: "Globiculum Hero" },
  { src: "/images/globiculum/challenge.png", alt: "The Challenge Families Face" },
  { src: "/images/globiculum/roadmap.png", alt: "Roadmap" },
  { src: "/images/globiculum/difference.png", alt: "The Globiculum Difference" },
  { src: "/images/globiculum/traditional-vs.png", alt: "Traditional vs Globiculum" },
  { src: "/images/globiculum/report.png", alt: "Transition Readiness Report" },
];

const GlobiculumPreview = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        background: "#ffffff",
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          loading={i === 0 ? "eager" : "lazy"}
          draggable={false}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderBottom: i < images.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
          }}
        />
      ))}
    </div>
  );
};

export default GlobiculumPreview;
