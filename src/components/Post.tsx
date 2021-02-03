import Axios from 'axios';
import { Spin } from 'antd';
import React from 'react';
import { IPost, IResponse } from '../model/IBlog';
import { RouteComponentProps } from 'react-router-dom';

interface IRouteInfo {
    slug: string;
}

interface IPostProps extends RouteComponentProps<IRouteInfo> {
}

export default class Post extends React.Component<IPostProps> {
    state = {
        post: {} as IPost,
    };

    public render() {
        return (
            this.state.post
                ? <div className="post-content-view">
                    <h1 className="title">{this.state.post ? this.state.post.title : 'no title'}</h1>
                    <article>{this.state.post?.content}</article>
                </div>
                : <Spin size="large" tip="Loading..."></Spin>
        );
    }

    public componentDidMount() {
        console.log('Post componentDidMount');
        let slug = this.props?.match?.params?.slug;
        if (!slug)
            return;
        Axios.get<IResponse>('/api/Blog/' + slug)
            .then(res => {
                console.log(res.data.response);
                this.setState({ post: res.data.response });
            })
            .catch(error => console.log(error));
    }

}

