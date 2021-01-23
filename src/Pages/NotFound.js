import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import routes from '../services/routes';

class NotFound extends Component {
  render() {
    return (
      <div className="contentGeneral notFound">
        <div>
          <span>Страница временно недоступна</span>
        </div>
        <Link to={routes.home}>
          <span className="linkHome">Главная</span>
        </Link>
      </div>
    );
  }
}

export default NotFound;
