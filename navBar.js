//nav bar component
class NavBar extends React.Component {
  render() {
    return (
      <a href="index.html">Home</a>&nbsp;
      <a href="shop.html">Collections</a>&nbsp;
      <a href="dashboard.html">Dashboard</a>&nbsp;
      <CartButton />
    );
  }
}

//my cart button
class CartButton extends React.Component {
  render() {
    return (

    );
  }
}

ReactDOM.render(
  <NavBar />,
  document.getElementById('navigation')
);
