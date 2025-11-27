export default class GeralController {
    constructor() {
        this.admin = async (req, res) => {
            res.render("index");
        };
        this.home = async (req, res) => {
            res.render("site/home");
        };
        this.about = async (req, res) => {
            res.render("site/about");
        };
        this.agenda = async (req, res) => {
            res.render("site/agenda");
        };
        this.stats = async (req, res) => {
            res.render("site/stats");
        };
        this.formulario = async (req, res) => {
            res.render("index");
        };
    }
}
