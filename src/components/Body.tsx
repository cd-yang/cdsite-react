import { Route, Switch } from 'react-router';
import About from './About';
import Blog from './Blog';
import Post from './Post';
import './Body.css';

export default function Body() {
    return (
        <div className="bodyContent">
            <Switch>
                <Route path="/" exact component={Blog} />
                <Route path="/about" component={About} />
                <Route path="/post/:slug" component={Post} />
            </Switch>
        </div>
    );
}