import React from "react";
import { Route, Switch , Link} from 'react-router-dom';
 
const AboutPage = function AboutPage() {
  return (
    <div>
     <h1> About Page</h1>
      <Link to="/">Home Page </Link>
    </div>
  );
};

const HomePage = function HomePage() {
  return (
    <div>
        <h1> Home Page</h1>
        <Link to="/?about">About / </Link>
        <Link to="/?shop">Shop / </Link>
        <Link to="/?404">404 / </Link>
    </div>
  );
};
const ShopPage = function ShopPage() {
  return (
    <div>
     <h1> Shop Page</h1>
      <Link to="/">Home Page </Link>
    </div>
  );
};

const ErrorPage =  function ErrorPage() {
  return (
    <div>
     <h1> 404 - Error Page</h1>
      <Link to="/">Home Page </Link>
    </div>
  );
};
export default function ExampleRoute() {
    return (
        <>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/?about" component={AboutPage} />
                <Route path="/?shop" component={ShopPage} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    );
}
