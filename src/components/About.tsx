export default function About() {
    return (
        // style="margin-top:10px;"
        <div className="container">
            <h3>Me and the Blog</h3>
            <hr />
            <div className="row">
                <div className="col-md-7">
                    <section id="self-intro">
                        <blockquote className="blockquote">
                            <p>
                                此博客为学习 .Net Core 和 Vue.js 学习的作品。
                        </p>
                        </blockquote>
                        <p>
                            Contact me: <a href="mailto:yang.caidong@foxmail.com">yang.caidong@foxmail.com</a>
                        </p>
                        <div>
                            <a href="https://github.com/cd-yang" className="btn btn-outline-success" target="_blank">
                                <span className="icon-github"></span>
                            GitHub
                        </a>

                        </div>
                    </section>
                </div>

            </div>
        </div>
    );
}