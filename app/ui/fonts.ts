import { Quicksand, Poppins, MonteCarlo } from "next/font/google";

export const quicksand = Quicksand({
    subsets: ["latin"],
    variable: "--font-quicksand",
    weight: ["300", "400", "500", "600", "700"],
});

export const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const monteCarlo = MonteCarlo({
    subsets: ["latin"],
    variable: "--font-montecarlo",
    weight: ["400"],
});
