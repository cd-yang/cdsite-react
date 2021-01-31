import { Layout } from 'antd';
import * as CSS from 'csstype';

const { Footer: AntFooter } = Layout;

export default function Footer() {
    return (
        <AntFooter style={footerStyle}>
            <div className="beian"><a href="http://www.beian.miit.gov.cn/" rel="noreferrer" target="_blank">沪ICP备20008178号 </a></div>
            <div className="copyright">&copy;
          <span>2020</span>
                <span className="with-love">
                    <i className="fa fa-user"></i>
                </span>
                <span className="author">CD Yang</span>
            </div>
        </AntFooter>
    );
}

const footerStyle: CSS.Properties = {
    background: 'rgb(227,227,227)',
    width: '100%',
    padding: '5px 0px',
};
