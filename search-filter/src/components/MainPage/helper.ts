type AgeLimits = {
  lower: number | null;
  upper: number | null;
};

export default function checkAgeRange(range: string): AgeLimits {
  switch (range) {
    case "20-30":
      return { lower: 20, upper: 30 };

    case "30-40":
      return { lower: 30, upper: 40 };

    case "40-50":
      return { lower: 40, upper: 50 };

    case "50+":
      return { lower: 50, upper: null };

    case "All Ages":
    default:
      return { lower: null, upper: null };
  }
}
