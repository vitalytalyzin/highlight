import React from 'react';
import PropTypes from 'prop-types';

const WithWrapper = (views, PopularWrapper, NewWrapper) => Component => {
  return class extends React.Component {

    getCurrentWrapper() {
      const amountOfPopularViews = 1000;
      const amountOfNewViews = 100;
      const innerComponent = <Component {...this.props} />;
      let wrapper;

      if (views >= amountOfPopularViews) {
        wrapper = (
          <PopularWrapper>
            {innerComponent}
          </PopularWrapper>
        );
      } else if (views > amountOfNewViews) {
          wrapper = (
            <NewWrapper>
              {innerComponent}
            </NewWrapper>
          );
      } else {
        wrapper = innerComponent;
      }

      return wrapper;
    }

    render() {
      return this.getCurrentWrapper();
    }
  }
};

WithWrapper.propTypes = {
  views: PropTypes.number,
  PopularWrapper: PropTypes.func,
  NewWrapper: PropTypes.func,
};

export default WithWrapper;
