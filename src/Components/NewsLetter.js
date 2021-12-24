export default function NewsLetter() {
  return (
    <div
      className="maxWidthHold"
      style={{
        padding: "80px 0",
        margin: "80px 0",
        backgroundColor: "#0A033C",
        borderRadius: "1.3em",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <img
        src="./image/letterImg1.png"
        alt="letter image"
        style={{
          position: "absolute",
          left: "50px",
          top: "50px",
        }}
      />
      <img
        src="./image/letterImg2.png"
        alt="letter image"
        style={{
          position: "absolute",
          left: "150px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
      <img
        src="./image/letterImg3.png"
        alt="letter image"
        style={{
          position: "absolute",
          left: "50px",
          bottom: "50px",
        }}
      />
      <h1
        style={{
          color: "white",
          width: "50%",
          textAlign: "center",
          fontSize: "2.5rem",
        }}
      >
        Subscribe For Get Update Every New Courses
      </h1>
      <p
        style={{
          color: "rgba(255, 255, 255, 0.7)",
          margin: "1em 0 3em 0",
        }}
      >
        20k+ students daily learn with Eduvi. Subscribe for new courses.
      </p>
      <form>
        <input
          type="email"
          placeholder="enter your email"
          style={{
            padding: "1em 1.3em",
            width: "200px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            color: "white",
            border: "none",
            outline: "none",
            borderRadius: "10px 0px 0px 10px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "1em 2em",
            border: "none",
            outline: "none",
            backgroundColor: "#9C4DF4",
            color: "white",
            borderRadius: "0px 10px 10px 0px",
          }}
        >
          Subscribe
        </button>
      </form>
      <img
        src="./image/letterImg4.png"
        alt="letter image"
        style={{
          position: "absolute",
          right: "50px",
          top: "50px",
        }}
      />
      <img
        src="./image/letterImg5.png"
        alt="letter image"
        style={{
          position: "absolute",
          right: "150px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
      <img
        src="./image/letterImg6.png"
        alt="letter image"
        style={{
          position: "absolute",
          right: "50px",
          bottom: "50px",
        }}
      />
    </div>
  );
}
