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
                                <Link to={"/post/" + post.slug} key={post.slug}>
                                    <div className="post-listing">
                                        <h1>{post.title}</h1>
                                    </div>
                                </Link>
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