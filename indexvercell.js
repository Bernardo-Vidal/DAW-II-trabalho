import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import routes from "./routes/route.js"; // rotas externas
import pacienteRoutes from "./routes/PacienteRoutes.js";
import laboratorioRoutes from "./routes/LaboratorioRoutes.js";
import loteRoutes from "./routes/LoteRoutes.js";
import vacinaRoutes from "./routes/VacinaRoutes.js";
import profissionalRoutes from "./routes/ProfissionalRoutes.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Caminho correto das views e public
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Servir arquivos estáticos
app.use(express.static(join(__dirname, "/public")));
app.set("views", join(__dirname, "/views"));

// Rotas
app.use(pacienteRoutes);
app.use(laboratorioRoutes);
app.use(loteRoutes);
app.use(vacinaRoutes);
app.use(profissionalRoutes);
app.use(routes);
app.listen(3000);
// Exporta o handler compatível com Vercel
export default app;
