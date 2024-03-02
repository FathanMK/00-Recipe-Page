export default function Header() {
  return (
    <>
      <img
        className="image"
        alt="delicious taco"
        src="https://res.cloudinary.com/dts5hyzdq/image/upload/q_50,f_avif/v1709381264/Frontend%20Mentor/00%20Recipe%20Page/image-omelette.jpg"
      />
      <div style={{ marginTop: "3rem" }}>
        <h1
          className="title young-serif color-dark-charcoal"
          style={{ fontSize: "2.4rem" }}
        >
          Simple Omelette Recipe
        </h1>
        <p style={{ marginTop: "1rem" }}>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
      </div>
      <div className="card bg-rose-white" style={{ marginTop: "3rem" }}>
        <h2
          className="title outfit color-dark-raspberry"
          style={{ fontSize: "1.4rem" }}
        >
          Preparation time
        </h2>
        <ul
          className="list color-dark-raspberry"
          style={{ paddingLeft: "2rem" }}
        >
          <li>
            <span className="color-wenge-brown" style={{ fontWeight: 700 }}>
              Total:
            </span>{" "}
            <span className="color-wenge-brown">Approximately 10 minutes</span>
          </li>
          <li>
            <span className="color-wenge-brown" style={{ fontWeight: 700 }}>
              Preparation:
            </span>{" "}
            <span className="color-wenge-brown">5 minutes</span>
          </li>
          <li>
            <span className="color-wenge-brown" style={{ fontWeight: 700 }}>
              Cooking:
            </span>{" "}
            <span className="color-wenge-brown">5 minutes</span>
          </li>
        </ul>
      </div>
      <div style={{ marginTop: "3rem" }}>
        <h2 className="title young-serif color-nutmeg">Ingredients</h2>
        <ul className="list" style={{ color: "var(--wenge-brown)" }}>
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
      </div>
    </>
  );
}
