export default function App() {
  return (
    <main className="container bg-eggshell">
      <section
        className="card bg-white color-wenge-brown outfit"
        style={{ maxWidth: "700px" }}
      >
        <img
          className="image"
          alt="delicious taco"
          src="https://res.cloudinary.com/dts5hyzdq/image/upload/q_80,f_avif/v1709381264/Frontend%20Mentor/00%20Recipe%20Page/image-omelette.jpg"
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
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
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
              <span className="color-wenge-brown">
                Approximately 10 minutes
              </span>
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
        <hr style={{ color: "rgba(0,0,0,0.2)", marginBlock: "3rem" }} />
        <div>
          <h3 className="title young-serif color-nutmeg">Instructions</h3>
          <ol
            className="list"
            style={{ color: "var(--nutmeg)", fontWeight: 700 }}
          >
            <li>
              <span style={{ color: "var(--wenge-brown)" }}>
                Beat the eggs:{" "}
              </span>
              <span style={{ color: "var(--wenge-brown)", fontWeight: 400 }}>
                In a bowl, beat the eggs with a pinch of salt and pepper until
                they are well mixed. You can add a tablespoon of water or milk
                for a fluffier texture.
              </span>
            </li>
            <li>
              <span style={{ color: "var(--wenge-brown)" }}>Heat the pan:</span>{" "}
              <span style={{ color: "var(--wenge-brown)", fontWeight: 400 }}>
                Place a non-stick frying pan over medium heat and add butter or
                oil.
              </span>
            </li>
            <li>
              <span style={{ color: "var(--wenge-brown)" }}>
                Cook the omelette:
              </span>{" "}
              <span style={{ color: "var(--wenge-brown)", fontWeight: 400 }}>
                Once the butter is melted and bubbling, pour in the eggs. Tilt
                the pan to ensure the eggs evenly coat the surface.
              </span>
            </li>
            <li>
              <span style={{ color: "var(--wenge-brown)" }}>
                Add fillings (optional):
              </span>{" "}
              <span style={{ color: "var(--wenge-brown)", fontWeight: 400 }}>
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </span>
            </li>
            <li>
              <span style={{ color: "var(--wenge-brown)" }}>
                Fold and serve:
              </span>{" "}
              <span style={{ color: "var(--wenge-brown)", fontWeight: 400 }}>
                As the omelette continues to cook, carefully lift one edge and
                fold it over the fillings. Let it cook for another minute, then
                slide it onto a plate.
              </span>
            </li>
            <li>
              <span style={{ color: "var(--wenge-brown)" }}>Enjoy:</span>{" "}
              <span style={{ color: "var(--wenge-brown)", fontWeight: 400 }}>
                Serve hot, with additional salt and pepper if needed.
              </span>
            </li>
          </ol>
        </div>
        <hr style={{ color: "rgba(0,0,0,0.2)", marginBlock: "3rem" }} />
        <div>
          <h3 className="title young-serif color-nutmeg">Nutrition</h3>
          <p style={{ marginBlock: "1rem" }}>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontFamily: "Outfit",
              color: "var(--wenge-brown)",
            }}
          >
            <tbody>
              <tr
                style={{
                  borderBottom: "1px solid rgba(0,0,0,0.15)",
                }}
              >
                <td style={{ padding: "1rem" }}>Calories</td>
                <td
                  style={{
                    padding: "1rem",
                    fontWeight: 700,
                    color: "var(--nutmeg)",
                  }}
                >
                  277kcal
                </td>
              </tr>
              <tr
                style={{
                  borderBottom: "1px solid rgba(0,0,0,0.15)",
                }}
              >
                <td style={{ padding: "1rem" }}>Carbs</td>
                <td
                  style={{
                    padding: "1rem",
                    fontWeight: 700,
                    color: "var(--nutmeg)",
                  }}
                >
                  0g
                </td>
              </tr>
              <tr
                style={{
                  borderBottom: "1px solid rgba(0,0,0,0.15)",
                }}
              >
                <td style={{ padding: "1rem" }}>Protein</td>
                <td
                  style={{
                    padding: "1rem",
                    fontWeight: 700,
                    color: "var(--nutmeg)",
                  }}
                >
                  20g
                </td>
              </tr>
              <tr>
                <td style={{ padding: "1rem" }}>Fat</td>
                <td
                  style={{
                    padding: "1rem",
                    fontWeight: 700,
                    color: "var(--nutmeg)",
                  }}
                >
                  22g
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
