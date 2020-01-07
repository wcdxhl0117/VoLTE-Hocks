import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';

// 引入组件
import Header from './components/header/header'
import Home from './pages/home/home'
import ChildPage from './pages/childpage/childpage'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* 路由页面 */}
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/home' exact component={Home}></Route>
            <Route path='/child' exact component={ChildPage}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
