import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.scss';

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
      <div className="links">
          <Link
              to="/privacy"
          >
              Privacy
          </Link>
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
