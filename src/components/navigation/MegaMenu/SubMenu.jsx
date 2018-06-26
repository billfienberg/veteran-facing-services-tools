import React from 'react';
import PropTypes from 'prop-types';

class SubMenu extends React.Component {
  render() {
    const { mainColumn, columnOne, columnTwo, columnThree, seeAllLink } = this.props.data;

    if (this.props.show) {
      return (
        <div>
          {
            mainColumn && <ul
              className="vetnav-panel vetnav-panel--submenu panel-main"
              id="vetnav-disability"
              role="menu"
              aria-label="Disability">
              <li className="panel-title">{mainColumn.title}</li>
              { mainColumn.links.map((link, i) => (
                <li key={`${link.href}-${i}`}><a href={link.href}>{link.text}</a></li>
              ))}
            </ul>
          }
          <ul
            className={`vetnav-panel vetnav-panel--submenu panel-1 ${mainColumn && 'panel-white'}`}
            id="vetnav-disability"
            role="menu"
            aria-label="Disability">
            <li className="panel-title">{columnOne.title}</li>
            { columnOne.links.map((link, i) => (
              <li key={`${link.href}-${i}`}><a href={link.href}>{link.text}</a></li>
            ))}

            {
              !mainColumn && <div className="panel-bottom-link">
                {
                  seeAllLink && <a href={seeAllLink.href}>View All in {seeAllLink.text}</a>
                }
              </div>
            }
          </ul>
          {
            columnTwo ? <ul
              className={`vetnav-panel vetnav-panel--submenu panel-2 ${mainColumn && 'panel-white'}`}
              id="vetnav-disability"
              role="menu"
              aria-label="Disability">
              <li className="panel-title">{columnTwo.title}</li>
              { columnTwo.links.map((link, i) => (
                <li key={`${link.href}-${i}`}><a href={link.href}>{link.text}</a></li>
              ))}
            </ul> : <ul
              className={`vetnav-panel vetnav-panel--submenu panel-2 ${mainColumn && 'panel-white'}`}
              id="vetnav-disability"
              role="menu"
              aria-label="Disability">
            </ul>
          }
          <div
            className="vetnav-panel vetnav-panel--submenu panel-3"
            id="vetnav-disability"
            role="menu"
            aria-label="Disability">
            <img src={columnThree.img.src} alt={columnThree.img.alt}></img>
            <a href={columnThree.link.href}>{columnThree.link.text}</a>
            <p>{columnThree.description}</p>
          </div>
        </div>
      );
    }

    return (
      <div></div>
    );
  }
}

SubMenu.propTypes = {
  data: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
};

SubMenu.defaultProps = {
};

export default SubMenu;
