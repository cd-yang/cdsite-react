import { Route, Switch } from 'react-router';
import About from './About';
import Blog from './Blog';
import Post from './Post';

export default function Body() {
    return (
        <Switch>
            <Route path="/" exact component={Blog} />
            <Route path="/about" component={About} />
            <Route path="/post/:slug" component={Post} />
        </Switch>
    );
}