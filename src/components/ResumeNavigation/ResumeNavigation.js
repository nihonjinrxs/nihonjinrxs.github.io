import React, { useState } from 'react';
import "./ResumeNavigation.css";

function ResumeNavigation ({
  sections
}) {
  const [navOpen, updateNavOpen] = useState(false);
  const navItems = sections ? Object.values(sections) : [];
  return (<>
    <NavigationTrigger navOpen={navOpen} clickHandler={(ev) => {
      ev.preventDefault();
      updateNavOpen(!navOpen);
    }} />
    <NavigationMenu navItems={navItems} navOpen={navOpen} />
  </>);
}

function NavigationTrigger ({
  clickHandler, navOpen
}) {
  return (
    <button
      className={`js-floating-nav-trigger floating-nav-trigger${
        navOpen ? ' is-open' : ''
      }`}
      onClick={clickHandler}
    >
      <i className="fad fa-bars"></i>
      <span className="close-icon">×</span>
    </button>
  );
}

function NavigationMenu ({
  navItems, navOpen
}) {
  return (
    <nav className={`floating-nav js-floating-nav${navOpen ? ' is-visible' : ''
      }`}>
      <ul className="list-unstyled">
        {navItems.map(item => NavigationLink(item))}
      </ul>
    </nav>
  )
}

function NavigationLink ({ title, icon, slug }) {
  return (
    <li key={slug}><a href={`#${slug}`}><i className={`fa fa-${icon}`}></i>{title}</a></li>
  )
}


export default ResumeNavigation;
