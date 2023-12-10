import { Container } from "../../utils";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="header-category">
      <Container>
        <div className="navbar">
          {/* Blush */}
          <div className="dropdown">
            <button className="dropbtn">Blush</button>
            <div className="dropdown-content">
              <div className="all-category">
                <span>All </span>
                <Link to="/">All product</Link>
              </div>
              <div className="drop-category">
                <span>Category</span>
                <Link to="/">Powder</Link>
                <Link to="/">Cream</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Vegan</Link>
                <Link to="/">Gluten free</Link>
                <Link to="/">Canadian</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Natural</Link>
                <Link to="/">Non-gmo</Link>
                <Link to="/">Purpicks</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Unda organic</Link>
                <Link to="/">Organic</Link>
                <Link to="/">Certclean</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Ewg verified</Link>
                <Link to="/">Hoypollargenic</Link>
                <Link to="/">No talc</Link>
              </div>
            </div>
          </div>
          {/* Bronzer */}
          <div className="dropdown">
            <button className="dropbtn">Bronzer</button>
            <div className="dropdown-content">
              <div className="all-category">
                <span>All </span>
                <Link to="/">All product</Link>
              </div>
              <div className="drop-category">
                <span>Category</span>
                <Link to="/">Powder</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Gluten free</Link>
                <Link to="/">Canadian</Link>
                <Link to="/">Natural</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Organic</Link>
                <Link to="/">Vegan</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Purpicks</Link>
                <Link to="/">Ewg verified</Link>
              </div>
            </div>
          </div>
          {/* Eyebrow */}
          <div className="dropdown">
            <button className="dropbtn">Eyebrow</button>
            <div className="dropdown-content">
              <div className="all-category">
                <span>All </span>
                <Link to="/">All product</Link>
              </div>
              <div className="drop-category">
                <span>Category</span>
                <Link to="/">Pencil</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Ewg verified</Link>
                <Link to="/">Purpicks</Link>
              </div>
            </div>
          </div>
          {/* Eyeliner */}
          <div className="dropdown">
            <button className="dropbtn">Eyeliner</button>
            <div className="dropdown-content">
            <div className="all-category">
                <span>All </span>
                <Link to="/">All product</Link>
              </div>
              <div className="drop-category">
                <span>Category</span>
                <Link to="/">Pencil</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Ewg verified</Link>
                <Link to="/">Purpicks</Link>

              </div>
            </div>
          </div>
          {/* Eyeshadow */}
          <div className="dropdown">
            <button className="dropbtn">Eyeshadow</button>
            <div className="dropdown-content">
            <div className="all-category">
                <span>All </span>
                <Link to="/">All product</Link>
              </div>
              <div className="drop-category">
                <span>Category</span>
                <Link to="/">Liquid</Link>
                <Link to="/">Pencil</Link>
                <Link to="/">Gel</Link>
                <Link to="/">Cream</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Vegan</Link>
                <Link to="/">Natural</Link>
                <Link to="/">Canadian</Link>
                <Link to="/">Gluten free</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Organic</Link>
                <Link to="/">Purpicks</Link>
                <Link to="/">Certclean</Link>
                <Link to="/">Ewg verified</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Hypoallergenic</Link>
                <Link to="/">No talc</Link>
                <Link to="/">Ecocert</Link>
              </div>
            </div>
          </div>
          {/* Foundation */}
          <div className="dropdown">
            <button className="dropbtn">Foundation</button>
            <div className="dropdown-content">
              <div className="all-category">
                <span>All </span>
                <Link to="/">All product</Link>
              </div>
              <div className="drop-category">
                <span>Category</span>
                <Link to="/">Concealer</Link>
                <Link to="/">Liquid</Link>
                <Link to="/">Contour</Link>
                <Link to="/">Bb cc</Link>
                <Link to="/">Cream</Link>
                <Link to="/">Mineral</Link>
                <Link to="/">Powder</Link>
                <Link to="/">Highlighter</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Vegan</Link>
                <Link to="/">Canadian</Link>
                <Link to="/">Natural</Link>
                <Link to="/">Gluten free</Link>
                <Link to="/">Purpicks</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Certclean</Link>
                <Link to="/">Ewg verified</Link>
                <Link to="/">Hypoallergenic</Link>
                <Link to="/">No talc</Link>
                <Link to="/">Water free</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Cruelty free</Link>
                <Link to="/">Alcohol free</Link>
                <Link to="/">Oil free</Link>
                <Link to="/">Silicone free</Link>
              </div>
            </div>
          </div>
          {/* Lip liner */}
          <div className="dropdown">
            <button className="dropbtn">Lip liner</button>
            <div className="dropdown-content">
              <div className="all-category">
                <span>All </span>
                <Link to="/">All product</Link>
              </div>
              <div className="drop-category">
                <span>Category</span>
                <Link to="/">Pencil</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Natural</Link>
                <Link to="/">Vegan</Link>
                <Link to="/">Gluten free</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Canadian</Link>
                <Link to="/">Purpicks</Link>
                <Link to="/">Ewg verified</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Hypoallergenic</Link>
                <Link to="/">No talc</Link>
                <Link to="/">Cruelty free</Link>
              </div>
            </div>
          </div>
          {/* Lipstick */}
          <div className="dropdown">
            <button className="dropbtn">Lipstick</button>
            <div className="dropdown-content">
              <div className="all-category">
                <span>All </span>
                <Link to="/">All product</Link>
              </div>
              <div className="drop-category">
                <span>Category</span>
                <Link to="/">Lipstick</Link>
                <Link to="/">Lip gloss</Link>
                <Link to="/">Liquid</Link>
                <Link to="/">Lip stain - JSON</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Canadian</Link>
                <Link to="/">Natural</Link>
                <Link to="/">Gluten free</Link>
                <Link to="/">Vegan</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Non-gmo</Link>
                <Link to="/">Peanut free product</Link>
                <Link to="/">Cruelty free</Link>
                <Link to="/">Organic</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Purpicks</Link>
                <Link to="/">Certclean</Link>
                <Link to="/">Chemical free</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Ewg verified</Link>
                <Link to="/">Hypoallergenic</Link>
                <Link to="/">No talc</Link>
              </div>
            </div>
          </div>
          {/* Mascara */}
          <div className="dropdown">
            <button className="dropbtn">Mascara</button>
            <div className="dropdown-content">
              <div className="all-category">
                <span>All </span>
                <Link to="/">All product</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Natural</Link>
                <Link to="/">Gluten free</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Vegan</Link>
                <Link to="/">Canadian</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Organic</Link>
                <Link to="/">Purpicks</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Ewg verified</Link>
                <Link to="/">Hypoallergenic</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">No talc</Link>
                <Link to="/">Ecocert</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Usda organic</Link>
                <Link to="/">Certclean</Link>
              </div>
            </div>
          </div>
          {/* Nail polish */}
          <div className="dropdown">
            <button className="dropbtn">Nail polish</button>
            <div className="dropdown-content">
              <div className="all-category">
                <span>All </span>
                <Link to="/">All product</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Vegan</Link>
                <Link to="/">Canadian</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Natural</Link>
                <Link to="/">Gluten</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Fair trade</Link>
                <Link to="/">Sugar free</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/">Non-gmo</Link>
                <Link to="/">Dairy free</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Nav;
