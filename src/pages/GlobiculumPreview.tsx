const GlobiculumPreview = () => {
  return (
    <div style={{ margin: 0, padding: 0, overflow: "hidden", width: "100vw", height: "100vh" }}>
      <img
        src="/images/globiculum-preview.png"
        alt="Globiculum Preview"
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
};

export default GlobiculumPreview;
