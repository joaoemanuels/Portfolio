import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/index.jsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

function App() {
	return (
		<BrowserRouter>
			<AppRoutes />
			<Analytics />
			<SpeedInsights />
		</BrowserRouter>
	);
}

export default App;
