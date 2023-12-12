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
                <Link to="/product_type=blush">All product</Link>
              </div>
              <div className="drop-category">
                <span>Category</span>
                <Link to="/product_category=powder&product_type=blush">Powder</Link>
                <Link to="/product_category=cream&product_type=blush">Cream</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=Vegan&product_type=blush">Vegan</Link>
                <Link to="/product_tags=Gluten+Free&product_type=blush">Gluten free</Link>
                <Link to="/product_tags=Canadian&product_type=blush">Canadian</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=Natural&product_type=blush">Natural</Link>
                <Link to="/product_tags=Non-GMO&product_type=blush">Non-gmo</Link>
                <Link to="/product_tags=Non-GMO&product_type=blush">Purpicks</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=Non-GMO&product_type=blush">Unda organic</Link>
                <Link to="/product_tags=Non-GMO&product_type=blush">Organic</Link>
                <Link to="/product_tags=Non-GMO&product_type=blush">Certclean</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=Non-GMO&product_type=blush">Ewg verified</Link>
                <Link to="/product_tags=Non-GMO&product_type=blush">Hoypollargenic</Link>
                <Link to="/product_tags=Non-GMO&product_type=blush">No talc</Link>
              </div>
            </div>
          </div>
          {/* Bronzer */}
          <div className="dropdown">
            <button className="dropbtn">Bronzer</button>
            <div className="dropdown-content">
              <div className="all-category">
                <span>All </span>
                <Link to="/product_type=bronzer">All product</Link>
              </div>
              <div className="drop-category">
                <span>Category</span>
                <Link to="/product_tags=Non-GMO&product_type=blush">Powder</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Gluten free</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Canadian</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Natural</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Organic</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Vegan</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Purpicks</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Ewg verified</Link>
              </div>
            </div>
          </div>
          {/* Eyebrow */}
          <div className="dropdown">
            <button className="dropbtn">Eyebrow</button>
            <div className="dropdown-content">
              <div className="all-category">
                <span>All </span>
                <Link to="/product_type=eyebrow">All product</Link>
              </div>
              <div className="drop-category">
                <span>Category</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Pencil</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Ewg verified</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Purpicks</Link>
              </div>
            </div>
          </div>
          {/* Eyeliner */}
          <div className="dropdown">
            <button className="dropbtn">Eyeliner</button>
            <div className="dropdown-content">
            <div className="all-category">
                <span>All </span>
                <Link to="/product_type=eyebrow">All product</Link>
              </div>
              <div className="drop-category">
                <span>Category</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Pencil</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Ewg verified</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Purpicks</Link>

              </div>
            </div>
          </div>
          {/* Eyeshadow */}
          <div className="dropdown">
            <button className="dropbtn">Eyeshadow</button>
            <div className="dropdown-content">
            <div className="all-category">
                <span>All </span>
                <Link to="/product_type=eyebrow">All product</Link>
              </div>
              <div className="drop-category">
                <span>Category</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Liquid</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Pencil</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Gel</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Cream</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Vegan</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Natural</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Canadian</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Gluten free</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Organic</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Purpicks</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Certclean</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Ewg verified</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Hypoallergenic</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">No talc</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Ecocert</Link>
              </div>
            </div>
          </div>
          {/* Foundation */}
          <div className="dropdown">
            <button className="dropbtn">Foundation</button>
            <div className="dropdown-content">
              <div className="all-category">
                <span>All </span>
                <Link to="/product_type=eyebrow">All product</Link>
              </div>
              <div className="drop-category">
                <span>Category</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Concealer</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Liquid</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Contour</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Bb cc</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Cream</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Mineral</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Powder</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Highlighter</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Vegan</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Canadian</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Natural</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Gluten free</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Purpicks</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Certclean</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Ewg verified</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Hypoallergenic</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">No talc</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Water free</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Cruelty free</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Alcohol free</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Oil free</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Silicone free</Link>
              </div>
            </div>
          </div>
          {/* Lip liner */}
          <div className="dropdown">
            <button className="dropbtn">Lip liner</button>
            <div className="dropdown-content">
              <div className="all-category">
                <span>All </span>
                <Link to="/product_type=eyebrow">All product</Link>
              </div>
              <div className="drop-category">
                <span>Category</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Pencil</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Natural</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Vegan</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Gluten free</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Canadian</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Purpicks</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Ewg verified</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Hypoallergenic</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">No talc</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Cruelty free</Link>
              </div>
            </div>
          </div>
          {/* Lipstick */}
          <div className="dropdown">
            <button className="dropbtn">Lipstick</button>
            <div className="dropdown-content">
              <div className="all-category">
                <span>All </span>
                <Link to="/product_type=eyebrow">All product</Link>
              </div>
              <div className="drop-category">
                <span>Category</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Lipstick</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Lip gloss</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Liquid</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Lip stain - JSON</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Canadian</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Natural</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Gluten free</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Vegan</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Non-gmo</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Peanut free product</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Cruelty free</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Organic</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Purpicks</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Certclean</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Chemical free</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Ewg verified</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Hypoallergenic</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">No talc</Link>
              </div>
            </div>
          </div>
          {/* Mascara */}
          <div className="dropdown">
            <button className="dropbtn">Mascara</button>
            <div className="dropdown-content">
              <div className="all-category">
                <span>All </span>
                <Link to="/product_type=eyebrow">All product</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Natural</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Gluten free</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Vegan</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Canadian</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Organic</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Purpicks</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Ewg verified</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Hypoallergenic</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">No talc</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Ecocert</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Usda organic</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Certclean</Link>
              </div>
            </div>
          </div>
          {/* Nail polish */}
          <div className="dropdown">
            <button className="dropbtn">Nail polish</button>
            <div className="dropdown-content">
              <div className="all-category">
                <span>All </span>
                <Link to="/product_type=eyebrow">All product</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Vegan</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Canadian</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Natural</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Gluten</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Fair trade</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Sugar free</Link>
              </div>
              {/* tag */}
              <div className="drop-tag__category">
                <span>Tag</span>
                <Link to="/product_tags=No+Talc&product_type=blush">Non-gmo</Link>
                <Link to="/product_tags=No+Talc&product_type=blush">Dairy free</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Nav;
