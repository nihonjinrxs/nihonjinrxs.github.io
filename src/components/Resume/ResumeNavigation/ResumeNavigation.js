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
    <NavigationMenu
      navItems={navItems}
      navOpen={navOpen}
      updateNavOpen={updateNavOpen}
    />
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
      <i className="fas fa-bars open-icon"></i>
      <i className="fal fa-times close-icon"></i>
    </button>
  );
}

function NavigationMenu ({
  navItems, navOpen, updateNavOpen
}) {
  return (
    <nav className={
      `floating-nav js-floating-nav${navOpen ? ' is-visible' : ''}`
    }>
      <ul className="list-unstyled">
        {navItems.map(item => {
          return (
            <NavigationLink
              title={item.title}
              icon={item.icon}
              slug={item.slug}
              navOpen={navOpen}
              updateNavOpen={updateNavOpen}
              key={item.slug}
            ></NavigationLink>
          );
        })}
      </ul>
    </nav>
  )
}

function NavigationLink ({ title, icon, slug, navOpen, updateNavOpen }) {
  return (
    <li key={slug}>
      <a href={`#${slug}`} onClick={(_ev) => {
        updateNavOpen(!navOpen);
      }}>
        <i className={`fa fa-${icon} navigation-icon`}></i>{title}
      </a>
    </li>
  )
}


export default ResumeNavigation;
