import { AiFillStar } from "react-icons/ai";

const chemicalProducts = [
  {
    id: 1,
    img: "https://www.carlroth.com/medias/T196-1000Wx1000H?context=bWFzdGVyfGltYWdlc3w1MDM1N3xpbWFnZS9qcGVnfGFXMWhaMlZ6TDJnM1lpOW9PR0l2T1RBek56QTNOell4TURVeU5pNXFjR2N8YWY0MmMwZDQzZDlkNjI3MzYzYmIwMmY4MjY4ZmZlMzVlYzZhYTEyOTM0N2E0OGUzMzBjMDc1YTM2YmYyODk1Mw",
    title: "Sodium Hydroxide (NaOH)",
    star: <AiFillStar className="rating-star" />,
    reviews: "(250 reviews)",
    prevPrice: "$150.00",
    newPrice: "$120.00",
    company: "ChemCo Industries",
    color: "white",
    category: "alkali",
    description: "Sodium Hydroxide, also known as lye, is a powerful alkali commonly used in industrial cleaning and manufacturing.",
    bids: [{ amount: 110, user: "Alice Johnson" }, { amount: 115, user: "Bob Williams" }]
  },
  {
    id: 2,
    img: "https://www.carlroth.com/medias/T196-1000Wx1000H?context=bWFzdGVyfGltYWdlc3w1MDM1N3xpbWFnZS9qcGVnfGFXMWhaMlZ6TDJnM1lpOW9PR0l2T1RBek56QTNOell4TURVeU5pNXFjR2N8YWY0MmMwZDQzZDlkNjI3MzYzYmIwMmY4MjY4ZmZlMzVlYzZhYTEyOTM0N2E0OGUzMzBjMDc1YTM2YmYyODk1Mw",
    title: "Acetone (CH3COCH3)",
    star: <AiFillStar className="rating-star" />,
    reviews: "(85 reviews)",
    prevPrice: "$80.00",
    newPrice: "$65.00",
    company: "Global Chemicals",
    color: "clear",
    category: "solvent",
    description: "Acetone is a colorless, volatile liquid used in the production of plastics and other industrial products.",
    bids: [{ amount: 60, user: "Sarah Davis" }, { amount: 62, user: "Michael Thompson" }]
  },
  {
    id: 3,
    img: "https://www.carlroth.com/medias/T196-1000Wx1000H?context=bWFzdGVyfGltYWdlc3w1MDM1N3xpbWFnZS9qcGVnfGFXMWhaMlZ6TDJnM1lpOW9PR0l2T1RBek56QTNOell4TURVeU5pNXFjR2N8YWY0MmMwZDQzZDlkNjI3MzYzYmIwMmY4MjY4ZmZlMzVlYzZhYTEyOTM0N2E0OGUzMzBjMDc1YTM2YmYyODk1Mw",
    title: "Sulfuric Acid (H2SO4)",
    star: <AiFillStar className="rating-star" />,
    reviews: "(340 reviews)",
    prevPrice: "$200.00",
    newPrice: "$175.00",
    company: "Industrial Solutions",
    color: "brown",
    category: "acid",
    description: "Sulfuric Acid is a highly corrosive mineral acid used in fertilizer production and chemical synthesis.",
    bids: [{ amount: 170, user: "Emily White" }, { amount: 173, user: "James Clark" }]
  },
  {
    id: 4,
    img: "https://www.carlroth.com/medias/T196-1000Wx1000H?context=bWFzdGVyfGltYWdlc3w1MDM1N3xpbWFnZS9qcGVnfGFXMWhaMlZ6TDJnM1lpOW9PR0l2T1RBek56QTNOell4TURVeU5pNXFjR2N8YWY0MmMwZDQzZDlkNjI3MzYzYmIwMmY4MjY4ZmZlMzVlYzZhYTEyOTM0N2E0OGUzMzBjMDc1YTM2YmYyODk1Mw",
    title: "Polyethylene Glycol (PEG)",
    star: <AiFillStar className="rating-star" />,
    reviews: "(120 reviews)",
    prevPrice: "$90.00",
    newPrice: "$75.00",
    company: "PolyChem Supplies",
    color: "white",
    category: "polymer",
    description: "Polyethylene Glycol is a polymer commonly used in pharmaceuticals, cosmetics, and chemical manufacturing.",
    bids: [{ amount: 70, user: "Christopher Moore" }, { amount: 73, user: "Jessica Anderson" }]
  },
  {
    id: 5,
    img: "https://www.carlroth.com/medias/T196-1000Wx1000H?context=bWFzdGVyfGltYWdlc3w1MDM1N3xpbWFnZS9qcGVnfGFXMWhaMlZ6TDJnM1lpOW9PR0l2T1RBek56QTNOell4TURVeU5pNXFjR2N8YWY0MmMwZDQzZDlkNjI3MzYzYmIwMmY4MjY4ZmZlMzVlYzZhYTEyOTM0N2E0OGUzMzBjMDc1YTM2YmYyODk1Mw",
    title: "Calcium Carbonate (CaCO3)",
    star: <AiFillStar className="rating-star" />,
    reviews: "(150 reviews)",
    prevPrice: "$150.00",
    newPrice: "$140.00",
    company: "Mineral Corp",
    color: "white",
    category: "mineral",
    description: "Calcium Carbonate is a widely used mineral in the construction, plastic, and agriculture industries.",
    bids: [{ amount: 135, user: "Linda Martin" }, { amount: 137, user: "William Taylor" }]
  },
  {
    id: 6,
    img: "https://www.carlroth.com/medias/T196-1000Wx1000H?context=bWFzdGVyfGltYWdlc3w1MDM1N3xpbWFnZS9qcGVnfGFXMWhaMlZ6TDJnM1lpOW9PR0l2T1RBek56QTNOell4TURVeU5pNXFjR2N8YWY0MmMwZDQzZDlkNjI3MzYzYmIwMmY4MjY4ZmZlMzVlYzZhYTEyOTM0N2E0OGUzMzBjMDc1YTM2YmYyODk1Mw",
    title: "Calcium",
    star: <AiFillStar className="rating-star" />,
    reviews: "(200 reviews)",
    prevPrice: "$50.00",
    newPrice: "$70.00",
    company: "Mineral Corp",
    color: "white",
    category: "mineral",
    description: "Calcium is a mineral used in various industries, including pharmaceuticals, food production, and chemical manufacturing.",
    bids: [{ amount: 65, user: "David Lewis" }, { amount: 68, user: "Susan Walker" }]
  },
  {
    id: 7,
    img: "https://www.carlroth.com/medias/T196-1000Wx1000H?context=bWFzdGVyfGltYWdlc3w1MDM1N3xpbWFnZS9qcGVnfGFXMWhaMlZ6TDJnM1lpOW9PR0l2T1RBek56QTNOell4TURVeU5pNXFjR2N8YWY0MmMwZDQzZDlkNjI3MzYzYmIwMmY4MjY4ZmZlMzVlYzZhYTEyOTM0N2E0OGUzMzBjMDc1YTM2YmYyODk1Mw",
    title: "Calcium",
    star: <AiFillStar className="rating-star" />,
    reviews: "(200 reviews)",
    prevPrice: "$50.00",
    newPrice: "$40.00",
    company: "Mineral Corp",
    color: "white",
    category: "mineral",
    description: "Calcium is a white mineral used in construction, chemical processing, and food production.",
    bids: [{ amount: 38, user: "Patricia Harris" }, { amount: 40, user: "Daniel Young" }]
  },
  {
    id: 8,
    img: "https://www.carlroth.com/medias/T196-1000Wx1000H?context=bWFzdGVyfGltYWdlc3w1MDM1N3xpbWFnZS9qcGVnfGFXMWhaMlZ6TDJnM1lpOW9PR0l2T1RBek56QTNOell4TURVeU5pNXFjR2N8YWY0MmMwZDQzZDlkNjI3MzYzYmIwMmY4MjY4ZmZlMzVlYzZhYTEyOTM0N2E0OGUzMzBjMDc1YTM2YmYyODk1Mw",
    title: "Nitrogen (N2)",
    star: <AiFillStar className="rating-star" />,
    reviews: "(300 reviews)",
    prevPrice: "$100.00",
    newPrice: "$90.00",
    company: "GasCorp",
    color: "colorless",
    category: "gas",
    description: "Nitrogen gas is used in various industries, including food preservation, electronics manufacturing, and chemical synthesis.",
    bids: [{ amount: 85, user: "Mark King" }, { amount: 87, user: "Barbara Scott" }]
  }
];


export default chemicalProducts;
