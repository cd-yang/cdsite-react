import { Route, Switch } from 'react-router';
import About from './About';
import Blog from './Blog';
import Post from './Post';
import NotFound from './NotFound';
import AdminIndex from './admin/AdminIndex';
import './Body.css';

export default function Body() {
    return (
        <div className="bodyContent">
            <Switch>
                <Route path="/" exact component={Blog} />
                <Route path="/about" component={About} />
                <Route path="/post/:slug" component={Post} />
                <Route path="/admin" component={AdminIndex} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}