import Axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

interface IBlog {
    id: number;
    title: string;
    author: string;
    slug: string;
    content: string;
}
interface IPosts {
    data: IBlog[];
    dataCount: number;
    page: number;
    pageCount: number;
    pageSize: number;
}
interface IResponse {
    msg: string;
    response: IPosts;
    status: number;
    success: boolean;
}

interface Props {
    postData?: IPosts;
}

export default class Blog extends React.Component<Props> {
    state = {
        postData: {} as IPosts,
    };

    public render() {
        return (
            <div className="blog">
                {this.state.postData?.data ? this.state.postData?.data?.map(post => {
                    return (
                        <Link to={"/post/" + post.slug} key={post.slug}>
                            <div className="post-listing">
                                <h1>{post.title}</h1>
                            </div>
                        </Link>
                    );
                }) : <div>no data</div>}
            </div>
        );
    };

    public componentDidMount() {
        console.log('componentDidMount');
        Axios.get<IResponse>('/api/Blog?page=1')
            .then(res => {
                this.setState({ postData: res.data.response });
            })
            .catch(error => console.log(error));
    }

}