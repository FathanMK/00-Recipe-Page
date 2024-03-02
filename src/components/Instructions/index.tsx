export default function Instructions() {
  return (
    <div>
      <h3 className="title young-serif color-nutmeg">Instructions</h3>
      <ol className="list" style={{ color: "var(--nutmeg)", fontWeight: 700 }}>
        <li>
          <span style={{ color: "var(--wenge-brown)" }}>Beat the eggs: </span>
          <span style={{ color: "var(--wenge-brown)", fontWeight: 400 }}>
            In a bowl, beat the eggs with a pinch of salt and pepper until they
            are well mixed. You can add a tablespoon of water or milk for a
            fluffier texture.
          </span>
        </li>
        <li>
          <span style={{ color: "var(--wenge-brown)" }}>Heat the pan:</span>{" "}
          <span style={{ color: "var(--wenge-brown)", fontWeight: 400 }}>
            Place a non-stick frying pan over medium heat and add butter or oil.
          </span>
        </li>
        <li>
          <span style={{ color: "var(--wenge-brown)" }}>
            Cook the omelette:
          </span>{" "}
          <span style={{ color: "var(--wenge-brown)", fontWeight: 400 }}>
            Once the butter is melted and bubbling, pour in the eggs. Tilt the
            pan to ensure the eggs evenly coat the surface.
          </span>
        </li>
        <li>
          <span style={{ color: "var(--wenge-brown)" }}>
            Add fillings (optional):
          </span>{" "}
          <span style={{ color: "var(--wenge-brown)", fontWeight: 400 }}>
            When the eggs begin to set at the edges but are still slightly runny
            in the middle, sprinkle your chosen fillings over one half of the
            omelette.
          </span>
        </li>
        <li>
          <span style={{ color: "var(--wenge-brown)" }}>Fold and serve:</span>{" "}
          <span style={{ color: "var(--wenge-brown)", fontWeight: 400 }}>
            As the omelette continues to cook, carefully lift one edge and fold
            it over the fillings. Let it cook for another minute, then slide it
            onto a plate.
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
  );
}
