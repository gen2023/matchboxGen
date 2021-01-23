import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from '../../services/routes';

import NavigationItem from './NavigationItem';

import HomePage from '../../Pages/Home';
import AboutPage from '../../Pages/About';
import CategoryPage from '../../Pages/Gallery';
import CategoryItemsPage from '../../Pages/GalleryItems';
import NotFoundPage from '../../Pages/NotFound';
import ArticlesPage from '../../Pages/Articles';
import News from '../../Pages/News';
import AddImage from '../../Pages/AddImage';

import list from '../../json/navigation.json';
import './navigation.css';

class Navigation extends Component {
  render() {
    return (
      <>
        <nav className="listHeader">
          <ul>
            {list.map(({ id, heading, link }) => (
              <NavigationItem key={id} name={heading} link={link} />
            ))}
          </ul>
        </nav>

        <Switch>
          <Route path={routes.home} exact component={HomePage} />
          <Route path={routes.about} component={AboutPage} />
          <Route path={routes.category} exact component={CategoryPage} />
          <Route path={routes.categoryItems} component={CategoryItemsPage} />
          <Route path={routes.articles} component={ArticlesPage} />
          <Route path={routes.news} component={News} />
          <Route path={routes.add} component={AddImage} />
          <Route render={props => <NotFoundPage {...props} />} />
        </Switch>
      </>
    );
  }
}

export default Navigation;
