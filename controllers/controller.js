export default class GeralController {
    constructor() {
        this.admin = async (req, res) => {
            res.render("index");
        };
        this.home = async (req, res) => {
            res.render("site/home");
        };
        this.formulario = async (req, res) => {
            res.render("index");
        };
    }
}
