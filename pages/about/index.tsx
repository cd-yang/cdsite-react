import Layout from '../../components/layout'

export default function About() {
    return (
        <Layout>
            <div>
                <h2>
                    前端学习中 · 骑行爱好者
                </h2>
                <hr />
                <h3>
                    Powered by
                    <a target="_blank" rel="noreferrer" href="https://reactjs.org/" style={{ margin: "0px 4px" }}>
                        <img alt="React" src="https://img.shields.io/badge/-React-77dffc?logo=react&logoColor=ffffff"></img>
                    </a>
                    and
                    <a target="_blank" rel="noreferrer" href="https://dotnet.microsoft.com/" style={{ marginLeft: "4px" }} >
                        <img alt=".Net 5" src="https://img.shields.io/badge/.NET5-6e16e8?logo=C-Sharp&logoColor=ffffff" />
                    </a>
                </h3>
                <div>
                    <p>
                        Contact me: <a href="mailto:yang.caidong@foxmail.com">yang.caidong@foxmail.com</a>
                    </p>
                    <div>
                        <a href="https://github.com/cd-yang" target="_blank" rel="noreferrer">GitHub</a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}