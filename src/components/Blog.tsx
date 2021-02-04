import Axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { Spin } from 'antd';
import { IBlog, IResponse } from '../model/IBlog';
import './Blog.css';

export interface IBlogProps {
    postData?: IBlog;
}

export default class Blog extends React.Component<IBlogProps> {
    state = {
        postData: {} as IBlog,
    };

    public render() {
        return (
            <div className="blog">
                {
                    this.state.postData?.data
                        ? this.state.postData?.data?.map(post => {
                            return (
                                <div>
                                    <section>
                                        <Link to={"/post/" + post.slug} key={post.slug} style={{ fontSize: "2em" }}>
                                            {post.title}
                                        </Link>
                                    </section>
                                    <time style={{ marginLeft: "0.5em" }}>
                                        {new Date(post.createOnUtc).toLocaleDateString()}
                                    </time>
                                    <article style={{ marginBottom: "30px" }}>{post.contentAbstract}</article>
                                </div>
                            );
                        })
                        : <Spin size="large" tip="Loading..."></Spin>
                }
            </div>
        );
    };

    public componentDidMount() {
        console.log('Blog componentDidMount');
        console.log(this.state.postData);
        Axios.get<IResponse>('/api/Blog?page=1')
            .then(res => {
                this.setState({ postData: res.data.response });
            })
            .catch(error => console.log(error));
    }

}