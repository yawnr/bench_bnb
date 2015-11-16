$(function () {

  var root = document.getElementById('content');
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var Link = ReactRouter.Link;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function () {
      return (
        <div>
          <h1><Link to="/">Bench BnB</Link></h1>
          <p><Link to="/benches/new">New Bench</Link></p>
          {this.props.children}
        </div>
      );
    }
  });

  var routes = (

      <Route path="/" component={App}>
        <IndexRoute component={Search} />
        <Route path="/benches/new" component={BenchForm} />
      </Route>

  );

  React.render(<Router>{routes}</Router>, root);

});
