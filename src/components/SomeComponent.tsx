const SomeComponent = () => {
  console.log(
    "%cSomeComponent RENDER",
    "color: white; background-color: black"
  );
  return (
    <div
      style={{
        background: "red",
        color: "white",
        fontSize: "2rem",
      }}
    >
      <span>SomeComponent</span>
    </div>
  );
};

export { SomeComponent };
