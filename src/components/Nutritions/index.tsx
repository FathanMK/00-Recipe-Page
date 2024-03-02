export default function Nutritions() {
  return (
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
  );
}
